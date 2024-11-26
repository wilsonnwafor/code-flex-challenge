const btn = document.querySelector("#theme-btn");
const body = document.querySelector("body");

const getColors =()=> {
  const red = Math.round(Math.random() * 255)
  const green = Math.round(Math.random() * 255)
  const blue = Math.round(Math.random() * 255)

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
};

btn.addEventListener('click', ()=>{
  getColors();
});