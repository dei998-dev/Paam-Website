/* =============================================================
   CONTENT — edit here when you have new projects or assets.

   Each project only needs:
     title   — shown big + centered at the top of the popup
     cover   — card thumbnail (image path, gif path, or vimeo url)
     gallery — array of image/video paths shown in the popup
               Set to null or [] if there are no extra images.
   ============================================================= */

var projects = [
  /* idx 0 — Cover Capricornia */
  {
    title: 'Cover Capricornia',
    cover: 'imgs/01_cover_capricornia/capri_uno.webp',
    gallery: ['imgs/01_cover_capricornia/capri_dos.webp', 'imgs/01_cover_capricornia/capri_tres.webp', 'imgs/01_cover_capricornia/capri_spotify.webp'],
  },
  /* idx 1 — Pinxame */
  {
    title: 'Pinxame',
    cover: 'imgs/02_pinxame/pinxame_portada.webp',
    gallery: ['imgs/02_pinxame/pinxame_3-caprichos.webp', 'imgs/02_pinxame/pinxame_base15.webp', 'imgs/02_pinxame/pinxame_miel-en-tu-sien.webp', 'imgs/02_pinxame/pinxame_Spotify.webp', 'imgs/02_pinxame/pinxame_uno.webp'],
  },
  /* idx 2 — Ene Ese */
  {
    title: 'Ene Ese',
    cover: 'imgs/03_cover_art_ene_ese/eneese_cover-final.gif',
    gallery: ['imgs/03_cover_art_ene_ese/op1.webp', 'imgs/03_cover_art_ene_ese/op2.webp', 'imgs/03_cover_art_ene_ese/op3.webp', 'imgs/03_cover_art_ene_ese/op4.webp', 'imgs/03_cover_art_ene_ese/op5.webp', 'imgs/03_cover_art_ene_ese/op6.webp', 'imgs/03_cover_art_ene_ese/op7.webp'],
  },
  /* idx 3 — Mariposas */
  {
    title: 'Mariposas',
    cover: 'imgs/23_glitch_video/tornasol.gif',
    gallery: null,
  },
  /* idx 4 — DFL */
  {
    title: 'DFL',
    cover: 'imgs/04_dfl/dfl.webp',
    gallery: ['imgs/04_dfl/dfl_efecto-etiqueta.webp'],
  },
  /* idx 5 — Funkafest */
  {
    title: 'Funkafest',
    cover: 'imgs/05_funka_fest/funka_POST1.webp',
    gallery: ['imgs/05_funka_fest/funka_post2.webp', 'https://vimeo.com/1172415056?share=copy&fl=sv&fe=ci', 'https://vimeo.com/1172415208?fl=ip&fe=ec', 'imgs/05_funka_fest/funka_post3.webp', 'imgs/05_funka_fest/funka_uno.webp', 'imgs/05_funka_fest/funak_4.webp', 'imgs/05_funka_fest/funka_5.webp', 'imgs/05_funka_fest/funka_cartelera.webp', 'imgs/05_funka_fest/funka_llamada.webp'],
  },
  /* idx 6 — Krudo */
  {
    title: 'Krudo',
    cover: 'imgs/09_krudo/krudo1.gif',
    gallery: ['imgs/09_krudo/krudo.gif'],
  },
  /* idx 7 — Origen */
  {
    title: 'Origen',
    cover: 'imgs/25_origen/origen.gif',
    gallery: null,
  },
  /* idx 8 — Sacude */
  {
    title: 'Sacude',
    cover: 'imgs/06_sacude/sacude.gif',
    gallery: null,
  },
  /* idx 9 — Calendaria */
  {
    title: 'Calendaria',
    cover: 'imgs/10_calendaria/calendaria.gif',
    gallery: [],
  },
  /* idx 10 — Prints */
  {
    title: 'Prints',
    cover: 'imgs/18_prints/print_01.webp',
    gallery: null,
  },
  /* idx 11 — Expo Martina */
  {
    title: 'Expo Martina',
    cover: 'imgs/14_expo_martina/expo_martina.webp',
    gallery: null,
  },
  /* idx 12 — Club */
  {
    title: 'Club',
    cover: 'imgs/21_club/club.gif',
    gallery: [],
  },
  /* idx 13 — Random */
  {
    title: 'Random',
    cover: 'imgs/27_random/random.gif',
    gallery: [],
  },
  /* idx 14 — Cartoon Madness */
  {
    title: 'Cartoon Madness',
    cover: 'imgs/08_cartoon_mad/cartoon_video.gif',
    gallery: ['imgs/08_cartoon_mad/cartoon_insta.webp'],
  },
  /* idx 15 — Cuadro */
  {
    title: 'Cuadro',
    cover: 'imgs/13_cuadro/expoCuadro.gif',
    gallery: ['imgs/13_cuadro/1.webp', 'imgs/13_cuadro/2.webp', 'imgs/13_cuadro/3.webp', 'imgs/13_cuadro/5.webp'],
  },
  /* idx 16 — Prints 2 */
  {
    title: 'Prints 2',
    cover: 'imgs/18_prints/print_02.webp',
    gallery: null,
  },
  /* idx 17 — Print Fluo */
  {
    title: 'Print Fluo',
    cover: 'imgs/26_printfluo/print-fluo.gif',
    gallery: null,
  },
  /* idx 18 — Nero Cafe (video) */
  {
    title: 'Nero Cafe',
    cover: 'imgs/17_nero/nero-cafee.gif',
    gallery: ['imgs/17_nero/nero_02.webp', 'imgs/17_nero/nero_03.webp', 'imgs/17_nero/nero_04.webp', 'imgs/17_nero/nero_05.webp', 'imgs/17_nero/nero_06.webp', 'imgs/17_nero/nero_07.webp', 'imgs/17_nero/nero_08.webp', 'imgs/17_nero/nero_post1.webp', 'imgs/17_nero/nero_post2.webp', 'imgs/17_nero/nero_post3.webp'],
  },
  /* idx 19 — Nero Cafe (photo) */
  {
    title: 'Nero Cafe',
    cover: 'imgs/17_nero/nero_01.webp',
    gallery: null,
  },
  /* idx 20 — Nero Cafe (video 2) */
  {
    title: 'Nero Cafe',
    cover: 'imgs/17_nero/nero-ilustraciones.gif',
    gallery: null,
  },
  /* idx 21 — Cuatro */
  {
    title: 'Cuatro',
    cover: 'imgs/22_cuatro/cuatro.webp',
    gallery: null,
  },
  /* idx 22 — Nase */
  {
    title: 'Nase',
    cover: 'imgs/24_nase/nase1.gif',
    gallery: null,
  },
  /* idx 23 — Libro */
  {
    title: 'Libro Bouquet',
    cover: 'imgs/15_libro1/libro-bouquet.gif',
    gallery: ['imgs/15_libro1/libro_1.webp', 'imgs/15_libro1/libro_2.webp', 'imgs/15_libro1/libro_3.webp', 'imgs/15_libro1/libro_4.webp', 'imgs/15_libro1/libro_5.webp', 'imgs/15_libro1/libro_6.webp', 'imgs/15_libro1/libro_7.webp', 'imgs/15_libro1/libro_8.webp', 'imgs/15_libro1/libro_cuatro.webp', 'imgs/15_libro1/libro_final.webp', 'imgs/15_libro1/portada.webp'],
  },
  /* idx 24 — Pajaras de Fuego */
  {
    title: 'Pájaras de Fuego',
    cover: 'imgs/11_pajaras_fuego/pajaras-de-fuego.gif',
    gallery: null,
  },
  /* idx 25 — Profana */
  {
    title: 'Profana',
    cover: 'imgs/07_profana/Poster-Profana.gif',
    gallery: null,
  },
  /* idx 26 — Mareas */
  {
    title: 'Mareas',
    cover: 'imgs/16_mareas/mareas_00.webp',
    gallery: ['https://vimeo.com/1172420092?fl=ip&fe=ec', 'imgs/16_mareas/mareas_01.webp', 'imgs/16_mareas/mareas_02.webp', 'imgs/16_mareas/mareas_03.webp', 'imgs/16_mareas/mareas_04.webp', 'imgs/16_mareas/mareas_05.webp', 'imgs/16_mareas/mareas_06.webp'],
  },
];



