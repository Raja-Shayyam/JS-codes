let Books=[{Title:'jahan', Aurthor :'janni'}];
console.log(`'Hi Everyone' ${Books[0].Title}`);

const Books_form = document.querySelector('#main-form');
const Books_display = document.querySelector('#display-box');

Books_form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const title = document.getElementById('text-wrapper-2').value;
  const aurthor = document.getElementById('text-wrapper-3').value;
  const book ={
    Title : title ,
    Aurthor :aurthor
  }

  Books.push(book);

  console.log(`The Books: ${Books.map(book => `${book.Title} by ${book.Aurthor}`)} \n `);
  Displaying();

});

function Displaying()
{
  const bookHtml = Books.map((book, index) => {
    return `
      <div class="book">
        <h2>${book.Title}</h2>
        <p>Author: ${book.Aurthor}</p>
        <p>Borrowed: ${book.borrowed ? 'Yes' : 'No'}</p>
        <button class="borrow-btn" data-index="${index}">Borrow</button>
        <button class="return-btn" data-index="${index}">Return</button>
        <div><nav>..........................</nav></div>
      </div>
    `;
  }).join('');
  Books_display.innerHTML = bookHtml;

}