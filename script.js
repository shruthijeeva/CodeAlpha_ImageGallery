/* ===================================================
   WINOGRAND GALLERY — script.js
   Cursor, Noise, Loader, Gallery, Lightbox, Filters
=================================================== */

// ──────────────────────────────────────────────────
// DATA — Garry Winogrand photographs
// Using high-quality Unsplash street/life photography
// that evokes Winogrand's aesthetic
// ──────────────────────────────────────────────────
const photos = [
  {
    id: 1, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    title: 'New York City, 1961',
    year: '1961', location: 'New York City, USA',
    desc: 'Winogrand prowled the streets of Manhattan with his Leica, capturing the city\'s relentless energy in candid, unguarded moments.'
  },
  {
    id: 2, category: 'life',
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    title: 'American Life, 1963',
    year: '1963', location: 'United States',
    desc: 'From his series documenting the American condition, this image captures the restless optimism of postwar America.'
  },
  {
    id: 3, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
    title: 'Times Square, 1952',
    year: '1952', location: 'Times Square, New York',
    desc: 'The chaotic geometry of Times Square — billboards, bodies, and blinding light — photographed with Winogrand\'s signature wide-angle intimacy.'
  },
  {
    id: 4, category: 'zoo',
    src: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=600&q=80',
    title: 'Central Park Zoo, 1967',
    year: '1967', location: 'Central Park, New York',
    desc: 'In his celebrated book "The Animals" (1969), Winogrand explored the boundary between human and animal, observer and observed.'
  },
  {
    id: 5, category: 'life',
    src: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80',
    title: 'Women Are Beautiful, 1975',
    year: '1975', location: 'Various, USA',
    desc: 'Winogrand\'s controversial 1975 monograph captured women in public spaces, exploring the complexity of the male gaze in postwar America.'
  },
  {
    id: 6, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80',
    title: 'Fifth Avenue, 1968',
    year: '1968', location: 'Fifth Avenue, New York',
    desc: 'The relentless flow of pedestrians on Fifth Avenue — a river of anonymous faces that Winogrand transformed into poetry.'
  },
  {
    id: 7, category: 'life',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    title: 'Fort Worth, Texas, 1974',
    year: '1974', location: 'Fort Worth, Texas',
    desc: 'After relocating to Los Angeles in the 1970s, Winogrand traveled extensively, photographing rodeos, airports, and the vast American landscape.'
  },
  {
    id: 8, category: 'zoo',
    src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80',
    title: 'The Animals, 1969',
    year: '1969', location: 'Bronx Zoo, New York',
    desc: 'Published by MoMA in 1969, "The Animals" remains one of photography\'s most conceptually rich explorations of the human–animal encounter.'
  },
  {
    id: 9, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=600&q=80',
    title: 'Grand Central, 1955',
    year: '1955', location: 'Grand Central Terminal, New York',
    desc: 'The cathedral light streaming through Grand Central\'s arched windows illuminates the daily transit of thousands of anonymous commuters.'
  },
  {
    id: 10, category: 'life',
    src: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=600&q=80',
    title: 'World\'s Fair, 1964',
    year: '1964', location: 'Queens, New York',
    desc: 'The 1964 New York World\'s Fair provided Winogrand with a rich tapestry of American aspiration, commerce, and mass spectacle.'
  },
  {
    id: 11, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=600&q=80',
    title: 'Coney Island, 1952',
    year: '1952', location: 'Coney Island, Brooklyn',
    desc: 'Coney Island in summer: a democratic carnival of bodies, pleasure, and the great American pursuit of leisure photographed in blazing sunlight.'
  },
  {
    id: 12, category: 'life',
    src: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?w=600&q=80',
    title: 'Los Angeles, 1978',
    year: '1978', location: 'Los Angeles, California',
    desc: 'In his final years, Winogrand prowled Los Angeles\'s boulevards, capturing the sprawling, sun-bleached mythology of the West Coast.'
  },
  {
    id: 13, category: 'zoo',
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80',
    title: 'San Diego Zoo, 1970',
    year: '1970', location: 'San Diego, California',
    desc: 'A fox gazes through wire mesh — a confrontation between captivity and wildness that encapsulates the central tension of Winogrand\'s animal series.'
  },
  {
    id: 14, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=600&q=80',
    title: 'Central Park, 1960',
    year: '1960', location: 'Central Park, New York',
    desc: 'Central Park as social theatre — Winogrand understood the park as a stage where all of New York performed for itself.'
  },
  {
    id: 15, category: 'life',
    src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80',
    title: 'Airport Series, 1973',
    year: '1973', location: 'JFK Airport, New York',
    desc: 'From his posthumous "Public Relations" series — airports as the new town squares of a mobile, disconnected America.'
  },
  {
    id: 16, category: 'life',
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    title: 'Texas State Fair, 1964',
    year: '1964', location: 'Dallas, Texas',
    desc: 'The exuberant chaos of the state fair — a perfect arena for Winogrand\'s instinctive, tilted compositions and his love of American excess.'
  },
  {
    id: 17, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
    title: 'Lower East Side, 1958',
    year: '1958', location: 'Lower East Side, New York',
    desc: 'The tenement streets of the Lower East Side — Winogrand\'s own territory, photographed with the intimacy of someone who knew every corner.'
  },
  {
    id: 18, category: 'zoo',
    src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&q=80',
    title: 'Lion House, 1967',
    year: '1967', location: 'Bronx Zoo, New York',
    desc: 'The lion stares directly at the camera. Who is observing whom? This is the question at the heart of Winogrand\'s animal photographs.'
  },
  {
    id: 19, category: 'life',
    src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600&q=80',
    title: 'Women Are Beautiful II, 1975',
    year: '1975', location: 'Various, USA',
    desc: 'The second major image from his polarizing 1975 monograph, which remains a flashpoint in debates about photography, desire, and power.'
  },
  {
    id: 20, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=600&q=80',
    title: 'Hudson River, 1961',
    year: '1961', location: 'West Side Piers, New York',
    desc: 'The piers along the Hudson were a world unto themselves — dockworkers, sailors, and the industrial beauty of a working waterfront.'
  },
  {
    id: 21, category: 'life',
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80',
    title: 'Stock Show & Rodeo, 1974',
    year: '1974', location: 'Fort Worth, Texas',
    desc: 'Winogrand spent weeks at the Fort Worth stock show, producing some of his most kinetic and visually complex photographs.'
  },
  {
    id: 22, category: 'nyc',
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
    title: 'Brooklyn Bridge, 1956',
    year: '1956', location: 'Brooklyn Bridge, New York',
    desc: 'The Brooklyn Bridge as a place of crossing — not just the physical span, but the social and psychic distances traversed daily in the city.'
  },
  {
    id: 23, category: 'zoo',
    src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&q=80',
    title: 'Penguin Pool, 1968',
    year: '1968', location: 'Central Park Zoo, New York',
    desc: 'The formal absurdity of penguins in a modernist concrete pool gave Winogrand one of his most quietly comic images in the series.'
  },
  {
    id: 24, category: 'life',
    src: 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=900&q=85',
    thumb: 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=600&q=80',
    title: 'California, 1980',
    year: '1980', location: 'California, USA',
    desc: 'Among his last great photographs — California light, endless roads, and the mythic horizon of an America still searching for itself.'
  }
];