/* =============================================================
   LAYOUT — controls position/size/rotation of each card.
   idx      = project index (position in the list above, 0-based)
               so idx:0 = 1st project, idx:1 = 2nd project, etc.
   leftPct  = distance from left edge as % of screen width
   widthPct = card width as % of screen width
   aspect   = height ÷ width  (0.65 landscape · 1.0 square · 1.4 portrait)
   rot      = rotation in degrees (negative = tilts left)
   yOffset  = vertical nudge in px within the row
   =============================================================  */
var rows = [
  // #1 — big portrait, center
  [
    { idx:  0, leftPct: 22, widthPct: 52, aspect: 1.10, rot: -1.0, yOffset:  0 },
  ],
  // #2 small landscape top-right + #3 tall portrait bottom-left
  [
    { idx:  2, leftPct: 48, widthPct: 42, aspect: 0.72, rot:  1.5, yOffset:  -30 },
    { idx:  1, leftPct:  8, widthPct: 38, aspect: 1.35, rot: -1.5, yOffset: 30 },
  ],
  // #4 small square left + #5 square rotated right
  [
    { idx:  3, leftPct:  6, widthPct: 26, aspect: 1.00, rot:  2.0, yOffset: 20 },
    { idx:  4, leftPct: 36, widthPct: 50, aspect: 0.68, rot: -1.5, yOffset:  0 },
  ],
  // #6 — tall poster portrait, center
  [
    { idx:  5, leftPct: 24, widthPct: 46, aspect: 1.00, rot:  1.0, yOffset:  0 },
  ],
  // #7 — wide full-width landscape
  [
    { idx:  6, leftPct:  8, widthPct: 80, aspect: 0.48, rot: -0.5, yOffset:  0 },
  ],
  // #8 big square left + #9 portrait right
  [
    { idx:  7, leftPct:  6, widthPct: 42, aspect: 1.25, rot:  1.5, yOffset: 10 },
    { idx:  8, leftPct: 50, widthPct: 42, aspect: 1.25, rot: -1.0, yOffset:  0 },
  ],
  // #10 portrait center-left + #11 landscape left + #12 square right (overlapping cluster)
  [
    { idx: 10, leftPct: 28, widthPct: 34, aspect: 1.25, rot: 0, yOffset:  -200, zIdx: 10 },
    { idx:  9, leftPct:  6, widthPct: 36, aspect: 1.00, rot:  1.0, yOffset: 60 },
    { idx: 11, leftPct: 52, widthPct: 40, aspect: 1.00, rot:  2.0, yOffset: 50 },
  ],
  // #13 landscape left + #14 small square right (tighter)
  [
    { idx: 12, leftPct:  8, widthPct: 36, aspect: 1.45, rot: -1.0, yOffset:  0 },
    { idx: 13, leftPct: 54, widthPct: 30, aspect: 0.85, rot:  1.5, yOffset: -50 },
  ],
  // #15 small square right + extends from above
  [
    { idx: 14, leftPct: 55, widthPct: 42, aspect: 1, rot: 0, yOffset:  -350 , zIdx: 10},
  ],
  // #16 #17 #18 — three small squares in a row
  [
    { idx: 15, leftPct:  6, widthPct: 26, aspect: 0.90, rot:  0, yOffset:  5 },
    { idx: 16, leftPct: 33, widthPct: 28, aspect: 1.25, rot: 0, yOffset:  -40 },
    { idx: 17, leftPct: 65, widthPct: 26, aspect: 1.20, rot:  0, yOffset: 10 },
  ],
  // #19 wide landscape center + #20 small square left below
  [
    { idx: 18, leftPct: 20, widthPct: 53, aspect: 0.48, rot: -0.5, yOffset:  0 },
    { idx: 19, leftPct:  15, widthPct: 20, aspect: 1.00, rot:  2.0, yOffset: 200 },
  ],
  // #21 small square right + #22 big portrait left
  [
    { idx: 20, leftPct: 60, widthPct: 25, aspect: 1.00, rot: 0, yOffset:  -200 },
    { idx: 21, leftPct:  20, widthPct: 30, aspect: 1.20, rot:  1.5, yOffset: 20 },
  ],
  // #23 small square right
  [
    { idx: 22, leftPct: 60, widthPct: 15, aspect: 1.00, rot: 0, yOffset:  -280 },
  ],
  // #24 landscape left + #25 landscape right
  [
    { idx: 23, leftPct:  6, widthPct: 35, aspect: 1.20, rot:  0, yOffset: 20 },
    { idx: 24, leftPct: 46, widthPct: 40, aspect: 1.20, rot: 0, yOffset:  -80 },
  ],
  // #26 — wide full-width landscape
  [
    { idx: 25, leftPct:  30, widthPct: 40, aspect: 1.40, rot:  0.5, yOffset:  0 },
  ],
  // #27 — small square centered
  [
    { idx: 26, leftPct: 36, widthPct: 22, aspect: 0.50, rot: -1.0, yOffset:  0 },
  ],
];

