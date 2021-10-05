const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


inputEl.addEventListener('input', onInputTarget);
spanEl.style.fontSize = '25px';
function onInputTarget(event){ 
    spanEl.style.fontSize = `${event.currentTarget.value/2}px`; 
    if(spanEl.style.fontSize === '0px'){
        return spanEl.style.fontSize = '1px';
    } 
  console.log(spanEl.style.fontSize)
}