// ──────────────────────────────────────────────────
// NOISE CANVAS
// ──────────────────────────────────────────────────
(function initNoise() {
  const canvas = document.getElementById('noise-canvas');
  const ctx = canvas.getContext('2d');
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawNoise() {
    const w = canvas.width, h = canvas.height;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255 | 0;
      data[i] = v; data[i+1] = v; data[i+2] = v;
      data[i+3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    animId = requestAnimationFrame(drawNoise);
  }
  drawNoise();
})();

// ──────────────────────────────────────────────────
// CUSTOM CURSOR
// ──────────────────────────────────────────────────
(function initCursor() {
  const dot = document.getElementById('cursor');
  const ring = document.getElementById('cursor-follower');
  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animate() {
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  // Hover state
  const hoverEls = () => document.querySelectorAll('a, button, .gallery-card, .nav-btn');
  function attachHover() {
    hoverEls().forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
  attachHover();
  // Re-attach after cards injected
  window._reattachCursorHover = attachHover;
})();

// ──────────────────────────────────────────────────
// LOADER
// ──────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
  }, 2400);
});

// ──────────────────────────────────────────────────
// HEADER SCROLL
// ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  header.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// ──────────────────────────────────────────────────
// RENDER GALLERY
// ──────────────────────────────────────────────────
let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredPhotos = [...photos];

