const inputs = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('#display');

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    const value = input.value;
    
    if(value == 'AC'){
      display.value = '';
    }else if(value == 'DE'){
      display.value = display.value.slice(0, -1);
    }else if(value == '='){
      const result = eval(display.value.replace('X', '*'));
      display.value = result;
    }else{
      display.value += value;
    }
  });
});