
const number=document.querySelector('input')
console.log( number)
const render=document.querySelector('button')
console.log(render)
const destroy=document.querySelector('button:last-child')
console.log(destroy)
const divboxes=document.querySelector('#boxes')
console.log(divboxes)

let inputValue;

//кнопка Очистить
destroy.addEventListener('click', onClearOutput)
function onClearOutput(event) {
    number.valueAsNumber = '';
    divboxes.innerHTML = '';
};

//кнопка ВВода значения
number.addEventListener('input', ValueInput);
function ValueInput(event) { 
    return inputValue = Number(event.currentTarget.value);
}
//кнопка Создать
render.addEventListener('click', createBoxes)
function createBoxes(amount) {
    const ArrayBoxes = [];
    let size = 30;
     amount = inputValue;
    for (let i = 0; i < amount; i++) {
          
        const element = document.createElement('div');
        element.style.width = `${(size)}px`;
        element.style.height = `${(size)}px`;
        element.style.backgroundColor = `${'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'}`;
        ArrayBoxes.push(element);
        size +=10;
    }
        divboxes.append(...ArrayBoxes);
    };





