// assets/js/index.js 

// ---- DOM ready ----
document.addEventListener('DOMContentLoaded', () => {

  // Force Light Mode
  document.documentElement.classList.remove('tw-dark');
  try { localStorage.setItem('color-mode', 'light'); } catch(e){}

  // ---------- FAQ ACCORDION (unabhängig, ganz oben) ----------
  const faqs = document.querySelectorAll('.faq-accordion');
  faqs.forEach((header) => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.bi');

    // Initial state
    if (content) {
      content.style.maxHeight = '0px';
      content.style.padding = '0px 18px';
    }
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');

    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));

      if (!content) return;

      if (expanded) {
        // schließen
        content.style.maxHeight = '0px';
        content.style.padding = '0px 18px';
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        // öffnen (an Inhaltshöhe anpassen)
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '0px 60px 0px 0px';
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });

  // ---------- Header / Navigation (nur wenn Elemente existieren) ----------
  const RESPONSIVE_WIDTH = 1024;
  let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH;

  const collapseBtn = document.getElementById('collapse-btn');
  const collapseHeaderItems = document.getElementById('collapsed-header-items');
  const navToggle = document.getElementById('nav-dropdown-toggle-0');
  const navDropdown = document.getElementById('nav-dropdown-list-0');

  function onHeaderClickOutside(e) {
    if (!collapseHeaderItems || !collapseBtn) return;
    if (!collapseHeaderItems.contains(e.target)) toggleHeader();
  }

  function toggleHeader() {
    if (!collapseHeaderItems || !collapseBtn) return;
    if (isHeaderCollapsed) {
      collapseHeaderItems.classList.add('max-lg:!tw-opacity-100', 'tw-min-h-[90vh]');
      collapseHeaderItems.style.height = '90vh';
      collapseBtn.classList.remove('bi-list');
      collapseBtn.classList.add('bi-x', 'max-lg:tw-fixed');
      isHeaderCollapsed = false;
      document.body.classList.add('modal-open');
      setTimeout(() => window.addEventListener('click', onHeaderClickOutside), 1);
    } else {
      collapseHeaderItems.classList.remove('max-lg:!tw-opacity-100', 'tw-min-h-[90vh]');
      collapseHeaderItems.style.height = '0vh';
      collapseBtn.classList.remove('bi-x', 'max-lg:tw-fixed');
      collapseBtn.classList.add('bi-list');
      document.body.classList.remove('modal-open');
      isHeaderCollapsed = true;
      window.removeEventListener('click', onHeaderClickOutside);
    }
  }

  function openNavDropdown() {
    if (!navDropdown) return;
    navDropdown.classList.add('tw-opacity-100','tw-scale-100','max-lg:tw-min-h-[450px]','max-lg:!tw-h-fit','tw-min-w-[320px]');
    navDropdown.setAttribute('data-open','true');
  }
  function closeNavDropdown() {
    if (!navDropdown) return;
    if (navDropdown.matches(':hover')) return;
    navDropdown.classList.remove('tw-opacity-100','tw-scale-100','max-lg:tw-min-h-[450px]','tw-min-w-[320px]','max-lg:!tw-h-fit');
    navDropdown.setAttribute('data-open','false');
  }
  function navMouseLeave(){ setTimeout(closeNavDropdown, 100); }

  // Nur registrieren, wenn die Targets existieren
  if (navToggle && navDropdown) {
    navToggle.addEventListener('click', () => {
      if (navDropdown.getAttribute('data-open') === 'true') closeNavDropdown();
      else openNavDropdown();
    });
    navToggle.addEventListener('mouseenter', openNavDropdown);
    navToggle.addEventListener('mouseleave', navMouseLeave);
    navDropdown.addEventListener('mouseleave', closeNavDropdown);
  }

  function responsive() {
    if (!isHeaderCollapsed && collapseHeaderItems) toggleHeader();
    if (window.innerWidth > RESPONSIVE_WIDTH) {
      if (collapseHeaderItems) collapseHeaderItems.style.height = '';
    } else {
      isHeaderCollapsed = true;
    }
  }
  responsive();
  window.addEventListener('resize', responsive);

  // ---------- Optionale Libraries sicher benutzen ----------
  if (window.Typed) {
    new Typed('#prompts-sample', {
      strings: [
        "How to solve a rubik's cube? Step by step guide",
        "What's Pixa playground?",
        "How to build an AI SaaS App?",
        "How to integrate Pixa API?"
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: true,
      backDelay: 2000
    });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.reveal-up', { opacity: 0, y: '100%' });
    gsap.to('#dashboard', {
      scale: 1,
      translateY: 0,
      rotateX: '0deg',
      scrollTrigger: {
        trigger: '#hero-section',
        start: window.innerWidth > 1024 ? 'top 95%' : 'top 70%',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }

});
