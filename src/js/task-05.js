// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputInput);
function onInputInput(event){ 
    output.textContent = event.currentTarget.value
    if (output.textContent==='') { 
        output.textContent = 'незнакомец';
    }
};
