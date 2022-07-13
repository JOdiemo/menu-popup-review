// ---------------menu toggle functions

const email = document.getElementById('email');
const eWarning = document.querySelector('.emailWarning');
const submit = document.querySelector('.registerbtn');

submit.addEventListener('click', () => {
  if (/[A-Z]/.test(email.value)) {
    eWarning.style.display = 'flex';
  } else {
    eWarning.style.display = 'none';
  }
});

submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(email.value)) {
    event.preventDefault();
  }
}, false);

// eslint-disable-next-line no-unused-vars
function showMenu() {
  document.querySelector('.navbar').classList.toggle('active');
  document.querySelector('.mobile-version').classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function hideMenu() {
  document.querySelector('.navbar.active').classList.remove('active');
  document.querySelector('.mobile-version.active').classList.remove('active');
}