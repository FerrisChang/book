let myLibrary = []


function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    }

function addBookToLibrary() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    
    
    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
}

function displayBooks() {
    let didRead = ''
    const read = document.getElementById('read')
    if(read.checked === true) {
        didRead = 'read'
    } else {
        didRead = 'notRead'
        }
    const book = document.querySelector('#books')
    const copyOfLibrary = myLibrary

    myLibrary.forEach((myLibrary, index) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.index = index
        book.appendChild(card)
        for (let key in myLibrary) {
            const para = document.createElement('p')
            para.classList.add('info')
            para.textContent = (`${key}: ${myLibrary[key]}`)
            card.appendChild(para)
        }

        //Displays the read button and can be toggled between the read and not read 
        const readBtn = document.createElement('button')
        if(didRead == 'read') {
            readBtn.textContent = 'read'
        } else {
            readBtn.textContent = 'not read'
        }
        readBtn.classList.add('readOrNot')
        card.appendChild(readBtn)
        readBtn.addEventListener('click', () => {
            if(readBtn.textContent == 'read'){
                readBtn.textContent = 'not read'
            } else {
                readBtn.textContent = 'read'
            }
        })

        const deleteBook = document.createElement('button')
        deleteBook.textContent = 'delete book'
        deleteBook.classList.add('delete')
        card.appendChild(deleteBook)
        deleteBook.addEventListener('click', () =>{
            let parent = document.getElementById("books")
            let child = parent.getElementsByClassName("card")[index]
            parent.removeChild(child)
            copyOfLibrary.splice(index, 1)
        })
    });
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
    document.getElementById('books').textContent = ''
    addBookToLibrary()
    displayBooks()
}