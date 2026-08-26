# Yash Agrawal — Portfolio Website

A fully responsive, dark-themed portfolio built with plain HTML/CSS/JS — no build
step, no framework, no dependencies to install. Deploys straight to GitHub Pages.

---

## 🚀 Deploy in 3 steps

1. Create a new GitHub repository (or use an existing one).
   - If you name it exactly `yashagrawal821.github.io`, your site will live at
     `https://yashagrawal821.github.io/` (root domain).
   - If you use any other name (e.g. `portfolio`), it'll live at
     `https://yashagrawal821.github.io/portfolio/` — this works too, no changes needed,
     since every path in this project is relative.
2. Upload **all files in this folder**, keeping the folder structure exactly as-is
   (`index.html` at the root, alongside `css/`, `js/`, `assets/`).
3. In your repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
   Wait 1–2 minutes, then visit your GitHub Pages URL.

That's the whole deployment. No `npm install`, no build command.

---

## ✏️ How to update your content (the important part)

**You only ever need to edit one file: `js/data.js`.**

It's a plain JavaScript file with clearly-commented sections. Every section of the
site — Skills, Projects, Experience, Achievement, your name/tagline/links — reads
from this one file and renders itself automatically.

### Add a new project
Open `js/data.js`, find the `PROJECTS` array, copy one existing project object,
paste it as a new entry, and edit the values (title, problem, tools, metrics,
outcome, GitHub link). A ready-to-copy template with comments is included at the
bottom of the array. Then drop a screenshot into `assets/images/projects/` and
point `media: [...]` at it.

### Add a new skill / tool to the moving carousel
Find `TECH_LOGOS` in `js/data.js`. Add `{ name: "Tool Name", icon: "assets/icons/toolname.svg" }`.
Drop the matching SVG file into `assets/icons/`. (Free brand icons:
https://simpleicons.org — search the tool, download the SVG.)

### Add a new skill chip to an existing skill card
Find `SKILLS` in `js/data.js`, locate the right group (e.g. `"Advanced SQL"`),
and add a string to its `items` array.

### Add a new experience / timeline entry
Find `EXPERIENCE` in `js/data.js` and add a new object. Order matters — it reads
left-to-right on desktop, top-to-bottom on mobile.

### Change your achievement
Edit the single `ACHIEVEMENT` object in `js/data.js`.

### Change your name, tagline, email, resume, etc.
All at the top of `js/data.js` in the `PROFILE` object.

**Workflow for updates:** ask Claude (or edit directly) for the current
`js/data.js`, make your change, save it, and re-upload just that one file to
GitHub (drag-and-drop replace via the GitHub web UI works fine — no local git
needed if you don't want it). Everything else — HTML, CSS, layout — never needs
to be touched for routine content updates.

---

## 📁 Folder structure

```
/
├── index.html              ← page structure (rarely needs editing)
├── css/
│   └── style.css           ← all visual styling / design system
├── js/
│   ├── data.js              ← ⭐ YOUR CONTENT — edit this to update the site
│   └── main.js              ← rendering + interaction logic (rarely needs editing)
└── assets/
    ├── resume.pdf            ← swap this file to update the Download Resume button
    ├── images/
    │   ├── profile.jpg       ← your About/Hero photo
    │   ├── favicon.svg
    │   └── projects/         ← project preview screenshots
    └── icons/                ← SVG logos used in the tech carousel
```

---

## 🎨 Design system

- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (labels/data) — loaded from Google Fonts.
- **Colors:** dark ink base (`#07090F`), cyan (`#3FD3F0`), violet (`#8B7CF6`), gold (`#F3A925`) accents.
- **3D hero motif:** a layered "data rings" SVG object, animated with CSS, echoed again in the Contact section.
- All color/spacing tokens live at the top of `css/style.css` as CSS custom properties if you want to retheme.

---

## 📱 Responsiveness

Tested at desktop (1440px), laptop, tablet (834px), and mobile (390px):
- Hero 3D object scales and reorders above the text on small screens.
- Floating pill nav becomes a bottom-right hamburger menu under 860px.
- Skills grid: 3 → 2 → 1 columns. Project cards: side-by-side → stacked.
- Experience timeline: horizontal with connecting line → vertical with side line.
- Respects `prefers-reduced-motion` — disables ring rotation, scroll reveals, and count-up animations for users who request it.

---

## ⚡ Performance notes

- No frameworks, no build step, no external JS dependencies.
- Images use `loading="lazy"`.
- Scroll animations use `IntersectionObserver` (cheap, native, no scroll-jank).
- 3D ring is CSS-animated SVG — no WebGL/Three.js overhead.

---

## 🔧 If you want to change the site structure itself

That requires editing `index.html` / `css/style.css` / `js/main.js` — for anything
beyond content updates (new sections, layout changes, design tweaks), just come
back and ask Claude with what you want changed.