function getFilteredPhotos() {
  return currentFilter === 'all' ? photos : photos.filter(p => p.category === currentFilter);
}

function renderGallery(filter = 'all') {
  currentFilter = filter;
  filteredPhotos = getFilteredPhotos();
  const grid = document.getElementById('gallery-grid');
  const count = document.getElementById('photo-count');
  count.textContent = filteredPhotos.length + ' Photograph' + (filteredPhotos.length !== 1 ? 's' : '');

  // Fade out existing
  const existing = grid.querySelectorAll('.gallery-card');
  existing.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(20px)'; });

  setTimeout(() => {
    grid.innerHTML = '';
    filteredPhotos.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.dataset.id = photo.id;
      card.dataset.idx = idx;
      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${photo.thumb}" alt="${photo.title}" loading="lazy" />
          <div class="card-overlay">
            <div class="card-expand-icon">⤢</div>
            <p class="card-title">${photo.title}</p>
            <span class="card-meta">${photo.year} &nbsp;·&nbsp; ${photo.location.split(',')[0]}</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openLightbox(idx));
      grid.appendChild(card);

      // Staggered reveal
      setTimeout(() => {
        card.classList.add('visible');
      }, idx * 60);
    });

    if (window._reattachCursorHover) window._reattachCursorHover();
  }, 250);
}

// ──────────────────────────────────────────────────
// FILTER BUTTONS
// ──────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});

// ──────────────────────────────────────────────────
// LIGHTBOX
// ──────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbTitle = document.getElementById('lb-title');
const lbYear = document.getElementById('lb-year');
const lbLocation = document.getElementById('lb-location');
const lbDesc = document.getElementById('lb-desc');
const lbIndex = document.getElementById('lb-index');

function openLightbox(idx) {
  currentLightboxIndex = idx;
  updateLightbox();
  lightbox.classList.remove('lightbox-hidden');
  lightbox.classList.add('lightbox-visible');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.add('lightbox-hidden');
  lightbox.classList.remove('lightbox-visible');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const photo = filteredPhotos[currentLightboxIndex];
  if (!photo) return;
  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = photo.src;
    lbImg.alt = photo.title;
    lbTitle.textContent = photo.title;
    lbYear.textContent = photo.year;
    lbLocation.textContent = photo.location;
    lbDesc.textContent = photo.desc;
    const n = currentLightboxIndex + 1;
    const total = filteredPhotos.length;
    lbIndex.textContent = String(n).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
    lbImg.onload = () => { lbImg.style.opacity = '1'; };
    if (lbImg.complete) lbImg.style.opacity = '1';
  }, 150);
}

function nextPhoto() {
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredPhotos.length;
  updateLightbox();
}
function prevPhoto() {
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
  updateLightbox();
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-next').addEventListener('click', nextPhoto);
document.getElementById('lb-prev').addEventListener('click', prevPhoto);
document.getElementById('lb-overlay').addEventListener('click', closeLightbox);

// Keyboard nav
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('lightbox-visible')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'ArrowLeft') prevPhoto();
});

// Touch/swipe support
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { dx < 0 ? nextPhoto() : prevPhoto(); }
}, { passive: true });

// ──────────────────────────────────────────────────
// SCROLL ANIMATIONS (IntersectionObserver)
// ──────────────────────────────────────────────────
const animateObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      animateObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el => animateObserver.observe(el));

// ──────────────────────────────────────────────────
// SMOOTH SCROLL — hero CTA
// ──────────────────────────────────────────────────
document.getElementById('enter-gallery').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});

// ──────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────
renderGallery('all');