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
function addBookToLibrary()
{
   
   const newBook = new Book(newTitle.value, newAuthor.value, newPages.value);
    myLibrary.push(newBook);
}




//Add a function that loops through the array and display each book on the page.
function loopArray()
{
    for (let i = 0; i < myLibrary.length; i++)
    {
        console.log("Book Nr: " + i + myLibrary[i]);
        return myLibrary;
    }
}


//* TODO Add a "new book"-Button that brings up a form allowing users to input the details for the new book and whether its been read etc.

//* TODO Add a button that remove the book from the library


// *show div Block

//Show and hide Div Block
function hideCard()
{
    let hideDiv = document.getElementById("newBaseDiv");
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
    //create new Div for the elements
    const newBaseDiv = document.createElement("div");
    const newDivItems = document.createElement("div");
    const currentDiv = document.getElementById("newBook");

    //set attributes from newDivItems
    currentDiv.style.flexDirection = "row";
    newDivItems.classList.add("card");
    newDivItems.style = "width: 18rem";
    
    //create Elements
    const newTitles = document.createTextNode(newTitle.value + " ");
    const newAuthors = document.createTextNode(newAuthor.value + " ");
    const newPage = document.createTextNode(newPages.value);

    // add elements to newBaseDiv
    newDivItems.appendChild(newTitles);
    newDivItems.appendChild(newAuthors);
    newDivItems.appendChild(newPage);
    currentDiv.appendChild(newDivItems);

    //add new Book to Array after creating book
    addBookToLibrary();

    // add the newly created element + content to the DOM
   document.body.insertBefore(newDivItems, currentDiv);
}
