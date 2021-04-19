/*
.       PRIMITIVE TYPES (or Value Types):
        *String
        *Number (in JS we dont differentiate in b/w float and int, they both come under only one category i.e number)
        *Boolean
        *Undefined
        *Null
*/

let name = "flick_23"; //String Literal
let age = 18; // Number literal
let flag = true; //Boolean Literal
flag = false; // A boolean value can be true or false
let firstName = undefined; //if a variable is'nt initialised its default value will be 'undefined' or
// we can even explicitly set it as "undefined" (its a keyword).   
let setColor = null; //Null is used to clear the previous value set in a variable 


// Use 'typeof' operator to check the type of datatype of a variable
console.log(typeof(name))
name = 10
console.log(typeof(name)) //note that JS is a dynamically typed language, where datatypes of variables are decided during the runtime .

/*
      REFERENCE TYPES
      *objects
      * 
*/

let person = { //person is the object
    name: "flick_23",
    age: 18
};

console.log(person);
//Two ways to access the properties of the obj

//1.) Using Dot notation
person.name = 'Flick-23';
//2.) Bracket notation
person['name'] = 'Venki';
//Dot notation is shorter and concise, .'. it should default choice , but
//if we dont know the target property and if there's a possibility for it to change during the runtime, then using 2.).
//Example :
let userSelection = 'name';
person['userSelection'] = 'Venki'; //we dynamically chose the property