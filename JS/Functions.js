//FUNCTION WITH NO PARAMETER NO RETURN TYPE
function greet()    //declaration of a function having name 'greet'
{
    console.log('Hey! Good morning');
} 
//funciton call
greet();    

//FUNCTION WITH PARAMETER , NO RETURN TYPE
function helloName(name,lastName)    //declaration with parameter
{   
    console.log('Hey '+name+' '+lastName);
}
//function call 
helloName('flick','_23');

//A parameter is the one present in function prototype
//Argument is actual value supplied to function

//FUNCTION WITH RETURN TYPE AND PARAMETERS
function square(number)
{
    return number*number;
}
let number=square(5);
console.log(number);

//Function is a set of statements that either performs a task, or calculates and returns a value.