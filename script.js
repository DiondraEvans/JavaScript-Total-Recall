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



// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let personAge = 32;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, 
//or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge >= 16){
    console.log("Here are the keys!")
} else if (personAge < 16){
    console.log("Sorry, you're too young.")
}

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for( let i = 0; i <= 10; i++){
//     console.log(i);
// }
console.log("")//for spacing
// Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }
// console.log("")//for spacing
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let i = 12; i <= 4000; i += 3){
//     console.log(i)
// }


// B. Get even
// Print out the numbers that are within the range of 1 - 100
// for(let i = 1; i <=100; i++){
//     console.log(i);
// }
// console.log("")
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for(let i = 1; i <=100; i++){
//     if (i % 2 == 0){
//     console.log(`${i} <-- is an even number`);
//     }
//     else {
//         console.log(i);
//     }
// } 


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// for(let i = 1; i <=100; i++){
//     if (i % 5 == 0){
//     console.log(`I found a ${i} High five`);
//     }
// } 
//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// for(let i = 1; i <=100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log(`I found a ${i} High five and I found a ${i} three is a crowd`)
//     }
//     else if (i % 5 == 0){
//     console.log(`I found a ${i} High five`);
//     }
//     else if(i % 3 == 0){
//     console.log(`I found a ${i} three is a crowd`);
//     }
// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// let bank_account = 0;

// for( let i = 0; i <= 10; i++){
//    bank_account += i
// }
// console.log(bank_account)
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
// let bank_account = 0;

// for( let i = 0; i <= 100; i++){
//    bank_account += i
// }
// console.log(bank_account*2)

// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called? A: An element
// Do Arrays guarantee those things will be in order? A: No
// What real-life thing could you model with an array? A: Your favorite things to do


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ["Better out than in I always say - Shrek", "May the force be with you", "Carpe diem"];


// C. Accessing elements
// Given the following array const 
// randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array? A: randomThings[0];
// Change the value of "Hello"to "World" A: 
// randomThings[2] = "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// console.log(randomThings[2])

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array? A: ourClass[2]
// Change the value of "Github" to "Octocat" A: ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array A: ourClass.push("Cloud City")


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. 
myArray.push("Aegon");
//Add another string of your choice to the end of the array.
myArray.push("blueberry");
// Remove the 5from the beginning of the array.
myArray.shift();
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
// Remove the string of your choice from the end of the array.
myArray.pop();
// Reverse this array using Array.prototype.reverse(). 
myArray.reverse()
console.log(myArray)
// Did you mutate the array? What does mutate mean? A: Mutation is basically changing the array itself instead of returning a new array with the new changes.
//Did the .reverse()method return anything? A: No, It returned a new backwards array but if I console.logged the orignal array nothing changed

// F. Biggie Smalls
// Create a variable that contains an integer.
// let intVariable = 2.1
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100
// if (intVariable < 100){
//     console.log("little number")
// } else if (intVariable >= 100){
//     console.log("big number")
// }

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// if (intVariable < 5){
//     console.log("little number")
// } else if (intVariable > 10){
//     console.log("big number")
// } else {
//     console.log("monkey")
// }

// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
//log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,"raybans");
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0])
//Access one item from Thom's accessories array.
console.log(thomsCloset[2][1])
//Log a sentence about what Thom's wearing.
// Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[2][1]}, ${thomsCloset[0][0]} and ${thomsCloset[1][1]}`)
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "footie Pajamas"
console.log(thomsCloset[1][2]);
// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreetingwith a 
// parameter namethat returns a greeting with the argument interpolated into the greeting?
const printGreetingwith = (namethat) => {
    console.log(`Hello ${namethat}`)
}
printGreetingwith("you all")

//B. printCool
//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) =>{
    console.log(`${name} you are cool`)
}
printCool("Barbra")

//. calculateCube
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
const calculateCube = (lengthOfEdge) =>{
        console.log(lengthOfEdge**3)
}
calculateCube(5);

//D. isVowel
//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
const isVowel = (x)=> {
  if(x == "a".toUpperCase() || x == "a" || x == "e".toUpperCase() || x == "e" || x == "i".toUpperCase() || x == "i" || x == "o".toUpperCase() || x == "o" || x == "u".toUpperCase() ||x == "u"){
   return true;
  } else{
    return false;
  }
}
console.log(isVowel("E"));

//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). 
//The function should return an array of numbers where each number is the length of the corresponding string.

// const getTwoLengths = (parameterOne, parameterTwo) => {

