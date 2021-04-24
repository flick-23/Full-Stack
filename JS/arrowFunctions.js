//Arrow functions dont support internet explorer
//short hand functions 
// more like function expression
//example

/*traditional function 
function add(x,y){
    return x+y;
}
add(10,20)
*/
const add = (x,y)=>{
    console.log("X : ",x)
    console.log("Y : ",y)
    return x+y;
}

var square = (a)=>{
    console.log("A : ",a)
    return a*a;
}

//arrow functions with implicit returns- Use round brackets 
// short one-liner expressions ONLY that returns a value directly without having to use the 'return' keyword!
const rollDie = ()=> (
   Math.floor(Math.random()*6)+1
);

const subtract = (x,y) => (a-b)

console.log(add(10,30))
console.log(square(10))
console.log(rollDie())
