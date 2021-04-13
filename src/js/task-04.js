
const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};
    

const decrementButton = document.querySelector('button');
const valueButton=document.querySelector('#value');
const incrementButton = document.querySelector('button:last-child');

decrementButton.addEventListener('click', function () {
    counterValue.decrement();
    valueButton.textContent = counterValue.value;
});
incrementButton.addEventListener('click', function () {
    counterValue.increment();
    valueButton.textContent = counterValue.value;
});
