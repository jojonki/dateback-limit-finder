// Film camera date-back limit year data
// cameraType: "compact" | "slr" | "halfframe"
const CAMERAS = [
  // ── Canon ──────────────────────────────────────────────────────────────────
  {
    brand: "Canon", brandJa: "キヤノン",
    model: "Autoboy 6",
    limitYear: 2029, limitDisplay: "2029",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/1biwbda/point_and_shoots_w_quartz_date/"
    ],
    notes: "Mid-series Autoboy with Quartz Date."
  },
  {
    brand: "Canon", brandJa: "キヤノン",
    model: "Autoboy Panorama SII XL (Sure Shot Z135)",
    limitYear: 2029, limitDisplay: "2029",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/1q8qp9t/updated_list_of_date_backs_that_can_imprint_years/"
    ],
    notes: "Panorama-capable compact."
  },
  {
    brand: "Canon", brandJa: "キヤノン",
    model: "Late Sure Shot Series (general)",
    limitYear: 2030, limitDisplay: "2030–2035",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/16zz7uo/which_film_camerasfilm_camera_backs_still_have/"
    ],
    notes: "Later Autoboy / Sure Shot models. Year limit varies by model (2030–2035)."
  },
  {
    brand: "Canon", brandJa: "キヤノン",
    model: "EOS 620 Quartz Date Back E",
    limitYear: 2029, limitDisplay: "2029",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Optional data back for the EOS 620 SLR."
  },
  {
    brand: "Canon", brandJa: "キヤノン",
    model: "Autoboy WT28",
    limitYear: 2022, limitDisplay: "2022",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Wide-angle 28mm compact."
  },

  // ── Contax ─────────────────────────────────────────────────────────────────
  {
    brand: "Contax", brandJa: "コンタックス",
    model: "T2",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Premium compact with 38mm f/2.8 Sonnar. Date function stopped at 2019."
  },
  {
    brand: "Contax", brandJa: "コンタックス",
    model: "G1 (with GD-1 data back)",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "G1 body with the optional GD-1 data back attached."
  },
  {
    brand: "Contax", brandJa: "コンタックス",
    model: "T3",
    limitYear: 2049, limitDisplay: "2049–2100",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/",
      "https://casualphotophile.com/2019/01/14/contax-t3-t2-t-buyers-guide/"
    ],
    notes: "Final T-series with 35mm f/2.8 Sonnar. Later models have a long-life calendar."
  },
  {
    brand: "Contax", brandJa: "コンタックス",
    model: "TVS III",
    limitYear: 2049, limitDisplay: "2049–2100",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Last model of the premium TVS zoom series."
  },

  // ── Fujifilm ────────────────────────────────────────────────────────────────
  {
    brand: "Fujifilm", brandJa: "富士フイルム",
    model: "Tiara / DL Super Mini",
    limitYear: 2026, limitDisplay: "2025–2026",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://foqus.film/upload/iblock/e37/f42dvp9hhndjlze63euida33ohnfr0cn/FujiFilm%20DL%20Super%20Mini%20-%20Manual.pdf",
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Slim fixed-lens compact released in 1994. Manual states calendar range \"94–25\"."
  },
  {
    brand: "Fujifilm", brandJa: "富士フイルム",
    model: "Zoom Date 2.8",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: ""
  },
  {
    brand: "Fujifilm", brandJa: "富士フイルム",
    model: "Zoom Date 90 SR / 115 SR / 125 SR",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Various models in the Zoom Date series."
  },
  {
    brand: "Fujifilm", brandJa: "富士フイルム",
    model: "Klasse S / Klasse W",
    limitYear: 2040, limitDisplay: "2040",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/page-3"
    ],
    notes: "Fujifilm's last premium compact models."
  },
  {
    brand: "Fujifilm", brandJa: "富士フイルム",
    model: "ZOOM CARDIA SUPER 320",
    limitYear: 2024, limitDisplay: "2024",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: ""
  },
  {
    brand: "Fujifilm", brandJa: "富士フイルム",
    model: "Silvi Series",
    limitYear: 2031, limitDisplay: "2031–2035",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Year limit varies by model."
  },

  // ── Konica ──────────────────────────────────────────────────────────────────
  {
    brand: "Konica", brandJa: "コニカ",
    model: "Big Mini 301",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.japancamerahunter.com/2018/08/camera-geekery-tokyo-2020-olympics-quartz-date-camera-guide/"
    ],
    notes: "Released in 1990. Early model of the popular Big Mini series."
  },
  {
    brand: "Konica", brandJa: "コニカ",
    model: "Big Mini F",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.cameramanuals.org/konica/konica_ai_big_mini.pdf",
      "https://www.analog.cafe/r/konica-big-mini-f-camera-review-ieqi"
    ],
    notes: "Released in 1997. Top model of the series with a bright 35mm f/2.8 lens."
  },
  {
    brand: "Konica", brandJa: "コニカ",
    model: "Capios Series",
    limitYear: 2029, limitDisplay: "2029",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Later Capios series, successor to the Big Mini line."
  },

  // ── Kyocera ──────────────────────────────────────────────────────────────────
  {
    brand: "Kyocera", brandJa: "京セラ",
    model: "Zoomate / T PROOF Series",
    limitYear: 2049, limitDisplay: "2049–2098",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Various Kyocera zoom compacts. Year limit varies by model."
  },

  // ── Leica ────────────────────────────────────────────────────────────────────
  {
    brand: "Leica", brandJa: "ライカ",
    model: "C1",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: ""
  },

  // ── Minolta ──────────────────────────────────────────────────────────────────
  {
    brand: "Minolta", brandJa: "ミノルタ",
    model: "AF101r",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.35mmc.com/07/02/2019/a-quartz-date-dilemma-by-taylor-ervin/"
    ],
    notes: "Made in 1994. Calendar range is 1980–2019."
  },
  {
    brand: "Minolta", brandJa: "ミノルタ",
    model: "Freedom Escort QD",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.35mmc.com/07/02/2019/a-quartz-date-dilemma-by-taylor-ervin/"
    ],
    notes: ""
  },
  {
    brand: "Minolta", brandJa: "ミノルタ",
    model: "X-700 w/ Multi Function Back",
    limitYear: 2099, limitDisplay: "2099",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "SLR data back for the X-700."
  },
  {
    brand: "Minolta", brandJa: "ミノルタ",
    model: "Alpha 7",
    limitYear: 2040, limitDisplay: "2040",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/1biwbda/point_and_shoots_w_quartz_date/"
    ],
    notes: "SLR. Reported as affected by the so-called \"Y2K40 bug\"."
  },

  // ── Nikon ────────────────────────────────────────────────────────────────────
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "35Ti / 28Ti",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/page-3",
      "https://www.mir.com.my/rb/photography/companies/nikon/htmls/models/compact-images/Nikon35Ti28Ti/Html/spec28Ti35TiQD.htm"
    ],
    notes: "Premium titanium-body compact released in 1993. Features an analog gauge on the top plate."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "One Touch Zoom 90s QD",
    limitYear: 2049, limitDisplay: "2049",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: ""
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "MF-22 (Data Back for F4)",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Data back for the F4. An exception in the MF series — limit year is unusually short."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "MF-21 (Data Back for N8008)",
    limitYear: 2099, limitDisplay: "2099",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/1q8qp9t/updated_list_of_date_backs_that_can_imprint_years/",
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Data back for the N8008 (F801). Displays 2-digit year in a '00–'99 loop."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "MF-23 (Data Back for F4S)",
    limitYear: 9999, limitDisplay: "9999 (no limit)",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/15v6nhx/list_of_camera_date_backs_that_go_past_2020_add/"
    ],
    notes: "4-digit year display — no rollover. Effectively unlimited."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "MF-25 (Data Back for F5)",
    limitYear: 2099, limitDisplay: "2099",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Data back for the F5."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "MF-12 / MF-16",
    limitYear: 2100, limitDisplay: "2100",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Data backs for FM2 etc. Designed with a 100-year calendar span."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "AF600 date",
    limitYear: 2020, limitDisplay: "2020+",
    cameraType: "compact", openEnded: true,
    sourceUrls: [
      "https://www.japancamerahunter.com/2018/08/camera-geekery-tokyo-2020-olympics-quartz-date-camera-guide/"
    ],
    notes: "Reported to work past 2020, but exact upper limit is unconfirmed."
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "ZOOM 600 QD",
    limitYear: 2024, limitDisplay: "2024",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: ""
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "TW ZOOM 105",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: ""
  },
  {
    brand: "Nikon", brandJa: "ニコン",
    model: "Lite Touch Zoom Series",
    limitYear: 2039, limitDisplay: "2039–2049",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Year limit varies by model."
  },

  // ── Olympus ──────────────────────────────────────────────────────────────────
  {
    brand: "Olympus", brandJa: "オリンパス",
    model: "mju I (Stylus Infinity)",
    limitYear: 2020, limitDisplay: "2020",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/tkp21m/removing_quartz_date_permanently_olympus_stylus/",
      "https://www.35mmc.com/07/02/2019/a-quartz-date-dilemma-by-taylor-ervin/"
    ],
    notes: "First mju. Calendar stops at 2020. A workaround of covering the date LED with black tape has been reported."
  },
  {
    brand: "Olympus", brandJa: "オリンパス",
    model: "mju II (Stylus Epic)",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.35mmc.com/07/02/2019/a-quartz-date-dilemma-by-taylor-ervin/",
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Successor with 35mm f/2.8 lens. Limit extended 10 years over the original."
  },
  {
    brand: "Olympus", brandJa: "オリンパス",
    model: "mju II DLX",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Variant of the mju II. Contemporary zoom models share the same limit."
  },
  {
    brand: "Olympus", brandJa: "オリンパス",
    model: "OM10 Quartz",
    limitYear: 2009, limitDisplay: "2009",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Quartz date version of the OM10 SLR. Already past its limit."
  },
  {
    brand: "Olympus", brandJa: "オリンパス",
    model: "OZ 80S",
    limitYear: 2029, limitDisplay: "2029",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: ""
  },

  // ── Pentax ───────────────────────────────────────────────────────────────────
  {
    brand: "Pentax", brandJa: "ペンタックス",
    model: "Espio 200",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/16zz7uo/which_film_camerasfilm_camera_backs_still_have/"
    ],
    notes: "Early model in the Espio series."
  },
  {
    brand: "Pentax", brandJa: "ペンタックス",
    model: "LX Dial Data back",
    limitYear: 2019, limitDisplay: "<2020",
    cameraType: "slr", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Data back for the LX SLR. Exact limit unknown, but stops before 2020."
  },
  {
    brand: "Pentax", brandJa: "ペンタックス",
    model: "Espio Mini Quartz Date",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: ""
  },
  {
    brand: "Pentax", brandJa: "ペンタックス",
    model: "Late Espio Series (~1997+)",
    limitYear: 2030, limitDisplay: "2030",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.reddit.com/r/AnalogCommunity/comments/16zz7uo/which_film_camerasfilm_camera_backs_still_have/",
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Models manufactured from around 1997 onward."
  },
  {
    brand: "Pentax", brandJa: "ペンタックス",
    model: "Espio 24EW",
    limitYear: 2099, limitDisplay: "2099",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.35mmc.com/07/02/2019/a-quartz-date-dilemma-by-taylor-ervin/",
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Unusually long calendar for a compact. A top pick if you want the date function to last."
  },
  {
    brand: "Pentax", brandJa: "ペンタックス",
    model: "Espio 120SW / 120SW II",
    limitYear: 2099, limitDisplay: "2099",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/page-3"
    ],
    notes: "Weather-resistant compact. Works until 2099."
  },

  // ── Ricoh ────────────────────────────────────────────────────────────────────
  {
    brand: "Ricoh", brandJa: "リコー",
    model: "R1 / R1s / GR1 / GR1s / GR10 / GR21 / GR1v",
    limitYear: 2024, limitDisplay: "2024",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.japancamerahunter.com/2018/08/camera-geekery-tokyo-2020-olympics-quartz-date-camera-guide/",
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: "Ricoh GR series. Note: aging ribbon cables inside can break, causing LCD or camera failure."
  },

  // ── Rollei ───────────────────────────────────────────────────────────────────
  {
    brand: "Rollei", brandJa: "ローライ",
    model: "Prego MICRON",
    limitYear: 2024, limitDisplay: "2024",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://morographyblog.wordpress.com/2019/12/22/2019_and_beyond/"
    ],
    notes: ""
  },

  // ── Samsung ──────────────────────────────────────────────────────────────────
  {
    brand: "Samsung", brandJa: "サムスン",
    model: "Vega 170 QD",
    limitYear: 2098, limitDisplay: "2098",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.35mmc.com/07/02/2019/a-quartz-date-dilemma-by-taylor-ervin/"
    ],
    notes: "Long-life calendar. A practical choice for keeping the date function usable for decades."
  },

  // ── Yashica ──────────────────────────────────────────────────────────────────
  {
    brand: "Yashica", brandJa: "ヤシカ",
    model: "Samurai X3.0 / X4.0 / Z / Z2",
    limitYear: 2019, limitDisplay: "2019",
    cameraType: "halfframe", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/page-2"
    ],
    notes: "Half-frame SLR. A workaround of setting the clock to Dec 31, 2019 at 11:59 and waiting for the rollover has been reported."
  },
  {
    brand: "Yashica", brandJa: "ヤシカ",
    model: "Zoomdate 165 SE",
    limitYear: 2099, limitDisplay: "2099",
    cameraType: "compact", openEnded: false,
    sourceUrls: [
      "https://www.photrio.com/forum/threads/cameras-with-quartz-date-data-backs-going-past-2020.180061/"
    ],
    notes: "Unusually long calendar for a Yashica model."
  },
  {
    brand: "Yashica", brandJa: "ヤシカ",
    model: "T5 date",
    limitYear: 2020, limitDisplay: "2020+",
    cameraType: "compact", openEnded: true,
    sourceUrls: [
      "https://www.japancamerahunter.com/2018/08/camera-geekery-tokyo-2020-olympics-quartz-date-camera-guide/"
    ],
    notes: "Reported to work past 2020, but exact upper limit is unconfirmed."
  },
];
