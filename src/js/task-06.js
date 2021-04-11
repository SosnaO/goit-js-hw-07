const input = document.querySelector('#validation-input');
const valueLength= Number(input.getAttribute('data-length'));
input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  console.log("Потеряли фокус");
  if (event.currentTarget.value.length === valueLength) {
  event.currentTarget.classList.remove('invalid');
   event.currentTarget.classList.add('valid');
  }
  else {
    event.currentTarget.classList.add('invalid');
  }
};

