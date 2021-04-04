
const categoriesEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);
itemsEl.forEach(element => {
    const navEl =element.querySelector('h2');
    console.log(`Категория: ${navEl.textContent}`);
      const quantityEl = element.querySelectorAll('li');
     console.log('Количество элементов:', quantityEl.length);
  
});
