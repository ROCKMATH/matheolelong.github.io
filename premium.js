// ============================================
// FONCTIONNALITÉS PREMIUM DU PORTFOLIO
// ============================================

// Effet de typing dynamique
const typingPhrases = [
  'Développeur Full-Stack',
  'Passionné de Code',
  'Créateur de Solutions',
  'Fan de JavaScript',
  'Amateur de Python'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const el = document.getElementById('typingText');
  if (!el) return;
  
  const currentPhrase = typingPhrases[phraseIndex];
  
  if (isDeleting) {
    el.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    el.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Curseur personnalisé (desktop only)
function initCustomCursor() {
  if (window.innerWidth <= 768) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  // Effet hover
  document.querySelectorAll('a, button, .project-card, .contact-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
      cursorDot.classList.add('dot-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
      cursorDot.classList.remove('dot-hover');
    });
  });
}

// Effet Tilt 3D sur les cartes
function initTiltEffect() {
  document.querySelectorAll('.project-card, .stat-item, .contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Confetti
function createConfetti() {
  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Code Konami Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

function initKonamiCode() {
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateKonamiMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

function activateKonamiMode() {
  if (typeof showNotification === 'function') {
    showNotification('🎮 KONAMI CODE ACTIVATED! 🕹️');
  }
  createConfetti();
  document.body.style.animation = 'rainbow 2s ease-in-out';
  setTimeout(() => {
    document.body.style.animation = '';
  }, 2000);
}

// Boutons magnétiques
function initMagneticButtons() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// Indicateur de scroll en pourcentage
function initScrollIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'scroll-percentage';
  indicator.innerHTML = '<span>0%</span>';
  document.body.appendChild(indicator);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    indicator.querySelector('span').textContent = scrollPercent + '%';
    indicator.style.opacity = scrollTop > 200 ? '1' : '0';
  });
}

// Particules au clic
function initClickParticles() {
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'click-particle';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.style.setProperty('--tx', Math.cos(i * Math.PI / 4) * 50 + 'px');
      particle.style.setProperty('--ty', Math.sin(i * Math.PI / 4) * 50 + 'px');
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 600);
    }
  });
}

// Confetti sur le bouton Contact
function initContactConfetti() {
  const ctaButton = document.querySelector('.btn-primary');
  if (ctaButton) {
    ctaButton.addEventListener('click', createConfetti);
  }
}

// Initialisation de toutes les fonctionnalités
document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
  initCustomCursor();
  initTiltEffect();
  initKonamiCode();
  initMagneticButtons();
  initScrollIndicator();
  initClickParticles();
  initContactConfetti();
  
  console.log('%c🎮 Essaie le code Konami : ↑↑↓↓←→←→BA', 'font-size: 14px; color: #6366f1; font-weight: bold;');
});
