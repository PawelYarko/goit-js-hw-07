const refs ={
  nameInput: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event){
  refs.nameSpan.textContent = event.currentTarget.value;
  if(refs.nameSpan.textContent === ''){
   return refs.nameSpan.textContent = 'незнакомец';
  }
}