const input = document.querySelector('#font-size-control');
console.log(input);
const spanText= document.querySelector('#text');
console.log(spanText);

input.addEventListener('input', onInputSize)
function onInputSize(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;

};
