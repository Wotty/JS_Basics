let firstName = 'Will'; // String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let lastName = undefined; //Undefinded
let selectedColour = null; //Null object

let person = {
    name: 'Will',
    age: 30
}

//Dot notation
person.name = 'John';

//Bracket notation
person['name'] = 'Mary';

let selection = 'name';
person[selection] = 'David';

let selectedColours = ['red', 'blue'];
console.log(selectedColours[0]);
selectedColours[2] = 'green';

function greet(name) {
    console.log('Hello ' + name);
}

greet('John');