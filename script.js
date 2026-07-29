const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const aboutTrigger = document.querySelector('.about-trigger');
const aboutMenu = document.querySelector('.about-menu');
const closeAbout = document.querySelector('.about-close');

function toggleAbout(open) {
  aboutMenu.classList.toggle('is-open', open);
  aboutMenu.setAttribute('aria-hidden', !open);
  aboutTrigger.setAttribute('aria-expanded', open);
}

aboutTrigger?.addEventListener('click', () => toggleAbout(!aboutMenu.classList.contains('is-open')));
closeAbout?.addEventListener('click', () => toggleAbout(false));
aboutMenu?.addEventListener('click', (event) => { if (event.target === aboutMenu) toggleAbout(false); });

const personOptions = document.querySelectorAll('.person-option');
const people = document.querySelectorAll('.about-menu .person');
personOptions.forEach((option) => option.addEventListener('click', () => {
  const selected = option.dataset.person;
  personOptions.forEach((item) => {
    const isSelected = item === option;
    item.classList.toggle('is-selected', isSelected);
    item.setAttribute('aria-selected', isSelected);
  });
  people.forEach((person) => person.classList.toggle('is-selected', person.dataset.person === selected));
}));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.image-reveal').forEach((item) => reveal.observe(item));
