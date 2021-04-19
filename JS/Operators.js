/*      TYPES OF OPERATORS      */

//ARITHMETIC OPERATORS  - Performs mathematical operations
/*  Types of arithmetic operators
    * Addition (+)
    * Subtraction (-)
    * Multiplication (*)
    * Division (/)
    * Modulo (%)
    * Exponent (**)
    * Increment (++)
        >Post inc
        >Pre inc
    * Decrement (--)
        >Post dec
        >Pre dec
.*/
let x=10;
let y=5;
console.log("\nARITHMETIC");
console.log(x+y);   //Addition
console.log(x-y);   //Subtraction
console.log(x*y);   //Multiplication
console.log(x/y);   //Quotient
console.log(x%y);   //Remainder
console.log(x**y);  //x to power y
console.log(x++);   //Post inc
console.log(++x);   //Pre inc
console.log(x--);   //Post dec
console.log(--x);   //Pre dec

//ASSIGNMENT OPERATORS
/*  TYPES OF ASSIGNMENT OPERATORS
.   * Equal to(=)
    * Plus equal to (+=)
    * (-=)
    * (/=)
    * (%=)
*/

//COMPARISON OPERATORS
/*  TYPES OF COMPARISON OPERATORS
.   * Greater than ( > )
    * Greater than or equal to ( >= )
    * Less than ( < )
    * Less than or equal ( <= )
    * Strict equality ( === )
    * Not equal to ( !== )
*/
x=1
console.log("\nRELATIONAL / COMPARISON");
console.log(x>0);
console.log(x>=1);
console.log(x<0);
console.log(x<=1);
console.log(x==1);
console.log(x!==0);

//EQUALITY OPERATORS
/*  TYPES OF EQUALITY OPERATORS
    * Strict Equality ( === ) : Checks the type and value
    * Loose Equality  ( == ) : Doesnt care about the type, it converts the LHS to RHS type or vice versa and then compares he value
    * Its recommended to use Strict Equality for precision
*/
console.log("\nEQUALITY OPERATORS");
console.log(1==1);      //True
console.log(1=="1");    //True
console.log(1===1);     //True
console.log(1==="1");   //False
console.log(true == 1); //True
console.log(true === 1);//False

//TERNARY / CONDITIONAL OPERATOR
/**
 *
  Consider the example 
 */
  let points = 110
let type = points > 100 ? 'gold':'silver'
console.log("\nTERNARY");
console.log(type);

//LOGICAL OPERATORS
/**
 *  TYPES OF LOGICAL OPERATORS 
 * Logical AND (&&) : True if both operands are true
 * Logical OR (||)  : True if at least one of the operand is true
 * Logical NOT (!)  : Negates the truth value
 */

 // WITH BOOLEAN VALUES
console.log("\nLOGICAL OPERATORS")
console.log("WITH BOOLEAN VALUES");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);

//WITH NON BOOLEAN VALUES
/** TYPES OF LOGICAL OPERATORS WITH NON BOOLEAN VALUE
 * Falsy (False)
 *  > undefined 
 *  > null
 *  > 0
 *  > false
 *  > ''
 *  > NaN   (read as Not a Number)
 * 
 * Truthy (True) - Anything that is not falsy is truthy
 */
//Consider the examples
console.log("WITH NON BOOLEAN VALUES");
console.log(false||"flick_23");
console.log(false||true);
console.log(false||1);
console.log(false||1||2);//during evaluation as soon as a truthy operand is encountered by the compiler
//it returns that value. As in this case it will be 1, rest all the operands will be ignored
let userColor='red';
let defaultColor='blue';
let currentColor= userColor || defaultColor; 
console.log(currentColor);
userColor=undefined;
currentColor= userColor || defaultColor; 
console.log(currentColor);

//BITWISE OPERATORS
/**
 *  TYPES OF BITWISE OPERATORS
 * Bitwise OR (|)
 * Bitwise AND (&)
 * Bitwise XOR (^) 
 *  
 */
console.log("\nBITWISE OPERATORS")
console.log(1 | 2);     //bitwise OR
console.log(1 & 2);     //bitwise AND
console.log(1 ^ 2);     //bitwise XOR
//Example:
//Read, Write, Execute
//00000100      (4)
//00000010      (2)
//00000001      (1)
const readPermission = 4;
const writePersmission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePersmission;    //Can add permission
let message = (myPermission & readPermission) ? 'yes':'no';     //check if permission given
console.log(message);
//It was one of the use case of bitwise ops in real world.

//OPERATOR PRECEDENCE
x = 2 + 3 * 4;
console.log(x);
x = (2 + 3) * 4;
console.log(x);

//Exercise 
let a = 'red';
let b = 'blue';
let c;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);