/* =============================================================
   ENGINE — no need to edit below this line
   ============================================================= */

/*
  makeMedia(src, cls, fallbackTitle, forModal)
  forModal=false → Vimeo silent autoplay background (card cover)
  forModal=true  → Vimeo interactive player (modal hero / gallery)
*/
function makeMedia(src, cls, fallbackTitle, forModal) {
  var vimeoMatch = src && src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    var id = vimeoMatch[1];
    var iframe = document.createElement('iframe');
    if (forModal) {
      iframe.src = 'https://player.vimeo.com/video/' + id + '?autoplay=0&title=0&byline=0&portrait=0';
      iframe.className = cls || 'modal-hero-iframe';
    } else {
      // background=1 → silent autoplay loop, no Vimeo UI
      iframe.src = 'https://player.vimeo.com/video/' + id + '?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0';
      iframe.className = cls;
    }
    iframe.allow           = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.border    = 'none';
    return iframe;
  }

  var isVideo = src && /\.(mp4|webm|mov)$/i.test(src);
  if (isVideo) {
    var v = document.createElement('video');
    v.className   = cls;
    v.src         = src;
    v.autoplay    = true;
    v.muted       = true;
    v.loop        = true;
    v.playsInline = true;
    if (forModal) v.controls = true;
    return v;
  }

  var img = document.createElement('img');
  img.className = cls;
  img.src       = src || '';
  if (fallbackTitle) img.alt = fallbackTitle;
  img.loading   = 'lazy';
  return img;
}

