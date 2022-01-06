function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return `${this.title} was written by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`
  }
}

let library = []

function addBook() {
  const title = prompt("What's the title of the book?")
  const author = prompt("Who wrote the book?")
  const pages = prompt("How many pages does the book have?")
  const read = prompt("Have you already read the book?") === 'yes'
  if (title && author && pages)
    library.push(new Book(title, author, pages, read))
}

function displayBooks() {
  let container = document.querySelector('.books')
  container.innerHTML = ''
  for (let book of library) {
    let card = document.createElement('div')
    card.classList.add('book')

    let title = document.createElement('p')
    title.classList.add('title')
    title.textContent = book.title
    card.appendChild(title)

    let author = document.createElement('p')
    author.classList.add('author')
    author.textContent = `Author: ${book.author}`
    card.appendChild(author)

    let pages = document.createElement('p')
    pages.classList.add('pages')
    pages.textContent = `Pages: ${book.pages}`
    card.appendChild(pages)

    // let read = document.createElement('p')
    // read.classList.add('read')
    // read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`
    // card.appendChild(read)

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')

    let changeRead = document.createElement('button')
    changeRead.classList.add('changeRead')
    if (book.read)
      changeRead.classList.toggle('changeRead--unread')
    changeRead.textContent = `${book.read ? 'UNREAD' : 'READ'}`
    changeRead.addEventListener('click', e => {
      book.read = !book.read
      changeRead.classList.toggle('changeRead--unread')
      changeRead.textContent = `${book.read ? 'UNREAD' : 'READ'}`
    })
    buttons.appendChild(changeRead)

    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.textContent = `X`
    remove.addEventListener('click', e => {
      container.removeChild(e.target.parentElement.parentElement)
    })
    buttons.appendChild(remove)
    card.appendChild(buttons)

    container.appendChild(card)
  }
}

let book = new Book("Ready Player One", "Ernest Cline", 254, true)

library.push(book)
book = new Book("Pippi Langstrumpf", "Astrid Lindgren", 199, false)
library.push(book)

displayBooks()

document.querySelector("#addBook").addEventListener('click', e => {
  addBook()
  displayBooks()
})