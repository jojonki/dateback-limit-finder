(function () {
  'use strict';

  const CURRENT_YEAR = 2026;

  // ── ステータス判定 ──────────────────────────────────────────────────────────
  function getStatus(camera) {
    if (camera.openEnded) return 'open';
    if (camera.limitYear < CURRENT_YEAR) return 'expired';
    if (camera.limitYear <= CURRENT_YEAR + 4) return 'soon';
    return 'active';
  }

  const STATUS_LABEL = {
    expired: 'Expired',
    soon:    'Ending Soon',
    active:  'Active',
    open:    'Limit Unknown',
  };

  const TYPE_LABEL = {
    compact:   'Compact',
    slr:       'SLR',
    halfframe: 'Half-frame',
  };

  // ── Fuse.js 初期化 ──────────────────────────────────────────────────────────
  let fuse = null;
  if (typeof Fuse !== 'undefined') {
    fuse = new Fuse(CAMERAS, {
      keys: [
        { name: 'brand',   weight: 0.3 },
        { name: 'brandJa', weight: 0.3 },
        { name: 'model',   weight: 0.4 },
      ],
      threshold: 0.4,
      includeScore: true,
    });
  }

  function fuzzySearch(query) {
    if (!query.trim()) return CAMERAS;
    if (fuse) return fuse.search(query).map(r => r.item);
    // フォールバック（CDN 未読込時）
    const q = query.toLowerCase();
    return CAMERAS.filter(c =>
      c.brand.toLowerCase().includes(q) ||
      c.brandJa.includes(query) ||
      c.model.toLowerCase().includes(q)
    );
  }

  // ── 状態管理 ────────────────────────────────────────────────────────────────
  const state = {
    query:    '',
    types:    new Set(),    // 空 = すべて表示
    statuses: new Set(),    // 空 = すべて表示
    brands:   new Set(),    // 空 = すべて表示
    sortKey:  'limitYear',
    sortDir:  'asc',
  };

  // ── フィルタ & ソートパイプライン ───────────────────────────────────────────
  function applyFilters() {
    let result = fuzzySearch(state.query);

    if (state.types.size > 0)
      result = result.filter(c => state.types.has(c.cameraType));

    if (state.statuses.size > 0)
      result = result.filter(c => state.statuses.has(getStatus(c)));

    if (state.brands.size > 0)
      result = result.filter(c => state.brands.has(c.brand));

    result = result.slice().sort((a, b) => {
      let av = a[state.sortKey];
      let bv = b[state.sortKey];
      if (typeof av === 'string') av = av.toLowerCase();
      if (typeof bv === 'string') bv = bv.toLowerCase();
      if (av < bv) return state.sortDir === 'asc' ? -1 : 1;
      if (av > bv) return state.sortDir === 'asc' ?  1 : -1;
      return 0;
    });

    return result;
  }

  // ── ブランドフィルタ生成 ────────────────────────────────────────────────────
  function buildBrandFilters() {
    const brands = [...new Set(CAMERAS.map(c => c.brand))].sort();
    const container = document.getElementById('brand-filters');
    brands.forEach(brand => {
      const label = document.createElement('label');
      label.className = 'filter-label';
      label.innerHTML = `<input type="checkbox" name="brand" value="${brand}"> ${brand}`;
      container.appendChild(label);
    });
  }

  // ── テーブルレンダリング ────────────────────────────────────────────────────
  function renderTable(cameras) {
    const tbody = document.getElementById('cameras-tbody');
    const empty = document.getElementById('empty-message');

    tbody.innerHTML = '';

    if (cameras.length === 0) {
      empty.hidden = false;
      return;
    }
    empty.hidden = true;

    const frag = document.createDocumentFragment();
    cameras.forEach((camera, idx) => {
      const status = getStatus(camera);
      const tr = document.createElement('tr');
      tr.className = 'data-row';
      tr.dataset.idx = idx;

      // 参考リンクセル
      const urls = camera.sourceUrls || [];
      const srcLabel = urls.length <= 1 ? '↗' : `↗ ×${urls.length}`;
      const srcTitle = urls.join('\n');

      // 画像検索 URL
      const searchUrl = 'https://duckduckgo.com/?q=' +
        encodeURIComponent(camera.brand + ' ' + camera.model + ' film camera') +
        '&iax=images&ia=images';

      // 上限年の表示（9999 → ∞）
      const yearDisplay = camera.limitYear === 9999
        ? '<span title="事実上無制限">∞</span>'
        : escHtml(camera.limitDisplay);

      tr.innerHTML = `
        <td class="col-brand">${escHtml(camera.brand)}</td>
        <td class="col-model">${escHtml(camera.model)}</td>
        <td class="col-type">
          <span class="badge badge-${camera.cameraType}">${TYPE_LABEL[camera.cameraType] || camera.cameraType}</span>
        </td>
        <td class="col-year">${yearDisplay}</td>
        <td class="col-status">
          <span class="badge badge-${status}">${STATUS_LABEL[status]}</span>
        </td>
        <td class="col-source">
          ${urls.length > 0 ? `<span class="source-btn" title="${escAttr(srcTitle)}">${srcLabel}</span>` : ''}
          <a class="source-btn img-search-btn" href="${escAttr(searchUrl)}" target="_blank" rel="noopener" title="Search images">🔍</a>
        </td>
      `;

      frag.appendChild(tr);

      // 詳細行（初期非表示）
      const detailTr = document.createElement('tr');
      detailTr.className = 'detail-row';
      detailTr.hidden = true;
      detailTr.dataset.for = idx;

      const linkItems = urls.map(url => {
        const domain = extractDomain(url);
        return `<li><a href="${escAttr(url)}" target="_blank" rel="noopener">↗ ${escHtml(domain)}</a></li>`;
      }).join('');

      detailTr.innerHTML = `
        <td colspan="6">
          ${camera.notes ? `<p class="notes-text">${escHtml(camera.notes)}</p>` : ''}
          ${linkItems ? `<ul class="source-links">${linkItems}</ul>` : ''}
        </td>
      `;

      frag.appendChild(detailTr);
    });

    tbody.appendChild(frag);
    updateResultCount(cameras.length);
  }

  // ── 件数表示 ────────────────────────────────────────────────────────────────
  function updateResultCount(shown) {
    const el = document.getElementById('result-count');
    el.textContent = `Showing ${shown} of ${CAMERAS.length} cameras`;
  }

  // ── ソートアイコン更新 ──────────────────────────────────────────────────────
  function updateSortIcons() {
    document.querySelectorAll('thead th.sortable').forEach(th => {
      th.classList.remove('sort-asc', 'sort-desc');
      if (th.dataset.sort === state.sortKey) {
        th.classList.add(state.sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
      }
    });
  }

  // ── イベント: 検索 ──────────────────────────────────────────────────────────
  function onSearch(e) {
    state.query = e.target.value;
    render();
  }

  // ── イベント: チェックボックス ──────────────────────────────────────────────
  function onFilterChange(e) {
    const { name, value, checked } = e.target;
    const setMap = { type: state.types, status: state.statuses, brand: state.brands };
    const set = setMap[name];
    if (!set) return;
    checked ? set.add(value) : set.delete(value);
    render();
  }

  // ── イベント: ソート ────────────────────────────────────────────────────────
  function onSortClick(e) {
    const th = e.target.closest('th[data-sort]');
    if (!th) return;
    const key = th.dataset.sort;
    if (state.sortKey === key) {
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = key;
      state.sortDir = 'asc';
    }
    updateSortIcons();
    render();
  }

  // ── イベント: 行クリック（展開/折りたたみ） ─────────────────────────────────
  function onRowClick(e) {
    const tr = e.target.closest('tr.data-row');
    if (!tr) return;
    const idx = tr.dataset.idx;
    const detailTr = document.querySelector(`tr.detail-row[data-for="${idx}"]`);
    if (!detailTr) return;
    const isOpen = !detailTr.hidden;
    detailTr.hidden = isOpen;
    tr.classList.toggle('expanded', !isOpen);
  }

  // ── メインレンダリング ──────────────────────────────────────────────────────
  function render() {
    renderTable(applyFilters());
  }

  // ── ユーティリティ ──────────────────────────────────────────────────────────
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;');
  }

  function extractDomain(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }

  // ── 初期化 ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    buildBrandFilters();

    // 検索
    document.getElementById('search-input').addEventListener('input', onSearch);

    // フィルタ（イベント委譲）
    document.querySelector('.sidebar').addEventListener('change', onFilterChange);

    // ソート（イベント委譲）
    document.querySelector('thead').addEventListener('click', onSortClick);

    // 行展開（イベント委譲）
    document.getElementById('cameras-tbody').addEventListener('click', onRowClick);

    // 初期ソートアイコン
    updateSortIcons();

    // 初期レンダリング
    render();
  });

})();
