//How do we assign a value to a variable? A. assign a variable by first intializing it with let then using an equal assignment operator to set it equal to another variable.
// How do we change the value of a variable? A. write the variable and set it equal to a new value using the equal assignment operator
// How do we assign an existing variable to a new variable? A. After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.
// Remind me, what are declare, assign, and define? A. Declare is to initialize a variable with var, let or const. assign is to use an assignment operator to give a variable value. define is giving a value to a variable or function.
// What is pseudocoding and why should you do it? A: pseudocoding is the act of breaking down steps you need to take to make your code run effectively. You should use it so it is easier to understand instructions so that you can then translate it into code.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A: 60% is used thinking about how to solve the problem. 40% is used to actually code.


// B. Strings
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 7;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "any string";
// What is the value of firstVariable?
console.log(firstVariable);
// Create a variable called yourNameand set it equal to your name as a string. 
let yourName = "Diondra E."
// Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
console.log(`Hello, my name is ${yourName}`);

// C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !=='48');

  
// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if (animal == "cow"){
console.log("moooo");
}
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
const findingAnimal = (Animalname) =>{
    if (Animalname == "cow"){
        console.log("moooo");
        } 
        else {
        console.log("Hey! You're not a cow.");
        }
}
findingAnimal("duck");
//Commit