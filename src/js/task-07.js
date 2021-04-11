// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.
const input = document.querySelector('#font-size-control');
console.log(input);
const spanText= document.querySelector('#text');
console.log(spanText);

input.addEventListener('input', onInputSize)
function onInputSize(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}
