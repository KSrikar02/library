let books = [];

function Book(title, author, pages, read, cover) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover = cover;
}

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let cover = URL.createObjectURL(document.getElementById('cover').files[0]);

    let book = new Book(title, author, pages, read, cover);
    books.push(book);

    displayBooks();
});

function displayBooks() {
    let display = document.getElementById('book-display');
    display.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let card = document.createElement('div');
        card.className = 'book-card';

        let img = document.createElement('img');
        img.src = book.cover;
        img.className = 'book-cover';
        card.appendChild(img);

        let title = document.createElement('h2');
        title.textContent = book.title;
        card.appendChild(title);

        let author = document.createElement('p');
        author.textContent = 'Author: ' + book.author;
        card.appendChild(author);

        let pages = document.createElement('p');
        pages.textContent = 'Pages: ' + book.pages;
        card.appendChild(pages);

        let read = document.createElement('p');
        read.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
        card.appendChild(read);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            books.splice(i, 1);
            displayBooks();
        });
        card.appendChild(removeButton);

        display.appendChild(card);
    }
}

