let bookContainer = document.querySelector(".bookContainer");
const allBooks = document.querySelector('#allBooks');
const addButton = document.querySelector('#addButton');
const popupForm = document.querySelector('#popupForm');
let readButton = document.querySelectorAll('.readButton');
const submit = document.querySelector('#submitButton');
let bookIndex = 1;

let myLibrary = [];

//Book constructer 
function Book (title, author, pages, url, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.url = url;
    this.read = read;
    this.index = index;
}

function createBook(){

    const title = popupForm.querySelector('#title').value;
    const author = popupForm.querySelector('#author').value;
    const pages = popupForm.querySelector('#pages').value;
    const url = popupForm.querySelector('#imgUrl').value;
    let read = popupForm.querySelector('#read').value;

    (read.checked) ? read = 'Read' : read = 'Unread';

    let newBook = new Book(title, author, pages, url, read, bookIndex);
    myLibrary.push(newBook);

    updateContainer(bookContainer);

    bookIndex++;
    clearForm();
    popupForm.classList.toggle('hide');
    readButton = document.querySelectorAll('.readButton');
}

function resetGrid(){
    while(allBooks.firstChild){
        allBooks.removeChild(allBooks.lastChild);
    }
}

function updateContainer(container){

    resetGrid();
    myLibrary.forEach(book => {
        let copyBook = container.cloneNode(true);
        copyBook.style.display = 'flex';

        copyBook.querySelector('.bookName').textContent = book.title;
        copyBook.querySelector('.bookAuthor').textContent = book.author;
        copyBook.querySelector('.bookPages').textContent = book.pages;
        copyBook.querySelector('.bookImg').setAttribute('src', book.url);
        copyBook.setAttribute('data-index', book.index);
        copyBook.querySelector('.readStatus').textContent = book.read;
        console.log(book.read);

        addReadEvent(copyBook.querySelector('.readButton'));
        addDeleteEvent(copyBook.querySelector('.deleteButton'));
        

        allBooks.appendChild(copyBook);
    })

}

function clearForm(){
    let allInputs = popupForm.querySelectorAll('input');
    allInputs.forEach(input => {
        input.value= '';
    });
}

function addReadEvent(ele){
    ele.addEventListener('click', e => {
        let read = e.target.parentNode;
        let readStatus = read.querySelector('.readStatus');
        let readIndex = read.getAttribute('data-index');
        let book = findBook(readIndex)

        if (book.read == 'Read'){
            book.read = 'Unread';
        } else {
            book.read = 'Read';
        }

        updateContainer(bookContainer);
    })
}

function addDeleteEvent(ele){
    ele.addEventListener('click', e => {
        let bookIndex = e.target.parentNode.getAttribute('data-index');

        let newLibrary = filterBook(bookIndex);
        myLibrary = newLibrary;
        updateContainer(bookContainer);
    })
}

function findBook(index){
    return myLibrary.find(book => book.index == index);
}

function filterBook(index){
    return myLibrary.filter(book => book.index != index);
}

// Active Objects

addButton.addEventListener('click', e => {
    popupForm.classList.toggle(('hide'));
})

submit.addEventListener('click', createBook);





