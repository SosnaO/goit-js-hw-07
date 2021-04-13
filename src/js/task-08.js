
const number=document.querySelector('input')
console.log( number)
const render=document.querySelector('button')
console.log(render)
const destroy=document.querySelector('button:last-child')
console.log(destroy)
const divboxes=document.querySelector('#boxes')
console.log(divboxes)

let inputValue;
//let inputValue;
//кнопка Очистить
destroy.addEventListener('click', onClearOutput)


function onClearOutput(event) {
    number.valueAsNumber= '';
};
//random
let color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
console.log(color);

//кнопка ВВода значения
number.addEventListener('input', ValueInput);
function ValueInput(event) { 
    return inputValue = Number(event.currentTarget.value);
}
//кнопка Создать
render.addEventListener('click', createBoxes)

function createBoxes(amount) {
const ArrayBoxes = [];
let widthBox = 30;
let heigthBox = 30;
//let amount = inputValue;
    for (let i = 0; i < amount; i++) {
      const getTask = text = `
    <div
    style="width:${(widthBox += 10)}px;
    height:${(heigthBox += 10)}px;
    background-color: ${(color)}"
    >
    </div>
    `;
        ArrayBoxes.push(getTask);
    }    
   divboxes.append(...ArrayBoxes);
}
    








