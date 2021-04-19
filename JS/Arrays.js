let selectedColors = ['red', 'blue'];    //Declaration and initialisation of an array
console.log(selectedColors);
//to access individual elements in arrays
console.log(selectedColors[0]); //prints 1st element in array
//since this language is dynamic array size can be increased
//consider this
selectedColors[2]='black';  //size now becomes 3
//Remember array is an object in JS
let length = selectedColors.length; // .length is one of the  inbuilt property, its function is to find length of the array
console.log(length);
//Array is a datastructure used to represent the list of items.

//--------------------------------------------------------------------------------------------------------------------
//DETAILED 
const numbers=[3,4];    //const doesnt stop us from modifying array objects
numbers.push(5,6);   //Adds numbers to end
console.log(numbers);

numbers.unshift(1,2);   //Adds values to beggining of the array   
console.log(numbers);

numbers.splice(2,0,'a','b');   //(index,number of elements to be deleted, items to be added)
console.log(numbers);

//---------------------------------------------------------------------------------------------------------------------
//FINDIND ARRAY PRIMITIVES
let n=[1,2,3,4,1,3];

console.log(n.indexOf(1))   //Returns index of arg, and -1 if not found
console.log(n.indexOf(1,2)) // Search of number 1 begins from index 2

console.log(n.lastIndexOf(3))   //Returns last index of arg, and -1 if it doesnt exist
console.log(n.lastIndexOf(3,3)) //Search of num 3, begins from index 3

console.log(n.includes(2))  //Returns a boolean as true if arg is present in the list

//FINDIND REFERENCE TYPES
const courses=[
    {id: 1, name:'a'},
    {id: 2, name:'b'}
]
console.log(courses.includes({id: 1,name: 'a'}));   //this gives false, because for objects the include method cannot be used.

//For objects use the - .find() method. 
//Consider the example.
let course = courses.find(function(x){
    return x.name ==='a';
})
console.log(course);    //Returns the object found.

course = courses.find(function(x){
    return x.name==='flick_23';
})
console.log(course);    //prints undefined, since 'flick_23' is not there in the object list

//Similarly - .findIndex() - works exactly the same but it returns the index.
//Consider the following example.
course = courses.findIndex(function(x){
    return x.name==='b';
})
console.log(course);   
//-------------------------------------------------------------------------------------------------------------------------------------
//Perform the same above task in a cleaner and better way.
//We can use the arrow function syntax whenever we want to pass the function as a call back function, we can use the arrow method.
/**Syntax:
 * variable = objectname.find( (paramater list, can be empty also ) =>  {
 *  //code comes here.
 * } )
 */
//Consider the example.
course = courses.find(course =>course.name==='a'); 
console.log(course);

//---------------------------------------------------REMOVIND THE ARRAY ELEMENTS--------------------------------------------------
let x= n.pop()  //Removes the last element
console.log('REMOVING ARRAY ELEMENTS');
console.log(x);
console.log(n);

x=n.shift()     // Remove the array element from the beggining
console.log(x);
console.log(n);

x=n.splice(2,2);    //Remove element/(s) from middile of the array. .splice(index , number of elements);
console.log(x);
console.log(n);

//------------------------------------ EMPTYING AN ARRAY ----------------------------------------------------------
//1. Reassign it an empty array
console.log('Emptying the array!');
x=n;
n=[];
console.log('N: ',n);
console.log('x: ', x);

//2.) We can observe 'x' still has reference value of n, that also can be removed by using the following method.
//THIS MEHTOD is usually recommended, or even 1st one is ok, if there arent many references.
n=[1,2,3,45,6,9];
x=n;
n.length=0;
console.log(n);
console.log(x);

//3.) Use the splice method
n=[1,2,3,4,5];
x=n;
n.splice(0,n.length);
console.log(n);
console.log(x);
//4.) POP method    - not much recommended , keeping time complexity in mind, its in efficient for larger arrays, as we make use of loops
n=[1,2,3,4,5,6];
x=n;
while(n.length>0)
{
    n.pop();
}
console.log(n);
console.log(x);

//---------------------------------------Combining and Slicing arrays---------------------------------------------------------------------
x=[1,2,3,4];
n=[5,6,7,8,9];
console.log('Slicing and Combining');
let combined=x.concat(n);   //Join x and n
console.log(combined);
let slice = combined.slice(2,5);   //slices the array from 2(including) to 5(excluding)
console.log(slice);
slice = combined.slice(2);  //slices everything from 2(including) till end
console.log(slice);
slice=combined.slice(); //makes a copy of the arrayy
console.log(slice);
//-----------------------------------------------Spread Operator--------------------------------------------------------------------------------
x=[1,2,3,4];
n=[5,6,7,8,9];
console.log('Spread Operator');
//To combine all elements of x and n
combined = [...x,...n];
console.log(combined);
//We can even add elements in between the two arrays like this 
combined = [...x,90,99,...n];
console.log(combined);
//to copy all elements of an array in new array array
n=[...combined];
console.log(n);
//------------------------------------------------Joining array-----------------------------------------------------------------
console.log('Join method');
x=n.join(' - ');    //This method is used to combine the array elements into one single unit by adding the joining element as the argument  
console.log(x);