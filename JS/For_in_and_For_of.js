//Used to iterate over properties or Ojects

//FOR-IN  LOOPS - iterate over properties of an obj
//consider the example
console.log("FOR IN!");
const person={
    name: 'flick_23',
    age: 18
};

for(let key in person)
{
    console.log(key);
    console.log(person[key]);
}

// To access
//1.) Dot operation - person.name
//2.) Bracket notation - person['age']

//Another example. - For arrays
let colors=['red','green','blue'];
let i;
for(i in colors)
{
    console.log(i,colors[i]);
}

//FOR-OF - iterate over elements and items in an array
console.log('FOR OF!!');
//consider the example
for(let color of colors)
{
    console.log(color);
}