const hero = document.getElementById('hero');
const images = [
  'img1.png',
  'img2.png',
  'img3.png'
];

let current = 0;

function changeBackground() {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url(${images[current]})`;
}

// Set initial background
hero.style.backgroundImage = `url(${images[0]})`;

// Change every 5 seconds
setInterval(changeBackground, 5000);

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

const serviceBoxes = document.querySelectorAll('.service');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
  entry.target.classList.add('reveal');
} else {
  entry.target.classList.remove('reveal');
}

  });
}, {
  threshold: 0.1 // 10% visible triggers the animation
});

serviceBoxes.forEach(box => {
  observer.observe(box);
});
