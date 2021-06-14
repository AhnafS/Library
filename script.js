let bookContainer = document.querySelector(".bookContainer");
const allBooks = document.querySelector('#allBooks');
const addButton = document.querySelector('#addButton');
const popupForn = document.querySelector('#popupForm');
let bookIndex = 1;

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let test = new Book ('tests', 'Ahnaf', '2021', true);

function copyBookContainer (container, Book){
    let newBook = container.cloneNode(true);
    newBook.style.display = 'flex';
    newBook.querySelector('.bookName').textContent = Book.title;
    newBook.querySelector('.bookAuthor').textContent = Book.author;
    newBook.querySelector('.bookPages').textContent = Book.pages;

    (Book.read) ? newBook.querySelector('.readStatus').textContent = 'Read'
    : newBook.querySelector('.readStatus'). textContent = 'Unread';

    newBook.setAttribute('data-index', bookIndex);
    bookIndex++;
    allBooks.appendChild(newBook);
}

addButton.addEventListener("click", e => {
    popupForn.classList.toggle('hide');
})


