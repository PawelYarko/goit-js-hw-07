const textInput = document.querySelector('#validation-input');

textInput.addEventListener('input', onTextInputChange);

function onTextInputChange(event){
    if(event.currentTarget.value.length === 6){  //вместо просто "6" много пробовал подставлять путь к data-length 
      return textInput.classList = 'valid';      //например: event.currentTarget.attributes.data-length , но почемуто не работало. Подскажите в чем ошибка  

    }
    return textInput.classList = 'invalid';


}
