const array = ["Java", "Python", "C#", "Go", "Assembly", "TypeScript", "R"]
const cont = document.querySelector('#list');

for(i =0; i < array.length; i++){
  cont.innerHTML += `
    <li> ${array[i]} </li>
  `
};