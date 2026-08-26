/* ============================================================================
   MAIN.JS — rendering + interaction logic.
   You should not need to edit this file to update content — edit data.js.
   ============================================================================ */

(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     1. HERO / PROFILE TEXT
  --------------------------------------------------------------------- */
  function renderProfile() {
    document.getElementById("heroRole").textContent = PROFILE.role;
    const nameParts = PROFILE.name.split(" ");
    document.getElementById("heroName").innerHTML = nameParts.join("<br>");
    document.getElementById("heroTagline").textContent = `"${PROFILE.tagline}"`;
    document.getElementById("heroLocation").textContent = PROFILE.location.split(",")[0] + ", " +
      (PROFILE.location.split(",").pop().trim() === "India" ? "India" : PROFILE.location.split(",").pop().trim());
    document.getElementById("aboutSummary").innerHTML = PROFILE.summary;
    document.title = `${PROFILE.name} — ${PROFILE.role}`;
    document.getElementById("footerText").textContent =
      `© ${new Date().getFullYear()} ${PROFILE.name} · Built with HTML/CSS/JS · Hosted on GitHub Pages`;

    // resume links
    document.querySelectorAll('a[href="assets/resume.pdf"]').forEach((a) => {
      a.href = PROFILE.resumeFile;
    });

    // credential row
    const cred = document.getElementById("credentialRow");
    cred.innerHTML = `
      <div><div class="k mono">EDUCATION</div><div class="v">${PROFILE.education.degree}</div></div>
      <div><div class="k mono">UNIVERSITY</div><div class="v">${PROFILE.education.school} · ${PROFILE.education.years}</div></div>
      <div><div class="k mono">CGPA</div><div class="v">${PROFILE.education.cgpa}</div></div>
    `;

    // contact links + email button
    document.getElementById("emailBtn").href = `mailto:${PROFILE.email}`;
    document.getElementById("contactLinks").innerHTML = `
      <a href="mailto:${PROFILE.email}">✉ ${PROFILE.email}</a>
      <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">in/${PROFILE.linkedin.split("/").filter(Boolean).pop()}</a>
      <a href="${PROFILE.github}" target="_blank" rel="noopener">${PROFILE.github.replace("https://", "")}</a>
    `;
  }

  /* ---------------------------------------------------------------------
     2. WORKFLOW CHAIN (About section)
  --------------------------------------------------------------------- */
  function renderWorkflow() {
    const el = document.getElementById("workflowChain");
    el.innerHTML = WORKFLOW.map((step, i) => {
      const arrow = i < WORKFLOW.length - 1 ? '<span class="workflow-arrow">→</span>' : "";
      return `<span class="workflow-step">${step}</span>${arrow}`;
    }).join("");
  }

  /* ---------------------------------------------------------------------
     3. SKILLS GRID
  --------------------------------------------------------------------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = SKILLS.map((g) => `
      <div class="skill-card reveal-scale">
        <div class="skill-card-head">
          <span class="skill-dot" style="background:${g.color};"></span>
          <span class="skill-card-title">${g.group}</span>
        </div>
        <div class="skill-chips">
          ${g.items.map((it) => `<span class="skill-chip">${it}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------------------
     4. TECH LOGO CAROUSEL (duplicated for seamless infinite scroll)
  --------------------------------------------------------------------- */
  function renderTechCarousel() {
    const track = document.getElementById("techTrack");
    const pill = (t) => `
      <div class="tech-pill">
        <img src="${t.icon}" alt="${t.name}" loading="lazy" onerror="this.style.display='none'">
        <span>${t.name}</span>
      </div>`;
    const html = TECH_LOGOS.map(pill).join("");
    // duplicate once for seamless loop
    track.innerHTML = html + html;
  }

  /* ---------------------------------------------------------------------
     5. PROJECTS + FILTERS
  --------------------------------------------------------------------- */
  function renderProjects() {
    const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
    const filterWrap = document.getElementById("projectFilters");
    filterWrap.innerHTML = categories
      .map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`)
      .join("");

    const list = document.getElementById("projectList");

    function card(p) {
      const accentVar = `var(--${p.accent})`;
      const media = p.media && p.media.length ? p.media[0] : null;
      return `
        <article class="project-card reveal" style="--accent:${accentVar};" data-cat="${p.category}">
          <div class="project-media">
            ${media ? `<img src="${media}" alt="${p.title}" loading="lazy">` : ""}
            <div class="project-media-tag mono">${p.category}</div>
          </div>
          <div class="project-body">
            <div class="project-cat mono">${p.category.toUpperCase()}</div>
            <div class="project-title">${p.title}</div>
            <p class="project-problem">${p.problem}</p>
            <div class="project-tools">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="project-metrics">
              ${p.metrics.map((m) => `
                <div class="metric">
                  <div class="num" data-count="${m.num}">0</div>
                  <div class="lbl mono">${m.label.toUpperCase()}</div>
                </div>`).join("")}
            </div>
            <div class="project-outcome">${p.outcome}</div>
            <div class="project-actions">
              <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-primary" style="background:${accentVar}; color:#07090F;">GitHub ↗</a>
              ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn-outline">View Project</a>` : ""}
            </div>
          </div>
        </article>`;
    }

    function draw(filter) {
      const items = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
      list.innerHTML = items.map(card).join("") || `<p class="lede">No projects in this category yet.</p>`;
      observeReveals();
      observeCounters();
    }

    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      draw(btn.dataset.cat);
    });

    draw("All");
  }

  /* ---------------------------------------------------------------------
     6. TIMELINE + ACHIEVEMENT
  --------------------------------------------------------------------- */
  function renderExperience() {
    const tl = document.getElementById("timeline");
    tl.innerHTML = EXPERIENCE.map((e) => `
      <div class="timeline-item">
        <div class="timeline-dot" style="background:${e.color}; color:${e.color};"></div>
        <div class="timeline-year mono" style="color:${e.color};">${e.year}</div>
        <div class="timeline-role">${e.title}</div>
        <div class="timeline-org">${e.org}</div>
        <div class="timeline-desc">${e.desc}</div>
      </div>
    `).join("");

    const ach = document.getElementById("achievementCard");
    ach.innerHTML = `
      <div class="achievement-icon">${ACHIEVEMENT.icon}</div>
      <div>
        <div class="achievement-label mono">${ACHIEVEMENT.label.toUpperCase()}</div>
        <div class="achievement-title">${ACHIEVEMENT.title}</div>
        <div style="font-size:13px; color:var(--text-dim); margin-top:6px; max-width:600px;">${ACHIEVEMENT.detail}</div>
      </div>
    `;
  }

  /* ---------------------------------------------------------------------
     7. NAVIGATION — sticky, scroll-spy, mobile sheet
  --------------------------------------------------------------------- */
  function setupNav() {
    const navWrap = document.getElementById("navWrap");
    const toggle = document.getElementById("mobileToggle");
    const sheet = document.getElementById("mobileSheet");

    window.addEventListener("scroll", () => {
      navWrap.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      sheet.classList.toggle("open");
    });
    sheet.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        sheet.classList.remove("open");
      })
    );

    // scroll-spy
    const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const navLinks = document.querySelectorAll("[data-nav]");

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((l) => l.classList.toggle("active", l.dataset.nav === id));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => spyObserver.observe(s));
  }

  /* ---------------------------------------------------------------------
     8. SCROLL REVEALS
  --------------------------------------------------------------------- */
  let revealObserver;
  function observeReveals() {
    if (reducedMotion) {
      document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => el.classList.add("in-view"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    document.querySelectorAll(".reveal:not(.in-view), .reveal-scale:not(.in-view)").forEach((el) =>
      revealObserver.observe(el)
    );
  }

  /* ---------------------------------------------------------------------
     9. METRIC COUNT-UP (project cards)
  --------------------------------------------------------------------- */
  let counterObserver;
  function observeCounters() {
    const nodes = document.querySelectorAll(".num[data-count]:not(.counted)");
    if (!nodes.length) return;

    function animateCount(el) {
      el.classList.add("counted");
      const raw = el.dataset.count;
      const match = raw.match(/^([\d,.]+)(.*)$/);
      if (!match) { el.textContent = raw; return; }
      const target = parseFloat(match[1].replace(/,/g, ""));
      const suffix = match[2] || "";
      if (reducedMotion || isNaN(target)) { el.textContent = raw; return; }
      const duration = 900;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.textContent = (Number.isInteger(target) ? val : val.toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      }
      requestAnimationFrame(tick);
    }

    if (!counterObserver) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
    }
    nodes.forEach((el) => counterObserver.observe(el));
  }

  /* ---------------------------------------------------------------------
     10. HERO RING — subtle cursor parallax on fine-pointer desktops only
  --------------------------------------------------------------------- */
  function setupRingParallax() {
    if (reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const visual = document.querySelector(".hero-visual");
    if (!visual) return;
    visual.addEventListener("mousemove", (e) => {
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      visual.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    visual.addEventListener("mouseleave", () => {
      visual.style.transform = "";
    });
  }

  /* ---------------------------------------------------------------------
     INIT
  --------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderProfile();
    renderWorkflow();
    renderSkills();
    renderTechCarousel();
    renderProjects();
    renderExperience();
    setupNav();
    setupRingParallax();
    observeReveals();
    // initial about/skills/experience reveals need an observe pass too
    observeReveals();
  });
})();
