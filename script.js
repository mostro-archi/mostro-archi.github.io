const sections = document.querySelectorAll('.scroll-sections section');
const fixedText = document.getElementById('fixedText');

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateText();
      ticking = false;
    });
    ticking = true;
  }
});

function updateText() {
  let currentHTML = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      currentHTML = section.getAttribute('data-html');
    }
  });

  if (currentHTML && fixedText.innerHTML !== currentHTML) {
    fixedText.innerHTML = currentHTML;
  }
}
