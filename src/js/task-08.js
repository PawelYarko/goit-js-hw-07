const refs = {
    btnCreate: document.querySelector('.btnCreate'),
    btnDelete: document.querySelector('.btnDelete'),
    inputNumber: document.querySelector('.inputNumber'),
    boxesEl: document.querySelector('#boxes')
};

refs.inputNumber.addEventListener('input', onInputNumber);
refs.btnCreate.addEventListener('click', onBtnCreateClick);
refs.btnDelete.addEventListener('click', onBtnDeleteClick);


function onInputNumber(event){
   const numbers = event.target.value;
   
   return numbers;
}
const numbersFunction = onInputNumber();
console.log(numbersFunction);

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
  }

// function createBoxes(amount){
//   for(let i = 0; i <= amount; i++){
//     let boxEl = 0;  
//     boxEl =+ boxEl[i]; 
//     boxEl = document.createElement('div');
//     boxEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}`;
//     boxEl.style.width = '30px';
//     boxEl.style.height = '30px';
//   }
// }


function onBtnCreateClick(){

  return refs.boxesEl.append(createBoxes());  
}

// function onBtnDeleteClick(){
//   refs.boxesEl.innerHTML = ''; 
// }

// console.log(onInputNumber());

// const amount = 10;

//     for(let i = 0; i <= amount; i++){
//       let boxEl = 0;
//       boxEl =+ boxEl[i];
//       boxEl = document.createElement('div');
//      console.log(boxEl);
//       }
      
  