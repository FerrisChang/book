let myLibrary = []
let newBook;

class Book{
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBookToLibrary() {
    event.preventDefault();
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
    storeData()
    displayCard()
}

function displayCard() {
    const library = document.getElementById('books')
    const book = document.querySelectorAll('.book')
    book.forEach(books => library.removeChild(books))
    for(let i = 0; i < myLibrary.length; i++) {
        makeBookCard(myLibrary[i])
    }
}

function makeBookCard(bookInfo){
    const library = document.getElementById('books')
    const bookContainer = document.createElement('div')
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const pagePara = document.createElement('p');
    const deleteBook = document.createElement('button');
    const readButton = document.createElement('button');

    bookContainer.classList.add('book');
    bookContainer.setAttribute('id', myLibrary.indexOf(bookInfo));

    titlePara.textContent = bookInfo.title;
    titlePara.classList.add('title');
    bookContainer.appendChild(titlePara);

    authorPara.textContent = bookInfo.author;
    authorPara.classList.add('author');
    bookContainer.appendChild(authorPara);

    pagePara.textContent = bookInfo.pages;
    pagePara.classList.add('pages');
    bookContainer.appendChild(pagePara);

    readButton.classList.add('readButton')    
    bookContainer.appendChild(readButton);
    (bookInfo.read===false) ? readButton.textContent = 'Not Read' : readButton.textContent = 'Read'
    readButton.addEventListener('click', () => { 
        bookInfo.read = !bookInfo.read; 
        storeData()
        displayCard()
        
    }); 

    deleteBook.textContent = 'delete book';
    deleteBook.classList.add('deleteBook');
    bookContainer.appendChild(deleteBook);
    deleteBook.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(bookInfo, 1));
        storeData()
        displayCard()
    });

    library.appendChild(bookContainer);
}


function storeData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function refresh() {
    if(!localStorage.myLibrary) {
        displayCard();
    }else {
        let objects = localStorage.getItem('myLibrary') 
        objects = JSON.parse(objects);
        myLibrary = objects;
        displayCard();
    }
}

refresh();


//Modal to add book to the content box
const modal = document.getElementById("myModal")
const addBtn = document.getElementById("addBook")
const span = document.getElementsByClassName("close")[0]
const SUBMIT = document.getElementById('submit')
addBtn.onclick = function() {
    modal.style.display = "block"
}
span.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none"
    }
}
SUBMIT.onclick = function() {
    modal.style.display = "none"
    addBookToLibrary()
}