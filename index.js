// Q: Explain JavaScript Callback functions and provide a simple example ?

/* 
Answer: callback function is a type of function that is being passed as an arguement,
which will be invoked later in another function.
Example: */
function firstStep(param) {
    console.log(param);
}
function secondStep(callback) {
    const param = 5;
    callback(param);
}
secondStep(firstStep);


/* Q: Write an example definition of a JavaScript object for a person.The object should have a first name,
 Last Name, An ID number, and a function to retrieve the full name of the person. */
const person = {
    firstName: "Jake",
    lastName: "Robert",
    idNumber: 1,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

/* Q: Write some example JavaScript code that creates a new HTML p element with some text and appends it to 
the document body.Use jQuery syntax if needed. */

const paragraph = document.createElement("p");
paragraph.textContent = "example p tag";
document.body.appendChild(paragraph);


//Q: Fix the bug for below syntax.

function average(a, b) {
    return (a + b) / 2;
}
console.log(average(2, 1));