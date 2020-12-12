let todo = "";
// variable to store the text from the todo field

const todoField = document.querySelector("#addItem");
// grabbing the input field from the html

const ol = document.querySelector("ol");
// grabbing the empty ol

const todoList = [];
// an array to store all of the todos as they're pushed into the array

document.querySelector('form').addEventListener("submit", function(event) {
    // grab the form and add a submit event listener to it, and pass a callback function that has an event parameter
    event.preventDefault();
    // stops the page from refreshing
    todo = todoField.value;
    // assigning the value of the todoField to the todo variable
    console.log(todo);
    // check that the todo variable has a value
    todoList.push(todo);
    // pushes the todo into the array

    generateTodoList();

})
// this button event listener adds the function of deleting a todo field when the user clicks the 'x' button

// this button event listener adds the function of putting a line through a todo field when the user clicks the 'complete button'
function generateTodoList() {
    const template = todoList.map((todo, index, index1) => `
        <li> ${todo}
            <button class="deleteButton" value="${index}">x</button>
            <button class="completeButton">complete</button>
        </li>
    `);
    // builds an array of li elements, and puts the text of each todo inside the li.
    // Included two seperate buttons to indicate if task needs has been completed or needs to be deleted. 
    // these buttons will have assigned id's to them for the event listeners that will be created.

    console.log(template);
    // log the array of li elements

    ol.innerHTML = template.join('');
     // take the template array, join it into a single string, and put it in the html of the empty ol

    const allDeleteButtons = document.querySelectorAll(".deleteButton");

    for(let i = 0; i < allDeleteButtons.length; i++) {
        allDeleteButtons[i].addEventListener("click", function(event) {
            todoList.splice(event.target.value, 1);
            generateTodoList();
        })
    }

    const allCompleteButtons = document.querySelectorAll(".completeButton");

    for(let i = 0; i < allCompleteButtons.length; i++) {
        allCompleteButtons[i].addEventListener("click", function() {
            allCompleteButtons[i].style.textDecoration = "line-through";
        })
    }
}






















// final project steps
// instead of a string being pushed into the array, you want an object
    // object properties:
        // name of the todo
        // completed (boolean)
// you'll change how the todo looks on the page if it's complete or not complete
// add two buttons next to each todo
    // one button when you click it will complete the todo or uncomplete it
    // one button will delete the todo off the page
