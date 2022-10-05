'use strict';

let myLibrary = [];

function Book(title, author, pages)
{
   
    //the constructor
    console.log(title, author, pages);
   
}

let newTitle = document.getElementById("nTitle");
let newAuthor = document.getElementById("nAuthor");
let newPages = document.getElementById("nPages");

//Add a function that take users input and store the new book objects into an array.
function addBookToLibrary(newTitle, newAuthor, newPages)
{
   const newBook = new Book(newTitle, newAuthor, newPages);
    myLibrary.push(newBook);


}

addBookToLibrary("Harry Potter", "Stephen King", 74);
addBookToLibrary("Herr der Ringe", "R.L Stine", 444);
console.log(myLibrary);
//console.log(myLibrary[1]);


//Add a function that loops through the array and display each book on the page.
function loopArray()
{
    for (let i = 0; i < myLibrary.length; i++)
    {
        console.log("Book Nr: " + i + myLibrary[i]);
        return myLibrary;
    }
}

loopArray();
loopArray();
//Add a "new book"-Button that brings up a form allowing users to input the details for the new book and whether its been read etc.

//Add a button that remove the book from the library


//Show and hide Div Block
function hideCard()
{
    let hideDiv = document.getElementById("newDiv");
    if (hideDiv.style.display === "none")
    {
        hideDiv.style.display = "block";
    }
    else 
    {
        hideDiv.style.display = "none";
    }
}
document.body.onload = createBook;
const addNewBook = document.getElementById("addNewBook");
addNewBook.addEventListener('click', createBook);
//Create new Div block with new book properties
function createBook()
{
    
    const newDiv = document.createElement("div");
    newDiv.setAttribute("flex-direction", "column");
    newDiv.setAttribute('background-color', 'black');
    //create Elements
    const newTitles = document.createTextNode(newTitle.value);
    const newAuthors = document.createTextNode(newAuthor.value);
    const newPage = document.createTextNode(newPages.value);

    // add elements to newDiv
    newDiv.appendChild(newTitles);
    newDiv.appendChild(newAuthors);
    newDiv.appendChild(newPage);
    // add the newly created element + content to the DOM
    const currentDiv = document.getElementById("newBook");
   document.body.insertBefore(newDiv, currentDiv);
}
