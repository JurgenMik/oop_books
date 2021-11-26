class UI{
    addBook(book){

        const bookTable = document.getElementById('myTable');
        const row = bookTable.insertRow(1);

        let cell1 = row.insertCell(0);
        let cell22 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = book;
        cell2.innerHTML = author;
        cell3.innerHTML = isbn;

        // X link iga rowi peale

        const link = document.createElement('a');

        link.setAttribute('href', '#');

        link.appendChild(document.createTextNode('X'))
        row.appendChild(link);

    }
}