/*
Exercise 1:
**Follow the below steps to complete this exercise:**
1. move the css from outside the shopping-list.html file into a separate css stylesheet called : shopping-list.css
2. Create three variables that hold references to the following elements <ul> <input> <button> elements.
3. Create a function that will run in response to the button being clicked.
4. Inside the function body, start off by storing the current value of the input element in a variable.
5. Next, empty the input element by setting its value to an empty string — ''.
6. Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
7. Append the span and the button as children of the list item.
8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
9. Append the list item as a child of the list.
10. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
11. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
*/
let _ul = document.querySelector("ul");
let _input = document.querySelector("input");
let _button = document.querySelector("button");
function store(target) {
    let shopItem = _input.value;
    _input.value = "";

}
