//const book1 = new Book('Tode', 'Tamm', '123456' );
//const book2 = new Book('Naksitrallid', 'Maret', '123457' );

//console.log(book1);

// object puhul kasutame for loopi

//for (let key in book){
// console.log(key + " " + book[key])
//}

// project objects

const ui = new UI()
const book = new Book()

// event elements
const form = document.querySelector('form');

//events
form.addEventListener('submit', addBook);

function addBook(event) {

    // vormi input

    //const book = bookTitle.value;
    //const author = bookAuthor.value;
    //const isbn = bookIsbn.value;

    // create <row> element ja sisesta vormi input.value row sisse as <td>

    // create book, raamatu objekt | const book = new Book(title,author,isbn)
    // for(let key in book) {} .createTextNode(book[key])

    const book = new Book(title,author,isbn)
    ui.addBook(book);


    // Save input Book data to LocalStorage

    addBookToLocalStorage(book,author,isbn);


    event.preventDefault();

}