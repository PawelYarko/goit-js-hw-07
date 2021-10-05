const counterValue = document.querySelector('#value');
const counterEl = document.querySelector('#counter');

const btnDecrement = counterEl.firstElementChild;
const btnIncrement = counterEl.lastElementChild;

btnDecrement.addEventListener('click', onDecrementBtnClick);
btnIncrement.addEventListener('click', onIncrementBtnClick);

const counter = {
    value:0 ,
increment(){
    this.value +=1;
},
decrement(){
    this.value -=1;
},  
}

function onDecrementBtnClick(){
    counter.decrement();
    counterValue.textContent = counter.value;    
}

function onIncrementBtnClick(){
    counter.increment();
    counterValue.textContent = counter.value;    
}


console.log(counterValue);
console.log(btnDecrement);
console.log(btnIncrement);





