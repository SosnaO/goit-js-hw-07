
const categoriesEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);
itemsEl.forEach(doc => {
    const navEl = doc.querySelector('h2');
    console.log(`Категория: ${navEl.textContent}`);
      const quantityEl = doc.querySelectorAll('li');
     console.log('Количество элементов:', quantityEl.length);
  
});
