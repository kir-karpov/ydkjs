
 "use strict";

 const books = document.getElementsByClassName("book")
 console.log(books);
 
const elementBody = document.body;
console.dir(elementBody);

elementBody.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

books[1].after(books[0])
books[2].before(books[5]);
books[2].before(books[5]);
books[4].before(books[5]);
books[3].before(books[4]);

const targetElement = document.querySelectorAll('[target="_blank"]');

console.log(targetElement);

targetElement[2].innerHTML = `Книга 3. this и Прототипы Объектов`;



const element = document.getElementById("adv");
element.remove()
console.log(element);


const elementGl = document.querySelectorAll(`li`);
console.log(elementGl);
elementGl[10].before(elementGl[12])
elementGl[10].before(elementGl[14]);
elementGl[38].before(elementGl[45]);
elementGl[38].after(elementGl[40]);
elementGl[39].after(elementGl[38]);
elementGl[39].after(elementGl[40]);

const newElem = document.createElement(`li`)
console.log(newElem);
newElem.textContent = `Глава 8: За пределами ES6`;
newElem.classList.add(`green-color`)


elementGl[56].prepend(newElem);




