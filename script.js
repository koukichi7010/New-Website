const aboutBtn = document.getElementById('aboutBtn');
const aboutPage = document.getElementById('aboutPage');
const closeAboutBtn = document.getElementById('closeAboutBtn');
const contactBtn = document.getElementById('contactBtn');
const contactPage = document.getElementById('contactPage');
const closeContactBtn = document.getElementById('closeContactBtn');
const cards = document.querySelector('.cards');
const footer = document.querySelector('.footer');

function showPage(page) {
  page.style.display = 'flex';
  page.style.animation = 'fadeIn 0.5s ease-in-out';
}

function hidePage(page) {
  page.style.animation = 'fadeOut 0.5s ease-in-out';
  setTimeout(() => {
    page.style.display = 'none';
  }, 500);
}

aboutBtn.addEventListener('click', () => {
  showPage(aboutPage);
  hidePage(contactPage);
});

contactBtn.addEventListener('click', () => {
  showPage(contactPage);
  hidePage(aboutPage);
});

closeAboutBtn.addEventListener('click', () => {
  hidePage(aboutPage);
});

closeContactBtn.addEventListener('click', () => {
  hidePage(contactPage);
});

window.addEventListener('click', (event) => {
  if (event.target === aboutPage || event.target === aboutBtn) {
    return;
  }

  if (event.target === contactPage || event.target === contactBtn) {
    return;
  }

  if (aboutPage.style.display === 'flex') {
    hidePage(aboutPage);
  }

  if (contactPage.style.display === 'flex') {
    hidePage(contactPage);
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition > windowHeight) {
    cards.style.display = 'grid';
    footer.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    cards.style.display = 'none';
    footer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});