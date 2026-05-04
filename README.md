# 📸 The Street Eye – A Garry Winogrand Tribute

**WINOGRAND** is a bespoke digital archive and tribute to **Garry Winogrand (1928–1984)**, one of the most influential street photographers of the 20th century. This project showcases his raw, unposed documentation of American life through a modern, immersive web interface.

• [Project on GitHub](https://github.com/shruthijeeva/CodeAlpha_ImageGallery)

---

## 🖼️ Overview

- Responsive, single‑page web app built with ** HTML5, CSS3, and JavaScript**.
- Curates **24 high‑fidelity scans** of Winogrand’s work, organized into thematic categories.
- Features a **custom lightbox**, scroll‑based animations, and an atmospheric film‑strip aesthetic evoking 35mm film culture.

---

## 🧩 Core Features

### 📚 Interactive Archive
- Filterable gallery organized into:
  - `New York`
  - `American Life`
  - `Animals`
- Dynamic UI updates based on selected category.

### 🔍 Immersive Lightbox
- Custom image viewer with:
  - High‑fidelity scans
  - Project metadata (date, location, notes)
  - Historical context about the image and Winogrand’s approach
- Keyboard navigation, swipe support (mobile), and index‑based controls.

### 🎬 Cinematic Design
- **Film Strip Hero**: A horizontal film‑roll‑style hero section inspired by 35mm film.
- **Dynamic Marquee**: Real‑time quote ticker displaying Winogrand’s philosophy

- **Atmospheric Effects**:
  - Canvas‑based film grain / noise overlay
  - Custom smooth‑following cursor design
  - Subtle scroll‑reveal animations

### 📖 Biographical Narrative
- Dedicated section exploring:
  - Winogrand’s **Bronx roots**
  - Time studying under **Alexey Brodovitch**
  - His legacy of **over 2,500 undeveloped rolls of film**
  - The “photographed look” and his observational style

---

## 🛠️ Technical Stack

### Frontend
- **HTML5** – Semantic structure and accessibility
- **CSS3** – Flexbox and CSS Grid for a responsive **masonry‑style gallery**
- **Vanilla JavaScript** – No frameworks; state management for:
  - Gallery filtering
  - Lightbox indexing and navigation
  - Scroll‑reveal animations and dynamic cursor

### Visuals & Typography
- **Typography**:
  - Headlines: `Playfair Display`
  - Metadata / UI: `Space Mono`
  - Body text: `Cormorant Garamond`
- **Animations**:
  - `Intersection Observer API` for scroll‑reveal effects
  - CSS `@keyframes` for “scanning” lightbox transitions

### Data‑Driven Gallery
- Central `photos` array in `script.js` powers all gallery metadata.
- Fully **responsive layout**:
  - 4‑column masonry grid (desktop)
  - 1‑column vertical stack (mobile)
- **Touch‑aware lightbox** with swipe gestures on mobile.

---

## 📂 Project Structure

```plaintext
wino-grand/
├── index.html        # Main structure and content
├── style.css         # Typography, layouts, cinematic effects, and animations
└── script.js         # Gallery logic, filters, lightbox, custom cursor, etc.
```

---

## 📝 Development Details

- **No external frameworks** – Pure HTML/CSS/JS for lightweight, fast load and minimal dependencies.
- **Data‑driven design**:
  - Single `photos` array holds title, category, dates, location, and notes for each image.
  - JavaScript dynamically builds and filters the gallery DOM.
- **Responsive control**:
  - Uses `@media` queries and flexible grid layouts.
  - Mobile‑optimized lightbox with swipe and touch controls.
- **Performance‑oriented**:
  - De‑bounced scroll and resize listeners.
  - Optimized canvas‑based noise effects to avoid heavy GPU usage.

---

## 📄 License

This project is open‑source. You’re welcome to fork, adapt, or extend it for educational or personal use.  
Please credit **Garry Winogrand** and **“The Street Eye”** where appropriate.

---

## 🤝 Contributing

If you’d like to:
- Add new images or metadata
- Improve accessibility or performance
- Enhance the lightbox or UI

Feel free to open an issue or submit a pull request.

---

## 📷 Credits

- All images and biographical content based on the work and legacy of **Garry Winogrand**.
- Inspired by his street‑photography style and his role in documenting mid‑20th‑century American life.
>Built as a tribute to street photography.
