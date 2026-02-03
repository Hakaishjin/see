# 🇪🇸 Barcelona Trip Website

A school-trip site with itinerary, interactive map, transport info, hotel details, and credits. Built as a **PWA** (works offline!) and deployed via **GitHub Pages**.

---

## 📁 File Structure

```
barcelona-trip/
├── index.html          ← main page (sections & structure)
├── styles.css          ← all styling (purple theme)
├── script.js           ← ✏️ ALL EDITABLE DATA IS HERE (top of file)
├── sw.js               ← service worker (offline caching)
├── manifest.json       ← PWA config
├── icons/
│   ├── icon-192.png    ← app icon (small)
│   └── icon-512.png    ← app icon (large)
└── README.md           ← this file
```

---

## ✏️ How to Edit Content

Almost everything you need to change is in **`script.js`** at the top. Three data arrays:

| Array | What it controls |
|---|---|
| `days[]` | The 7-day itinerary (activities & times per day) |
| `mapPins[]` | Locations shown on the map (lat/lng + labels) |
| `crew[]` | Names, roles & emojis on the credits page |

### Other stuff to update:
- **Dates on the hero banner** → `index.html`, search for `July 10 – July 17`
- **Hotel details** → `index.html`, the `#hotel` section (marked with ✏️)
- **Train/transport details** → `index.html`, the `#transport` section
- **Hotel photo** → Replace the `.hotel-image-placeholder` div with an `<img>` tag

### Map coordinates
Each pin in `mapPins` needs real `lat` and `lng` values. You can get these from Google Maps:
1. Right-click a location → "What's here?"
2. Copy the coordinates (e.g. `41.3851, 2.1734`)

---

## 🚀 Deploying to GitHub Pages

1. **Create a repo** on GitHub (e.g. `barcelona-trip`)
2. **Clone it** to your computer: `git clone <url>`
3. **Copy** all files from this folder into the repo
4. **Push** to GitHub: `git add . && git commit -m "Initial site" && git push`
5. Go to **Settings → Pages** in the repo
6. Set source to **`main` branch, `/ (root)`**
7. Your site is live at: `https://yourusername.github.io/barcelona-trip`

---

## 🎨 Changing the Colours

All colours are CSS variables at the top of `styles.css`:

```css
:root {
  --clr-deep:      #1E0533;   /* darkest bg */
  --clr-card:      #2D0A4E;   /* cards */
  --clr-accent:    #A855F7;   /* buttons & highlights */
  --clr-accent-lo: #C084FC;   /* lighter purple */
  --clr-gold:      #F0C040;   /* small warm accents */
}
```

Just change the hex codes — everything updates automatically.

---

## 📱 PWA Notes

The site is already set up as a PWA. When someone visits it on mobile, Chrome/Safari will offer an "Add to home screen" prompt. It caches the main files so it works **offline** (map tiles won't load offline, but everything else will).

If you add new files, add them to the `FILES_TO_CACHE` array in `sw.js`.

---

## 👥 Suggested Work Split

| Person | Owns |
|---|---|
| Person 1 | Itinerary (`days[]` in script.js) + transport section in HTML |
| Person 2 | Map pins (`mapPins[]`) + hotel section in HTML |
| Person 3 | Credits (`crew[]`) + any design tweaks in CSS |

Use **branches** in Git so you don't conflict! Each person works on their branch, then you merge into `main`.
