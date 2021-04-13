const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = ingredients.map(element => {
  const list = document.createElement('li')
  list.textContent = element;
  return list;
});
document.body.append(...listIngredients);





