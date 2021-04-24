//used to cause delays and stuff like that
console.log("Hello!!")

setTimeout(()=>{
    console.log("There...?");
},3000);


//keeps on calling a function again and again after certain
// amount of seconds
// does not stop until end of time
const id = setInterval(()=>{
    console.log(Math.random())
},2000);
//used to stop the setinterval
//clearInterval(id);