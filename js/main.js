/**
 * 3SECONDS AGENCY — CORE JAVASCRIPT
 * Handling: Header scroll states, non-blocking 3-second countdown,
 * Menu Overlay, Floating Contact Trigger, Project Brief Drawer, Timecode Tickers
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCountdown();
  initHeaderScroll();
  initMenuOverlay();
  initBriefDrawer();
  initFloatingContact();
  initLiveClocks();
  initSoundToggle();
});

/**
 * 1. HERO 3-SECOND COUNTDOWN TICKER
 * Spec: 03-sections/home/hero-3-seconds.md
 * Non-blocking 03 -> 02 -> 01 sequence passes through in ~900ms
 */
function initHeroCountdown() {
  const digitsEl = document.getElementById('countdown-digits');
  const fillEl = document.getElementById('countdown-fill');
  if (!digitsEl) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    digitsEl.textContent = '00:03';
    return;
  }

  // Trigger progress fill
  if (fillEl) {
    requestAnimationFrame(() => {
      fillEl.style.width = '100%';
    });
  }

  // Sequence 03 -> 02 -> 01 -> LIVE
  setTimeout(() => {
    digitsEl.textContent = '02';
  }, 300);

  setTimeout(() => {
    digitsEl.textContent = '01';
  }, 600);

  setTimeout(() => {
    digitsEl.textContent = 'REC ●';
    digitsEl.style.color = 'var(--flash)';
  }, 900);
}

/**
 * 2. GLOBAL HEADER SCROLL & HIDE/REVEAL
 * Spec: 03-sections/global/header.md
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let isTicking = false;

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Compact blurred background after 50px
        if (currentScrollY > 50) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }

        // Hide slightly on downward scroll, reveal on upward scroll (if not focused inside)
        const hasFocus = header.contains(document.activeElement);
        if (currentScrollY > 200 && currentScrollY > lastScrollY && !hasFocus) {
          header.classList.add('header-hidden');
        } else {
          header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });
}

/**
 * 3. MENU OVERLAY (FULLSCREEN INK DRAWER)
 * Spec: 03-sections/global/menu-overlay.md
 */
function initMenuOverlay() {
  const menuOverlay = document.getElementById('menu-overlay');
  const openTriggers = document.querySelectorAll('[data-action="open-menu"]');
  const closeTriggers = document.querySelectorAll('[data-action="close-menu"]');
  let previouslyFocused = null;

  if (!menuOverlay) return;

  function openMenu() {
    previouslyFocused = document.activeElement;
    menuOverlay.classList.add('is-active');
    menuOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button inside
    const closeBtn = menuOverlay.querySelector('.menu-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    menuOverlay.classList.remove('is-active');
    menuOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previouslyFocused) previouslyFocused.focus();
  }

  openTriggers.forEach(btn => btn.addEventListener('click', openMenu));
  closeTriggers.forEach(btn => btn.addEventListener('click', closeMenu));

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('is-active')) {
      closeMenu();
    }
  });
}

/**
 * 4. PROJECT BRIEF DRAWER MODAL
 * Spec: 03-sections/contact/brief-form.md
 */
function initBriefDrawer() {
  const backdrop = document.getElementById('brief-drawer-backdrop');
  const openTriggers = document.querySelectorAll('[data-action="open-brief"]');
  const closeTriggers = document.querySelectorAll('[data-action="close-brief"]');
  const briefForm = document.getElementById('brief-form');
  const statusMsg = document.getElementById('brief-status');
  let previouslyFocused = null;

  if (!backdrop) return;

  function openBrief() {
    previouslyFocused = document.activeElement;
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = backdrop.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  function closeBrief() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previouslyFocused) previouslyFocused.focus();
  }

  openTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openBrief();
  }));

  closeTriggers.forEach(btn => btn.addEventListener('click', closeBrief));

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeBrief();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeBrief();
    }
  });

  // Multi-select service chip buttons
  const chipBtns = document.querySelectorAll('.chip-btn');
  chipBtns.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('is-selected');
      const isSelected = chip.classList.contains('is-selected');
      chip.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
  });

  // Form submission with feedback
  if (briefForm) {
    briefForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = briefForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting brief...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Brief Transmitted ✓';
        }
        if (statusMsg) {
          statusMsg.classList.add('is-success');
          statusMsg.innerHTML = '<strong>Brief Received.</strong> Our creative director will review and respond within 24 hours.';
        }
      }, 750);
    });
  }
}

/**
 * 5. FLOATING CONTACT TRIGGER
 * Spec: 03-sections/global/floating-contact.md
 * Appears after hero; disappears near footer.
 */
function initFloatingContact() {
  const trigger = document.getElementById('floating-contact');
  const hero = document.getElementById('hero');
  const footer = document.querySelector('.site-footer');

  if (!trigger || !hero) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target === hero) {
        // When hero is NOT intersecting, show floating trigger
        if (!entry.isIntersecting) {
          trigger.classList.add('is-visible');
        } else {
          trigger.classList.remove('is-visible');
        }
      }
    });
  }, { threshold: 0.1 });

  observer.observe(hero);

  if (footer) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trigger.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }
}

/**
 * 6. LIVE CLOCKS & TIMECODE
 */
function initLiveClocks() {
  const timecodeEls = document.querySelectorAll('[data-live-timecode]');
  const studioClockEl = document.getElementById('studio-clock');

  function updateClocks() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const mins = String(now.getUTCMinutes()).padStart(2, '0');
    const secs = String(now.getUTCSeconds()).padStart(2, '0');
    const ms = String(Math.floor(now.getUTCMilliseconds() / 10)).padStart(2, '0');

    timecodeEls.forEach(el => {
      el.textContent = `${hours}:${mins}:${secs}:${ms}`;
    });

    if (studioClockEl) {
      studioClockEl.textContent = `LON/NYC ${hours}:${mins}:${secs} UTC`;
    }
  }

  setInterval(updateClocks, 60);
  updateClocks();
}

/**
 * 7. SOUND TOGGLE BUTTON
 */
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle');
  if (!soundBtn) return;

  let isMuted = true;
  soundBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    soundBtn.innerHTML = isMuted 
      ? '<span class="rec-dot" style="background:var(--mid)"></span> AUDIO OFF'
      : '<span class="rec-dot" style="background:var(--flash)"></span> AUDIO ON';
  });
}
