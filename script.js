let bookContainer = document.querySelector(".bookContainer");
const allBooks = document.querySelector('#allBooks');
const addButton = document.querySelector('#addButton');
const popupForn = document.querySelector('#popupForm');
let bookIndex = 1;

let myLibrary = [];

function Book (title, author, pages, url, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    this.read = read;
}

function createNewBook(){
    const submit = document.querySelector('#submitButton');
    submit.addEventListener('click', e => {
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const url = document.querySelector('#imgUrl').value;
        const read = document.querySelector('#read').value;

        let newBook = new Book(title, author, pages, url, read);

        myLibrary.push(newBook);
        popupForm.classList.toggle('hide');

        let allInputs = popupForn.querySelectorAll('input');
        allInputs.forEach(input => {
            input.value= '';
        });

        addBookToContainer(bookContainer, newBook);
        
    })
}

function addBookToContainer (container, Book){
    let newBook = container.cloneNode(true);
    newBook.style.display = 'flex';
    newBook.querySelector('.bookName').textContent = Book.title;
    newBook.querySelector('.bookAuthor').textContent = Book.author;
    newBook.querySelector('.bookPages').textContent = Book.pages;
    newBook.querySelector('.bookImg').setAttribute('src', Book.url);

    (Book.read) ? newBook.querySelector('.readStatus').textContent = 'Read'
    : newBook.querySelector('.readStatus'). textContent = 'Unread';

    newBook.setAttribute('data-index', bookIndex);
    bookIndex++;

    container.innerHTML = '';
    myLibrary.forEach(book => {
        allBooks.appendChild(newBook);
    })
}


addButton.addEventListener("click", e => {
    popupForn.classList.toggle('hide');
    createNewBook();
})
