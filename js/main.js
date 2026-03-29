/* ============================================================
   PANKAJ BANSHRAJ PAL — Portfolio JavaScript
   ============================================================ */

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollTop();
  initCopyEmail();
  initSkillBars();
  initFadeIn();
  initActiveNav();
  initStatusRotation();
  initTerminalTyping();
});

// ---- Navbar Scroll Effect ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 8px 48px rgba(0,0,0,0.6)';
    } else {
      navbar.style.boxShadow = '';
    }
  }, { passive: true });
}

// ---- Mobile Menu ----
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
    btn.innerHTML = menu.classList.contains('open')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close on link click
  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
}

// ---- Scroll To Top ----
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Copy Email ----
function initCopyEmail() {
  const btn = document.getElementById('copyEmailBtn');
  const text = document.getElementById('copyEmailText');
  if (!btn || !text) return;

  btn.addEventListener('click', () => {
    const email = 'prithvikpal@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        text.textContent = '✓ Copied!';
        btn.style.color = 'var(--accent)';
        btn.style.borderColor = 'var(--accent-border)';
        setTimeout(() => {
          text.textContent = 'Copy Email';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2500);
      }).catch(() => fallbackCopy(email, text, btn));
    } else {
      fallbackCopy(email, text, btn);
    }
  });
}

function fallbackCopy(text, el, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    el.textContent = '✓ Copied!';
    btn.style.color = 'var(--accent)';
    setTimeout(() => {
      el.textContent = 'Copy Email';
      btn.style.color = '';
    }, 2500);
  } catch(e) { console.log('Copy failed'); }
  document.body.removeChild(ta);
}

// ---- Contact Form ----
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const subject = form.querySelectorAll('input[type="text"]')[1]?.value || 'Portfolio Contact';
  const message = form.querySelector('textarea').value;

  // Open mailto with pre-filled content
  const mailtoUrl = `mailto:prithvikpal@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Hi Pankaj,\n\nMy name is ${name}.\n\n${message}\n\nContact me at: ${email}`)}`;
  window.open(mailtoUrl, '_blank');

  form.style.display = 'none';
  success.style.display = 'flex';

  setTimeout(() => {
    form.style.display = 'flex';
    form.reset();
    success.style.display = 'none';
  }, 5000);
}

// ---- Skill Bars Animation ----
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

// ---- Fade In on Scroll ----
function initFadeIn() {
  // Add fade-in class to major sections
  const targets = document.querySelectorAll(
    '.exp-card, .project-card, .cert-card, .card, .bounty-wrapper, .skills-col, .about-metric'
  );
  targets.forEach((el, i) => {
    el.classList.add('fade-in');
    if (i % 3 === 1) el.classList.add('fade-in-delay-1');
    if (i % 3 === 2) el.classList.add('fade-in-delay-2');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ---- Active Nav on Scroll ----
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ---- Status Text Rotation ----
function initStatusRotation() {
  const el = document.getElementById('statusText');
  if (!el) return;

  const messages = [
    'Secure Channel Active',
    'Threat Hunter Online',
    'SOC Analyst Ready',
    'Systems Hardened',
    'Vulnerabilities: Patched',
    'Open to Opportunities',
  ];
  let index = 0;

  setInterval(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      index = (index + 1) % messages.length;
      el.textContent = messages[index];
      el.style.opacity = '1';
    }, 300);
  }, 3500);
}

// ---- Terminal Typing Effect ----
function initTerminalTyping() {
  const lines = document.querySelectorAll('.terminal-line .t-cmd');
  if (!lines.length) return;

  lines.forEach((line, i) => {
    const originalText = line.textContent;
    line.textContent = '';
    const delay = i * 600 + 400;
    let charIndex = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < originalText.length) {
          line.textContent += originalText[charIndex];
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, delay);
  });
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- Expose form handler globally ----
window.handleFormSubmit = handleFormSubmit;

// ---- Particle effect on hero (subtle) ----
(function initParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.4';
  hero.style.position = 'relative';
  hero.style.overflow = 'hidden';
  hero.insertBefore(canvas, hero.firstChild);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '0,255,136' : '0,212,255';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  // Create particles
  const COUNT = Math.min(60, Math.floor(canvas.width * canvas.height / 12000));
  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach(q => {
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,255,136,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
      p.update();
      p.draw();
    });

    animId = requestAnimationFrame(animate);
  }
  animate();
})();
