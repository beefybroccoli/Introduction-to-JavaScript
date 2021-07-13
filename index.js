/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
console.log('Task 1a');
const votingAge = 19;
if (votingAge >= 18) {
  console.log('true');
}



/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
console.log('');
console.log('Task 1b');
let var1 = 5;
let var2 = 10;
if (var2 < 10) {
  var1 = var1 - 2;
}
console.log('var1 value = `${var1}`');




/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
console.log('');
console.log('Task 1c');
let string_year = '1999';
let num_year = Number(string_year);
console.log('num_year value = ' + num_year);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

console.log('');
console.log('Task 1d - Multiply');

function multiply(a,b){
  return a*b;
}
console.log("5 * 2 = " + multiply(5,2));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

console.log('');
console.log('Task 2 - Age in Dog Years');

function dogYears(age){
  return age * 7;
}
console.log("2 dog = " + dogYears(2) + " human years");


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE:   If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

console.log('');
console.log('Task 3 - Dog feeder');

function hungryDog(weight, age){
  let result = -1;
  const ZERO = 0;
  const ONE = 1;
  const FIVE = 5;
  const SIX = 6;
  const TEN = 10;
  const ELEVEN = 11;
  const FIFTEEN = 15;
  const ZERO_MONTHS = 0;
  const TWO_MONTHS = 2/12;
  const FOUR_MONTHS = 4/12;
  const SEVEN_MONTHS = 0.583; //7 months is define as three decimal number
  const TWELVE_MONTHS = 1;
  const ONE_PERCENT = 0.01;
  const TWO_PERCENT = 0.02;
  const THREE_PERCENT = 0.03;
  const FOUR_PERCENT = 0.04;
  const FIVE_PERCENT = 0.05;
  const TEN_PERCENT = 0.10;

  //Puppies less than 1 year
  if (age > ZERO && age < ONE) {

    // less than 2 months, then no food
    // 0 months to less than 2 months
    if (age >= ZERO_MONTHS && age < TWO_MONTHS) {
      return ZERO;
    }

    // 2 - 4 months 10% of their body weight
    // 2 months to less than 4 months
    if (age >= TWO_MONTHS && age < FOUR_MONTHS) {
      return weight*TEN_PERCENT;
    }

    // 4 - 7 months 5% of their body weight 
    // 4 months to less than 7 months
    if (age >= FOUR_MONTHS && age < SEVEN_MONTHS ) {
      return weight * FIVE_PERCENT;
    }

    // 7 - 12 months 4% of their body weight
    // 7 months to less than 12 months
    if(age >= SEVEN_MONTHS && age < TWELVE_MONTHS){
      return weight * FOUR_PERCENT;
    }

  }//end outter if
  
  //Adult Dogs 1 year and older 
  else if (age >= ONE) {

    // up to 5 lbs - 5% of their body weight
    // greater than 0 lbs to less than or equal  to 5 lbs
    if (weight > ZERO && weight <= FIVE) {
      return weight * FIVE_PERCENT;
    }

    // 6 - 10 lbs - 4% of their body weight 
    // greater than 6 lbs to less than or equal to 10 lbs
    if (weight > SIX && weight <= TEN) {
      return weight * FOUR_PERCENT;
    }
    
    // 11 - 15 lbs - 3% of their body weight 
    // greater than 11 lbs to less than or equal to 15 lbs
    if (weight > ELEVEN && weight <= FIFTEEN){
      return weight * THREE_PERCENT;
    }
    
    // > 15lbs - 2% of their body weight 
    // greater than 15 lbs
    if ( weight > FIFTEEN){
      return weight * TWO_PERCENT;
    }

  }//end outter else if
  else{

    //return -1 if error occured
    return -1;
  }
}//end hungryDog function

console.log("weight = 10, age = -0.5, hungryDog return " + hungryDog(10,-0.5) );
console.log("weight = 10, age = 0.1, hungryDog return " + hungryDog(10,0.1) );
console.log("weight = 10, age = 0.3, hungryDog return " + hungryDog(10,0.3) );
console.log("weight = 10, age = 0.6, hungryDog return " + hungryDog(10,0.6) );
console.log("weight = 10, age = 0.11, hungryDog return " + hungryDog(10,0.11) );
console.log("weight = 4, age = 2, hungryDog return " + hungryDog(4,2) );
console.log("weight = 7, age = 2, hungryDog return " + hungryDog(7,2) );
console.log("weight = 12, age = 2, hungryDog return " + hungryDog(12,2) );
console.log("weight = 16, age = 2, hungryDog return " + hungryDog(16,2) );
console.log("weight = 4, age = 0.583, hungryDog return " + hungryDog(4,0.583) ); //return 0.16

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

console.log('');
console.log('Task 4 - Rock, Paper, Scissors');

function game(user, computer){

  const ROCK = "rock";
  const PAPER = "paper";
  const SCISSORS = "scissors";
  const TIE = "it's a tie";
  const USER_WIN = "you win!";
  const USER_LOSE = "you lose!";

  //tie
  if(user === computer) {
    return TIE;
  }
  
  if(user === ROCK && computer === PAPER)
  {
    return USER_LOSE;
  }

  if(user === ROCK && computer === SCISSORS)
  {
    return USER_WIN;
  }

  if(user === PAPER && computer === ROCK)
  {
    return USER_WIN;
  }

  if(user === PAPER && computer === SCISSORS)
  {
    return USER_LOSE;
  }

  if(user === SCISSORS && computer === ROCK)
  {
    return USER_LOSE;
  }
  
  if(user === SCISSORS && computer === PAPER)
  {
    return USER_WIN;
  }

}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

console.log('');
console.log('Task 5a - KM to Miles');

function miles(kilometers){
  const ratio = 0.621371;
  return kilometers*ratio;
}



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(cm){
  const ratio = 30.48;
  return cm/ratio;
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(number){

      return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number - 1} bottles of soda on the wall`;
      
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

console.log('');
console.log('Task 6 - Grade Calculator');

function grade(score){
  // 90-100 should return 'you got an A' 
  if( score >= 90 && score <= 100) {
    return "you got an A";
  }

  // 80-89 should return 'you got a B'
  if( score >= 80  && score <=89 ) {
    return "you got a B";
  }

  // 70-79 should return 'you got a C'
  if( score >=70  && score <=79 ) {
    return "you got a C";
  }

  // 60-69 should return 'you got a D'
  if( score >= 60 && score <= 69 ) {
    return "you got a D";
  }

  // below should return 'you got an F'
  if( score >=0  && score <=59 ) {
    return "you got an F";
  }
}



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
  /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
