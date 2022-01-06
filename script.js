function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return `${this.title} was written  by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`
  }
}

let book = new Book("Ready Player One", "Ernest Cline", 254, true)
console.log(book.info())