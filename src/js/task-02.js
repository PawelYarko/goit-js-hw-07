const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// Получилось несколько вариантов какой правильней?

// Вриант 1
// const addIngredientsToList = ingredients => { 
//     return ingredients.map((ingredient) => {
//   const ingredientsEl = document.querySelector('#ingredients');
//   const newListEl = document.createElement('li');
//   ingredientsEl.append(newListEl);
//   newListEl.textContent = ingredient;
//   });
//   }
//   const elements = addIngredientsToList(ingredients);
// console.log(elements);



  // Вриант 2
// const addIngredientsToList = ingredients => { 
//   return ingredients.map((ingredient) => {
// const ingredientsEl = document.querySelector('#ingredients');
// const newListEl = document.createElement('li');
// ingredientsEl.append(newListEl);
// newListEl.append(ingredient);
// return newListEl;
// });
// }
// const elements = addIngredientsToList(ingredients);

// Вариант 3
const ingredientsEl = document.querySelector('#ingredients');

const addIngredientsToList = ingredients => { 
      return ingredients.map((ingredient) => {
    const newListEl = document.createElement('li');
    newListEl.textContent = ingredient;
    return newListEl;
    });
    }
    const elements = addIngredientsToList(ingredients);
    ingredientsEl.append(...elements);
  console.log(ingredientsEl);