/* Swap the modal hero for any src; marks the active thumbnail */
function setModalHero(src) {
  var wrap    = document.getElementById('modal-hero').parentNode;
  var oldHero = document.getElementById('modal-hero');
  var newHero = makeMedia(src, 'modal-hero', '', true);
  newHero.id  = 'modal-hero';
  if (newHero.tagName === 'IFRAME') newHero.className = 'modal-hero-iframe';
  wrap.replaceChild(newHero, oldHero);
  document.querySelectorAll('.modal-thumb').forEach(function(el) {
    el.classList.toggle('active', el.dataset.src === src);
  });
}

function buildCanvas() {
  var canvas = document.getElementById('canvas');
  var vw = Math.max(window.innerWidth, 320);

  if (vw < 700) { buildMobileCanvas(canvas); return; }

  var ROW_GAP = 20;   // tight gap — rows nearly touch, matching reference
  var cursorY = 32;

  rows.forEach(function(row) {
    var rowMaxH = 0;
    row.forEach(function(def) {
      var h = (vw * def.widthPct / 100) * def.aspect + def.yOffset;
      if (h > rowMaxH) rowMaxH = h;
    });

    row.forEach(function(def) {
      var p   = projects[def.idx];
      var hPx = (vw * def.widthPct / 100) * def.aspect;

      var card = document.createElement('div');
      card.className       = 'card';
      card.style.left      = def.leftPct + 'vw';
      card.style.top       = (cursorY + def.yOffset) + 'px';
      card.style.width     = def.widthPct + 'vw';
      card.style.height    = hPx + 'px';
      card.style.transform = 'rotate(' + def.rot + 'deg)';
      card.style.zIndex    = card.style.zIndex = def.zIdx || 3;;

      card.addEventListener('mouseenter', function() {
        card.style.transform = 'translate(-3px,-5px) rotate(' + def.rot + 'deg) scale(1.02)';
        card.style.zIndex = '50';
      });
      card.addEventListener('mouseleave', function() {
        card.style.transform = 'rotate(' + def.rot + 'deg)';
        card.style.zIndex = card.style.zIndex = def.zIdx || 3;;
      });

      card.appendChild(makeMedia(p.cover, 'card-img', p.title));

      (function(i) { card.addEventListener('click', function() { openModal(i); }); })(def.idx);
      canvas.appendChild(card);
    });

    cursorY += rowMaxH + ROW_GAP;
  });

  canvas.style.height = (cursorY + 80) + 'px';
}

