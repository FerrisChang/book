let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }

function addBookToLibrary() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read')
    let haveRead
    if(read.checked) {
        haveRead = "read"
    } else {
        haveRead = "not read"
    }
    const newBook = new Book(title, author, pages, haveRead)
    myLibrary.push(newBook)
}

function displayBooks() {
    const book = document.querySelector('#books')
    myLibrary.forEach(myLibrary => {
        console.table(myLibrary)
        const card = document.createElement('div')
        card.classList.add('card')
        book.appendChild(card)
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`)
            const para = document.createElement('p')
            para.textContent = (`${key}: ${myLibrary[key]}`)
            card.appendChild(para)
        }
        const deleteBook = document.createElement('button')
        deleteBook.textContent = 'delete book'
        deleteBook.classList.add('delete')
        card.appendChild(deleteBook)
    
    });
}

function removeBook(index) {

    const remove = document.addEventListener()

}































//Modal to add book to the content box
const modal = document.getElementById("myModal")
const btn = document.getElementById("addBook")
const span = document.getElementsByClassName("close")[0]
const SUBMIT = document.getElementById('submit')
btn.onclick = function() {
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
    displayBooks()
    console.table(myLibrary)
}