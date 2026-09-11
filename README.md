# Recall Communications — Website

React + Tailwind CSS website for **Recall Communications**, "The Complete
Mobile Store" — Station Road, Hubballi. Sells every major phone brand and
repairs phones (screen, battery, software, data recovery, etc).

## 📁 Folder Structure

```
recall-communications/
├── index.html              # HTML entry point (page title, meta tags)
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite build config
├── tailwind.config.js       # Tailwind theme — brand colors & fonts
├── postcss.config.js
├── public/
│   └── favicon.png          # Browser tab icon (from the RC logo mark)
├── src/
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Assembles all sections
│   ├── index.css            # Global styles, fonts, animations
│   ├── data/
│   │   └── shopData.js      # Shop details, brands, services — EDIT HERE
│   ├── assets/
│   │   ├── logo.png
│   │   ├── shop-front.jpg
│   │   ├── gallery-signage.jpg
│   │   └── gallery-entrance.jpg
│   └── components/
│       ├── Header.jsx       # Sticky nav bar
│       ├── Hero.jsx         # Top banner with shop photo
│       ├── BrandMarquee.jsx # Glowing scrolling brand strip
│       ├── Services.jsx     # Repair services grid
│       ├── Gallery.jsx      # Shop photos
│       ├── Contact.jsx      # Address, hours, map
│       └── Footer.jsx
└── README.md
```

## 🚀 Run Locally (चलाने के लिए)

1. Install [Node.js](https://nodejs.org) (v18 or newer) if not already installed.
2. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## 📦 Build for Deployment (Live Website Banane Ke Liye)

```bash
npm run build
```

This creates a `dist/` folder — upload its contents to any hosting
(Hostinger, Netlify, Vercel, GitHub Pages, or your existing web hosting).

## ✏️ Easy Edits (Content Change Karna Ho Toh)

Almost everything you'll want to change lives in **one file**:

`src/data/shopData.js`
- Phone number, address, opening hours
- List of brands sold
- List of repair services and their descriptions

No need to touch component code for text changes — just edit this file.

To change the shop photos, replace the images in `src/assets/` with your
own (keep the same file names, or update the `import` lines at the top
of `Hero.jsx` / `Gallery.jsx`).

## 🎨 Brand Colors Used

- Navy Blue `#182885` — from the RC logo
- Red `#EB0000` — from the RC logo
- Off-white background `#FAF9F6`
- Amber `#FFB800` — signboard bulb accent

## 🗺️ Google Map

`Contact.jsx` embeds a Google Maps iframe using the shop's address — no
API key needed. If the address ever changes, update `addressLine1/2/3`
and `mapsHref` in `src/data/shopData.js`.
