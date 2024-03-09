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

const contactButton = document.getElementById('contactBtn');
const cardsContainer = document.querySelector('.cards-container');
const headerTitle = document.querySelector('.header-title');
const headerContainer = document.querySelector('.header-container');
let lastScrollPosition = 0;
let isScrollingDown = false;


window.addEventListener('scroll', function() {
  const currentScrollPosition = window.windowscrollY || document.documentElement.scrollTop;
  const contactButtonPosition = contactButton.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  isScrollingDown = currentScrollPosition > lastScrollPosition;

  if (contactButtonPosition < windowHeight * 1.2 && isScrollingDown) {
    const cards = cardsContainer.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.add('in-view');
    });

    headerTitle.classList.add('shrink');
    contactButton.classList.add('hide');
    headerContainer.style.transform = 'translateY(0)'; 
  } else {
    const cards = cardsContainer.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.remove('in-view');
    });

    headerTitle.classList.remove('shrink');
    contactButton.classList.remove('hide');
    headerContainer.style.transform = 'translateY(-100%)'; 
  }

  lastScrollPosition = currentScrollPosition;
});

