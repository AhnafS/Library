let bookContainer = document.querySelector(".bookContainer");
const allBooks = document.querySelector('#allBooks');
const addButton = document.querySelector('#addButton');
const popupForm = document.querySelector('#popupForm');
let readButton = document.querySelector('.readButton');
const submit = document.querySelector('#submitButton');
let bookIndex = 1;

let myLibrary = [];

//Book constructer 
function Book (title, author, pages, url, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    this.reader = read;
    this.index = index;
}

function createBook(){

    const title = popupForm.querySelector('#title').value;
    const author = popupForm.querySelector('#author').value;
    const pages = popupForm.querySelector('#pages').value;
    const url = popupForm.querySelector('#imgUrl').value;
    const read = popupForm.querySelector('#read').value;

    let newBook = new Book(title, author, pages, url, read, bookIndex);
    myLibrary.push(newBook);
    updateContainer(bookContainer);

    bookIndex++;
    clearForm();
    popupForm.classList.toggle('hide');

}

function resetGrid(){
    while(allBooks.firstChild){
        allBooks.removeChild(allBooks.lastChild);
    }
}

function updateContainer(container){

    resetGrid();
    console.log(myLibrary); 
    myLibrary.forEach(book => {
        let copyBook = container.cloneNode(true);
        copyBook.style.display = 'flex';

        copyBook.querySelector('.bookName').textContent = book.title;
        copyBook.querySelector('.bookAuthor').textContent = book.author;
        copyBook.querySelector('.bookPages').textContent = book.pages;
        copyBook.querySelector('.bookImg').setAttribute('src', book.url);
        copyBook.setAttribute('data-index', book.index);

        (book.read) ? copyBook.querySelector('.readStatus').textContent = 'Read'
        : copyBook.querySelector('.readStatus').textContent = 'Unread';

        allBooks.appendChild(copyBook);
    })

}

function clearForm(){
    let allInputs = popupForm.querySelectorAll('input');
    allInputs.forEach(input => {
        input.value= '';
    });
}

addButton.addEventListener('click', e => {
    popupForm.classList.toggle(('hide'));
})

submit.addEventListener('click', createBook);



