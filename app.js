/**
 * ============================================================
 * GAYUS JONES PETRA — Portfolio App v2
 * Architecture: OOP with ES6 Classes
 *
 * Classes:
 *  - PortfolioData       : Static data store
 *  - TypeWriter          : Animated typing effect
 *  - CursorManager       : Custom cursor
 *  - NavbarController    : Scroll-aware navbar & active link
 *  - ScrollReveal        : IntersectionObserver reveal
 *  - CounterAnimation    : Number count-up for stats
 *  - SkillsRenderer      : Renders skill cards
 *  - ProjectsRenderer    : Renders project cards
 *  - ExperienceRenderer  : Renders timeline
 *  - PortfolioApp        : Root orchestrator
 * ============================================================
 */

'use strict';

/* ─── DATA LAYER ────────────────────────────────────────── */

class PortfolioData {
  static get skills() {
    return [
      {
        icon: 'bi-window-stack',
        category: 'Web Development',
        items: [
          { name: 'React.js',   primary: true  },
          { name: 'JavaScript', primary: true  },
          { name: 'Laravel',    primary: true  },
          { name: 'PHP',        primary: false },
          { name: 'HTML5/CSS3', primary: false },
          { name: 'Figma',      primary: false },
        ],
      },
      {
        icon: 'bi-cpu',
        category: 'Core Engineering',
        items: [
          { name: 'Java',             primary: true  },
          { name: 'Python',           primary: true  },
          { name: 'Algorithms',       primary: true  },
          { name: 'Data Structures',  primary: false },
          { name: 'C/C++',            primary: false },
          { name: 'DOP (Object Oriented)', primary: false },
        ],
      },
      {
        icon: 'bi-bug-fill',
        category: 'Testing & QA',
        items: [
          { name: 'Software Quality', primary: true  },
          { name: 'Maestro',          primary: true  },
          { name: 'Postman',          primary: true  },
          { name: 'Agile (Scrum)',    primary: false },
          { name: 'UAT Testing',      primary: false },
          { name: 'Unit Testing',     primary: false },
        ],
      },
      {
        icon: 'bi-box-seam',
        category: 'Tools & DevOps',
        items: [
          { name: 'Docker',           primary: true  },
          { name: 'Git & GitHub',     primary: true  },
          { name: 'PostgreSQL/MySQL', primary: false },
          { name: 'VS Code',          primary: false },
          { name: 'NetBeans',         primary: false },
          { name: 'System Support',   primary: false },
        ],
      },
      {
        icon: 'bi-person-badge',
        category: 'Professional Skills',
        items: [
          { name: 'Leadership',       primary: true  },
          { name: 'Public Speaking',  primary: true  },
          { name: 'Project Mgmt',     primary: false },
          { name: 'Team Collaboration', primary: false },
          { name: 'Problem Solving',  primary: false },
          { name: 'Adaptability',     primary: false },
        ],
      },
    ];
  }

  static get projects() {
    return [
      {
        title: 'Sistem Informasi Sekolah – SMK N 3 Balige',
        desc: 'Integrated school information system supporting administration, academic data management, student portfolios, and public information services. Built collaboratively in Agile sprint cycles with a cross-functional team.',
        tech: ['Laravel', 'React', 'Maestro', 'Postman', 'Docker', 'GitHub'],
        role: 'QA / Software Tester',
        duration: '4 Months · Jan 2026–Present',
        color: 'violet',
        links: { github: null, live: null },
      },
      {
        title: 'PPKHA — Career & Alumni Platform',
        desc: 'Web-based platform connecting students, alumni, campus, and industry partners for career development and alumni management at Institut Teknologi Del. Contributed to both frontend and backend in Agile sprints.',
        tech: ['Laravel', 'React', 'Maestro', 'GitHub', 'VS Code'],
        role: 'Fullstack Developer',
        duration: '2 Months · Oct–Dec 2025',
        color: 'cyan',
        links: { github: null, live: null },
      },
      {
        title: 'MealMap Application',
        desc: 'Capstone project for Object-Oriented Programming course. A meal planning and tracking application helping users organize daily meals, designed using core OOP principles including inheritance and polymorphism.',
        tech: ['Java', 'NetBeans', 'MySQL'],
        role: 'Developer',
        duration: 'Nov–Dec 2024',
        color: 'green',
        links: { github: null, live: null },
      },
    ];
  }

