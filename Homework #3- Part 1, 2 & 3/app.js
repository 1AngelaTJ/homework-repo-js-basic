console.log("Script is working!");

/*
HOMEWORK PART 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/

function checkType(value) {
  let result = typeof value;
  console.log(value + result);
}

checkType(null);
checkType(true);
checkType(12);
checkType("Zdravo, kako ste?");
checkType(Undefined);

/*
HOMEWORK PART 2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well
*/

function convertHumanToDogyears(humanYears) {
  let result = humanYears * 7;
  return result;
}

console.log(convertHumanToDogyears(5));

/*
HOMEWORK PART 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the amount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!
*/

let availableCash = 200;

function withdrawMoney(ammountToTake) {
  let ammountToTake = prompt("Please insert the needed ammount.");
  let ammountToTakeNumber = Number(ammountToTake);

  if ((availableCash) => ammountToTakeNumber) {
    let remainingCash = availableCash - ammountToTakeNumber;
    console.log(`You have ${availableCash} left on your account`);
  } else {
    console.log("You have not enough money on you account");
    let availableCash = withdrawMoney();
    return availableCash;
  }
}
