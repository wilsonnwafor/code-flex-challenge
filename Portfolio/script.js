// Header interaction
const hamMenu = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.nav-links');
const links = sideBar.querySelectorAll('ul li a');

hamMenu.addEventListener('click', ()=>{
  sideBar.classList.toggle('clicked');
  hamMenu.classList.toggle('fa-x');
});

links.forEach(link =>{
  link.addEventListener('click', ()=>{
    sideBar.classList.remove('clicked');
    hamMenu.classList.remove('fa-x');
  });
});

// Form submission
const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const names = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const err = document.querySelector('#error-msg');

  if (names.value === ''){
    err.style.color = 'red';
    err.textContent = "Please Fill in all Fields";
    return;
  } 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    err.style.color = 'red';
    err.textContent = "Please Fill in all Fields correctly";
    return;
  }
  if (message.value === ''){
    err.style.color = 'red';
    err.textContent = "Please Fill in all Fields";
    return;
  } 
  console.log("submitted");
});