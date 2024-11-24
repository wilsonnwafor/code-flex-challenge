const btn = document.querySelector('#btn');
let DOM_element = document.querySelector('#text');
let changed_text = 'Great! You Just Changed a DOM Element';

btn.addEventListener('click', ()=>{
  DOM_element.textContent = changed_text;
});