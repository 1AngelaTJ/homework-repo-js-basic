console.log("Script is working");

/*
Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
*/

function calculateAge(birthYear, currentYear) {
  let result = currentYear - birthYear;
  let output = `You are ${result} years old.`;
  console.log(output);
}

calculateAge(1995, 2023);
calculateAge(1983, 2023);
calculateAge(1966, 2023);
