const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputInput);
function onInputInput(event){ 
    output.textContent = event.currentTarget.value
    if (output.textContent==='') { 
        output.textContent = 'незнакомец';
    }
};







const input = document.querySelector('#name-input');
console.log(input);

const output = document.querySelector('#name-output');
console.log(output);


input.addEventListener('focus', onInputFocus);
function onInputFocus(){ 
    console.log("Получили фокус");

};
input.addEventListener('blur', onInputBlur);
function onInputBlur(){ 
    console.log("Потеряли фокус");

};
