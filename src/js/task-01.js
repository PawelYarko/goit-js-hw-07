// Вариант 1 

// const categoriesEl = document.querySelector('#categories');
// const listItemsEl = categoriesEl.querySelectorAll('.item');
// const titleEl = categoriesEl.querySelectorAll('.title');
// const listItemsElLength = categoriesEl.querySelectorAll('.item ul');

// console.log( `В списке ${listItemsEl.length} категории.`);

// console.log(`Категория: ${titleEl[0].textContent}`);
// console.log(`Количество элементов: ${listItemsElLength[0].querySelectorAll('li').length}`);

// console.log(`Категория: ${titleEl[1].textContent}`);
// console.log(`Количество элементов: ${listItemsElLength[1].querySelectorAll('li').length}`);

// console.log(`Категория: ${titleEl[2].textContent}`);
// console.log(`Количество элементов: ${listItemsElLength[2].querySelectorAll('li').length}`);

// Вариант 2

const refs = {
    categoriesEl: document.querySelector('#categories'),
    listEl: document.querySelectorAll('.item'),

};

console.log(`В списке ${refs.categoriesEl.children.length} категории.`);

console.log(`Категория: ${refs.listEl[0].firstElementChild.textContent}`);
console.log(`Количество элементов: ${refs.listEl[0].lastElementChild.children.length}`);

console.log(`Категория: ${refs.listEl[1].firstElementChild.textContent}`);
console.log(`Количество элементов: ${refs.listEl[1].lastElementChild.children.length}`);

console.log(`Категория: ${refs.listEl[2].firstElementChild.textContent}`);
console.log(`Количество элементов: ${refs.listEl[2].lastElementChild.children.length}`);