function buildMobileCanvas(canvas) {
  canvas.style.height = '';
  projects.forEach(function(p, idx) {
    var card = document.createElement('div');
    card.className = 'card';
    card.appendChild(makeMedia(p.cover, 'card-img', p.title));

    (function(i) { card.addEventListener('click', function() { openModal(i); }); })(idx);
    canvas.appendChild(card);
  });
}

/* ── MODAL ── */
function openModal(idx) {
  var p = projects[idx];

  // Title — big, centered (only metadata shown)
  document.getElementById('modal-title').textContent = p.title;

  // Clear meta / desc / tags — no longer used
  document.getElementById('modal-meta').textContent = '';
  document.getElementById('modal-desc').textContent = '';
  document.getElementById('modal-tags').innerHTML   = '';

  // Hero — starts as the cover
  var heroWrap = document.getElementById('modal-hero').parentNode;
  var oldHero  = document.getElementById('modal-hero');
  var newHero  = makeMedia(p.cover, 'modal-hero', p.title, true);
  newHero.id   = 'modal-hero';
  if (newHero.tagName === 'IFRAME') newHero.className = 'modal-hero-iframe';
  heroWrap.replaceChild(newHero, oldHero);

  // Gallery — clickable thumbnails that swap the hero
  var gallery = document.getElementById('modal-gallery');
  gallery.innerHTML = '';
  var items = p.gallery || [];
  var showGallery = items.length > 0 && !(items.length === 1 && items[0] === p.cover);

  if (showGallery) {
    items.forEach(function(src) {
      var thumb = document.createElement('div');
      thumb.className   = 'modal-thumb';
      thumb.dataset.src = src;
      thumb.appendChild(makeMedia(src, 'modal-thumb-media', p.title, false));
      thumb.addEventListener('click', function() { setModalHero(src); });
      gallery.appendChild(thumb);
    });
  }

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
  document.querySelectorAll('#modal video').forEach(function(v) { v.pause(); });
}

function handleModalClick(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

/* ── CONTACT BUTTON — scrolls to footer ── */
document.getElementById('contact-trigger').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

buildCanvas();
window.addEventListener('resize', function() {
  var c = document.getElementById('canvas');
  c.innerHTML = '';
  c.style.height = '';
  buildCanvas();
});