  static get experience() {
    return [
      {
        period: 'Jan 2026 – Present',
        role: 'Head of Department',
        company: 'Dept. of Communication & Information — BEM IT Del',
        points: [
          'Lead and coordinate three core divisions: Design, Publication, and Documentation.',
          'Oversee social media content design, publishing workflows, and event documentation for official BEM platforms.',
          'Ensure integrated communication strategy and consistent digital branding across all channels.',
        ],
      },
      {
        period: 'Jun 2025 – Jul 2025',
        role: 'IT Support Intern & Video Editor',
        company: 'PT Multi Teknik Jaya Mandiri',
        points: [
          'Provided IT support including basic troubleshooting, system assistance, and technical support for internal operations.',
          'Produced and published project documentation videos showcasing company projects.',
          'Managed multimedia content for social media and digital platforms to improve company branding.',
        ],
      },
      {
        period: 'May 2025',
        role: '3rd Place — HICO Competitive Programming',
        company: 'HIMASTI · IT Del',
        points: [
          'Achieved 3rd place in a team-based programming competition hosted on HackerRank.',
          'Solved algorithmic challenges under strict time constraints across multiple problem sets.',
          'Managed team strategy and problem-solving approach across multiple programming languages.',
        ],
      },
      {
        period: 'Feb – Mar 2025',
        role: 'Head of Committee — Photography Competition',
        company: 'Dept. of Communication & Information, IT Del',
        points: [
          'Led organizing team in planning and executing the photography competition.',
          'Coordinated the judging process with the jury team based on predefined criteria.',
          'Managed publication of competition results and winner announcements through official channels.',
        ],
      },
      {
        period: 'Nov 2024 – Jan 2026',
        role: 'Creative Division Member',
        company: 'Dept. of Communication & Information — IT Del',
        points: [
          'Contributed creative ideas for departmental programs and communication strategies.',
          'Collaborated on visual and conceptual communication for events and publications.',
          'Supported internal communications through creative design input.',
        ],
      },
    ];
  }

  static get typingStrings() {
    return [
      'Fullstack Developer',
      'Frontend Enthusiast',
      'QA / Software Tester',
      'Agile Practitioner',
      'Open to Opportunities',
    ];
  }
}


/* ─── TYPEWRITER ─────────────────────────────────────────── */

class TypeWriter {
  constructor(elementId, strings, opts = {}) {
    this.el         = document.getElementById(elementId);
    this.strings    = strings;
    this.speed      = opts.speed     ?? 65;
    this.backSpeed  = opts.backSpeed ?? 35;
    this.pause      = opts.pause     ?? 1800;
    this.strIndex   = 0;
    this.charIndex  = 0;
    this.isDeleting = false;
  }

  start() {
    if (!this.el) return;
    this._tick();
  }

  _tick() {
    const current = this.strings[this.strIndex];
    this.el.textContent = this.isDeleting
      ? current.substring(0, --this.charIndex)
      : current.substring(0, ++this.charIndex);

    let delay = this.isDeleting ? this.backSpeed : this.speed;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = this.pause;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.strIndex = (this.strIndex + 1) % this.strings.length;
    }

    setTimeout(() => this._tick(), delay);
  }
}


/* ─── CURSOR MANAGER ─────────────────────────────────────── */

class CursorManager {
  constructor() {
    this.cursor   = document.getElementById('cursor');
    this.follower = document.getElementById('cursorFollower');
    this.mx = 0; this.my = 0;
    this.fx = 0; this.fy = 0;
  }

  init() {
    if (!this.cursor || window.matchMedia('(pointer: coarse)').matches) return;
    document.addEventListener('mousemove', (e) => {
      this.mx = e.clientX;
      this.my = e.clientY;
      this.cursor.style.transform = `translate(${this.mx - 4}px, ${this.my - 4}px)`;
    });
    this._animateFollower();
    this._bindHoverables();
  }

