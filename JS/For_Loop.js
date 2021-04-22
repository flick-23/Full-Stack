//Use loops to repeat certain action a certain number of types
//consider the exaple
/**
 * Syntax :
 * for(initialisation ; condition ; expression)
 * {
 *      Statements to be iterated
 * }
 */
console.log("Printing 1st 5 WHOLE NUMBERS!");
for(let i=0;i<5;i++)
{
    console.log(i);
}

//forEach loops example
const numbers = [12,35,65,,123,56,123,451,142,90]

numbers.forEach(function(x){
    console.log(x);
});


//for of 
for(let x of numbers){
    console.log(x);
}

//for in 
for(let x in numbers){
    console.log(x);
}