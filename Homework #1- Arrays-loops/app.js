console.log("Script is working!");

/*

HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments.

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert

*/

function tellStory(name, mood, activity) {
  let result = `This is ${name}. ${name} is a nice person. Today she is ${mood}. She is ${activity} all day.`;
  console.log(result);
  return result;
}

tellStory("Ike", "very happy", "singing");