  _animateFollower() {
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      this.fx = lerp(this.fx, this.mx - 16, 0.1);
      this.fy = lerp(this.fy, this.my - 16, 0.1);
      this.follower.style.transform = `translate(${this.fx}px, ${this.fy}px)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  _bindHoverables() {
    const els = document.querySelectorAll('a, button, [data-hover]');
    els.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('hovered');
        this.follower.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('hovered');
        this.follower.classList.remove('hovered');
      });
    });
  }
}


/* ─── NAVBAR CONTROLLER ──────────────────────────────────── */

class NavbarController {
  constructor() {
    this.navbar   = document.getElementById('navbar');
    this.navLinks = document.querySelectorAll('#navLinks .nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.threshold = 60;
  }

  init() {
    window.addEventListener('scroll', () => this._onScroll(), { passive: true });
    this._onScroll();

    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
          const collapse = document.getElementById('navMenu');
          if (collapse && collapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(collapse)?.hide();
          }
        }
      });
    });
  }

  _onScroll() {
    const y = window.scrollY;
    this.navbar.classList.toggle('scrolled', y > this.threshold);

    let current = '';
    this.sections.forEach(sec => {
      if (y >= sec.offsetTop - 130) current = sec.id;
    });
    this.navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }
}


/* ─── SCROLL REVEAL ──────────────────────────────────────── */

class ScrollReveal {
  constructor(selector = '.reveal', threshold = 0.1) {
    this.selector  = selector;
    this.threshold = threshold;
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay ?? 0);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: this.threshold });

    document.querySelectorAll(this.selector).forEach(el => observer.observe(el));
  }
}


/* ─── COUNTER ANIMATION ──────────────────────────────────── */

class CounterAnimation {
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this._countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
  }

  _countUp(el) {
    const target = parseInt(el.dataset.count);
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target) + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}


/* ─── SKILLS RENDERER ────────────────────────────────────── */

class SkillsRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(data) {
    if (!this.container) return;
    this.container.innerHTML = data.map((cat, i) => this._buildCard(cat, i)).join('');
  }

  _buildCard(cat, index) {
    const tagsHtml = cat.items.map(item =>
      `<span class="skill-tag${item.primary ? ' primary' : ''}">${item.name}</span>`
    ).join('');

    return `
      <div class="col-lg-4 col-md-6 reveal" data-delay="${index * 80}">
        <div class="skill-category-card">
          <i class="bi ${cat.icon} skill-cat-icon"></i>
          <div class="skill-cat-title">${cat.category}</div>
          <div class="skill-tags">${tagsHtml}</div>
        </div>
      </div>
    `;
  }
}


/* ─── PROJECTS RENDERER ──────────────────────────────────── */

class ProjectsRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(data) {
    if (!this.container) return;
    this.container.innerHTML = data.map((proj, i) => this._buildCard(proj, i)).join('');
  }

  _buildCard(proj, index) {
    const techHtml = proj.tech.map(t =>
      `<span class="tech-badge">${t}</span>`
    ).join('');

    const githubLink = proj.links.github
      ? `<a href="${proj.links.github}" class="project-link-icon" target="_blank" rel="noopener" aria-label="GitHub"><i class="bi bi-github"></i></a>`
      : '';

    const liveLink = proj.links.live
      ? `<a href="${proj.links.live}" class="project-link-icon" target="_blank" rel="noopener" aria-label="Live site"><i class="bi bi-box-arrow-up-right"></i></a>`
      : '';

    return `
      <div class="col-lg-4 col-md-6 reveal" data-delay="${index * 110}">
        <div class="project-card" data-color="${proj.color}">
          <div class="project-card-header">
            <div class="project-card-top">
              <i class="bi bi-folder2-open project-folder-icon"></i>
              <div class="project-links">${githubLink}${liveLink}</div>
            </div>
            <div class="project-title">${proj.title}</div>
            <div class="project-role-badge">
              <i class="bi bi-person-fill"></i> ${proj.role}
            </div>
          </div>
          <div class="project-card-body">
            <p class="project-desc">${proj.desc}</p>
            <div class="project-meta">
              <i class="bi bi-clock"></i> ${proj.duration}
            </div>
            <div class="project-tech">${techHtml}</div>
          </div>
        </div>
      </div>
    `;
  }
}


/* ─── EXPERIENCE RENDERER ────────────────────────────────── */

class ExperienceRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(data) {
    if (!this.container) return;
    this.container.innerHTML = data.map((item, i) => this._buildItem(item, i)).join('');
  }

  _buildItem(item, index) {
    const pointsHtml = item.points.map(p => `<li>${p}</li>`).join('');

    return `
      <div class="timeline-item reveal" data-delay="${index * 100}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-role">${item.role}</div>
          <div class="timeline-company">${item.company}</div>
          <ul class="timeline-points">${pointsHtml}</ul>
        </div>
      </div>
    `;
  }
}


/* ─── CONTACT FORM HANDLER ───────────────────────────────── */

class ContactFormHandler {
  constructor() {
    this.form       = document.getElementById('contactForm');
    this.submitBtn  = document.getElementById('contactSubmitBtn');
    this.successMsg = document.getElementById('formSuccessMsg');
    this.fieldIds   = ['contactName', 'contactEmail', 'contactSubject', 'contactMessage'];
  }

  init() {
    if (!this.form) return;
    this._bindLiveValidation();
    this.form.addEventListener('submit', (e) => this._onSubmit(e));
  }

  /** Remove error state as user types */
  _bindLiveValidation() {
    this.fieldIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', () => {
        el.closest('.form-field')?.classList.remove('field-error');
      });
    });
  }

  _validate() {
    let valid = true;
    this.fieldIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const field = el.closest('.form-field');
      const empty = !el.value.trim();
      const badEmail = id === 'contactEmail' && el.value.trim() && !this._isEmail(el.value);
      if (empty || badEmail) {
        field?.classList.add('field-error');
        valid = false;
      } else {
        field?.classList.remove('field-error');
      }
    });
    return valid;
  }

  _isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  _onSubmit(e) {
    e.preventDefault();
    if (!this._validate()) return;
    this._setLoading(true);
    // Simulated send — replace with fetch() to a real endpoint
    setTimeout(() => {
      this._setLoading(false);
      this._showSuccess();
    }, 1800);
  }

  _setLoading(on) {
    if (!this.submitBtn) return;
    this.submitBtn.disabled = on;
    const t = this.submitBtn.querySelector('.btn-submit-text');
    const s = this.submitBtn.querySelector('.btn-submit-sending');
    if (t) t.style.display = on ? 'none' : '';
    if (s) s.style.display = on ? '' : 'none';
  }

  _showSuccess() {
    if (!this.submitBtn || !this.successMsg) return;
    const t = this.submitBtn.querySelector('.btn-submit-text');
    if (t) t.innerHTML = '<i class="bi bi-check-lg me-2"></i>Message Sent!';
    this.submitBtn.classList.add('success');
    this.submitBtn.disabled = true;
    this.successMsg.style.display = 'flex';
    this.form.reset();
  }
}


/* ─── PORTFOLIO APP ──────────────────────────────────────── */

class PortfolioApp {
  constructor() {
    this.typeWriter         = new TypeWriter('typedText', PortfolioData.typingStrings, { speed: 70 });
    this.cursorManager      = new CursorManager();
    this.navbarController   = new NavbarController();
    this.scrollReveal       = new ScrollReveal();
    this.counterAnimation   = new CounterAnimation();
    this.skillsRenderer     = new SkillsRenderer('skillsContainer');
    this.projectsRenderer   = new ProjectsRenderer('projectsContainer');
    this.experienceRenderer = new ExperienceRenderer('expContainer');
    this.contactForm        = new ContactFormHandler();
  }

  init() {
    // 1. Render data sections
    this.skillsRenderer.render(PortfolioData.skills);
    this.projectsRenderer.render(PortfolioData.projects);
    this.experienceRenderer.render(PortfolioData.experience);

    // 2. Boot interactive modules
    this.typeWriter.start();
    this.cursorManager.init();
    this.navbarController.init();
    this.contactForm.init();

    // 3. Delay reveal init so rendered cards are in DOM
    setTimeout(() => {
      this.scrollReveal.init();
      this.counterAnimation.init();
    }, 60);
  }
}

/* ─── BOOTSTRAP ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