//  let lengthofOne = parameterOne.length
//  let lengthofTwo = parameterTwo.length
//   let arrOfNum = [];
//   arrOfNum.push(lengthofOne, lengthofTwo);
//   return arrOfNum;
  
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));
//F. getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. 
//The function should return an array of numbers where each number is the length of the corresponding string.
let arrOfNumLength = [];
const getMultipleLengths = (arrOfStrings) =>{
  for(i = 0; i < arrOfStrings.length; i++ ){
  arrOfNumLength.push(arrOfStrings[i].length)
  }
}
getMultipleLengths(["hello", "what", "is", "up", "dude" , "bro"]);
console.log(arrOfNumLength);
// still testing this one but I got the desire output just not the way i expected

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// console.log(arrOfStrings);

//G. maxOfThree
//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. 
//If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are 
//the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// const maxOfThree = (firstNumber, secondNumber, thirdNumber) => {
//   // if(firstNumber > secondNumber && thirdNumber){
//   //     return firstNumber
//   // }
//   // else if(secondNumber > firstNumber && thirdNumber ){
//   //     return secondNumber
//   // }
//   // else if (thirdNumber > secondNumber) && ( thirdNumber && firstNumber){
//   //     return thirdNumber
//   // }
//   // else if(firstNumber == secondNumber == thirdNumber){
//   //   return firstNumber
//   // }
// }
let arr = [];
const maxOfThree = (firstNumber, secondNumber, thirdNumber) => {
 arr.push(firstNumber, secondNumber, thirdNumber);
 let newArray = arr.sort((a, b) => (a > b ? -1 : 1));
  for (i = 0; i < arr.length; i++){
  if(arr[i] == arr[0]){
    return arr[0];
  }
}
}
// maxOfThree(6, 9, 1)
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
//Write a function printLongestWordthat accepts a single argument, an array of strings. 
//The method should return the longest word in the array. 
//In case of a tie, the method should return the word that appears first in the array.
const printLongestWordthat = (longWord) =>{
  let arrayOfLongWords = longWord.sort((a, b) => (a.length > b.length ? -1 : 1));
  console.log(arrayOfLongWords);
for(i = 0; i < arrayOfLongWords[i].length; i++){
  if(arrayOfLongWords[i] == arrayOfLongWords[0] ){
    return arrayOfLongWords[0];
  }
}
}
console.log(printLongestWordthat(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value 
//of purchasedto an empty array []. Set the other values to whatever you would like.
user = {
  name: "Audriana",
  email: "AudriL@gmail.com",
  age: 19,
  purchased: 15
}

// B. Update the user
//Our user has changed his or her email address. Without changing the original userobject, 
//update the emailvalue to a new email address.
//Our user has had a birthday! Without changing the original userobject, 
//increment the agevalue using the postfix operator. Hint: age++
user.email = "Audri@gmail.com";
console.log(user);

const ageChange = () =>{
  user.age += 1;
  return user
}


const userOneAgeUpdate = ageChange();
console.log(userOneAgeUpdate);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
//Without changing the original userobject, add a new key location
//to the object, and give it a value or some-or-other location (a string)

const insertLocation = () =>{
  user.location = "North Carolina"
  return user
}


const userOneLocationUpdate = insertLocation(userOneAgeUpdate);
console.log(userOneLocationUpdate);




// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". 
//Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". 
//Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". 
//Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.
const addingItems = () =>{
  user.purchasedarray = [];
  user.purchasedarray.push("carbohydrates")
  user.purchasedarray.push("peace of mind")
  user.purchasedarray.push("Merino jodhpurs")
  return user
}


const userOneAdding = addingItems(userOneAgeUpdate);
console.log(userOneAdding);
console.log(user.purchasedarray[2]);

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
user.friend = {
  name: 'Dakota',
  email: 'DDamingo@gmail.com',
  age: 60,
  purchased: 2,
  location: 'New York',
  purchasedarray: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
console.log(user.friend)

const addingFriendItems = () =>{
  user.friend.purchasedarray.push("The One Ring")
  user.friend.purchasedarray.push("A latte")
  return user.friend
}


const addingForFriend = addingFriendItems();
console.log(addingForFriend);
console.log(user.friend.purchasedarray[1])


//F. Loops
//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array),
// and prints each element to the console.
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(i = 0; i < user.purchasedarray.length; i++ ){
  console.log(user.purchasedarray[i])

}
console.log("");
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(i = 0; i < user.friend.purchasedarray.length; i++ ){
  console.log(user.friend.purchasedarray[i])
}

// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
console.log("")
console.log("")
const updateUser = () => {
user.age += 1;
  
user.name = user.name.toUpperCase();



}
const age1 = updateUser()
console.log(user)
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed 
// in as an argument when the function is called. Call your oldAndLoudfunction with user as the argument.
const oldAndLoudthat = (person) =>{
person.age += 1;
person.email = "HelloNewUser@gmail.com" 
person.name = user.name.toUpperCase();

}
oldAndLoudthat(user);
console.log(user);