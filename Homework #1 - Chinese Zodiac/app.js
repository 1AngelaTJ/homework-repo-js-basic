console.log("Script is working!");

/*
Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in 
*/

let userInput = "Which year were you born?";

let numberValue = Number(userInput);

let isNumberInvalid = Number.isNaN(numberValue);

let calculationOfChineseZodiac = (numberValue - 4) % 12;

if (userInput === null) {
  console.log("Thanks for visiting our website");
} else if (isNumberInvalid) {
  console.log("Invalid input, please restart the program");
} else if ((calculationOfChineseZodiac = 0)) {
  console.log("Your Chinese Zodiac Sign is Rat");
} else if ((calculationOfChineseZodiac = 1)) {
  console.log("Your Chinese Zodiac Sign is Ox");
} else if ((calculationOfChineseZodiac = 2)) {
  console.log("Your Chinese Zodiac Sign is Tiger");
} else if ((calculationOfChineseZodiac = 3)) {
  console.log("Your Chinese Zodiac Sign is Rabbit");
} else if ((calculationOfChineseZodiac = 4)) {
  console.log("Your Chinese Zodiac Sign is Dragon");
} else if ((calculationOfChineseZodiac = 5)) {
  console.log("Your Chinese Zodiac Sign is Snake");
} else if ((calculationOfChineseZodiac = 6)) {
  console.log("Your Chinese Zodiac Sign is Horse");
} else if ((calculationOfChineseZodiac = 7)) {
  console.log("Your Chinese Zodiac Sign is Goat");
} else if ((calculationOfChineseZodiac = 8)) {
  console.log("Your Chinese Zodiac Sign is Monkey");
} else if ((calculationOfChineseZodiac = 9)) {
  console.log("Your Chinese Zodiac Sign is Rooster");
} else if ((calculationOfChineseZodiac = 10)) {
  console.log("Your Chinese Zodiac Sign is Dog");
} else if ((calculationOfChineseZodiac = 11)) {
  console.log("Your Chinese Zodiac Sign is Pig");
} else {
  console.log("Try entering your birth year again.");
}

// Trying the same with switch statement

let zodiac = 12; // Ne mi e bash jasno kakvi varijabli treba da napravam tuka.

switch (zodiac) {
  case 0:
    console.log("Your Chinese Zodiac Sign is Rat");
    break;
  case 1:
    console.log("Your Chinese Zodiac Sign is Ox");
    break;
  case 2:
    console.log("Your Chinese Zodiac Sign is Tiger");
    break;
  case 3:
    console.log("Your Chinese Zodiac Sign is Rabbit");
    break;
  case 4:
    console.log("Your Chinese Zodiac Sign is Dragon");
    break;
  case 5:
    console.log("Your Chinese Zodiac Sign is Snake");
    break;
  case 6:
    console.log("Your Chinese Zodiac Sign is Horse");
    break;
  case 7:
    console.log("Your Chinese Zodiac Sign is Goat");
    break;
  case 8:
    console.log("Your Chinese Zodiac Sign is Monkey");
    break;
  case 9:
    console.log("Your Chinese Zodiac Sign is Rooster");
    break;
  case 10:
    console.log("Your Chinese Zodiac Sign is Dog");
    break;
  case 11:
    console.log("Your Chinese Zodiac Sign is Pig");
    break;
  default:
    console.log("Try again.");
}
