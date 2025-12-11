// ============================================
// FONCTIONNALITÉS DU PORTFOLIO (VERSION SOBRE)
// ============================================

// Effet de typing dynamique
const typingPhrases = [
  'Développeur Full-Stack',
  'Passionné de Code',
  'Étudiant en BUT Informatique'
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

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});
