const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputInput);
function onInputInput(event){ 
    output.textContent = event.currentTarget.value
    if (output.textContent==='') { 
        output.textContent = 'незнакомец';
    }
};


