const btn = document.querySelector('#get');
const HTML_container = document.querySelector('#container')
let url = 'https://countriesnow.space/api/v0.1/countries/flag/images';


const getCountries = async()=>{
  let countries;
  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    countries = data.data;
  }catch(err){
    console.log("Opps!", err)
  }

  for(i = 0; i <= countries.length; i++){
    console.log(countries[i].flag);
    HTML_container.innerHTML += 
    `
    <div class="item">
      <p>${countries[i].name}</p>
      <img src="${countries[i].flag}" >
    </div>
    `
  }
  
};

btn.addEventListener('click', ()=>{
  getCountries();
});