let ans = document.querySelector('#ans');

function add (){
  const firstNumber = parseInt(document.querySelector('#input-one').value);
  const secondNumber = parseInt(document.querySelector('#input-two').value);

  const answer = firstNumber + secondNumber;
  ans.textContent = `Result: ${answer}`
  console.log(answer);
};
