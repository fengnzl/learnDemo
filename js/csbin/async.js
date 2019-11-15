/* CHALLENGE 1 */
/*
  Thinking point (no writing code necessary for this challenge): 
  Inspect the code given to you in Challenge 1. 
  In what order should the console logs come out? Howdy first or Partnah first?
*/

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */
// Create a function delayedGreet that console logs welcome after 3 seconds.

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(sayWelcome, 3000);

  // another approach
  // setTimeout(() => console.log('welcome'), 3000);
}
function sayWelcome() {
  console.log('welcome')
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */
// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.

function helloGoodbye() {
  // ADD CODE HERE
  console.log('hello');
  setTimeout(sayGoodbye, 2000);

  // another approach
  // setTimeout(() => console.log('good bye'), 2000);
}
function sayGoodbye() {
  console.log('good bye');
}

// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */
/*
Create a function brokenRecord that console logs hi again every second.
Use the End Code button to stop the console logs when you are satisfied that it is working.
*/
function brokenRecord() {
  // ADD CODE HERE
  // setInterval(sayHiAgain, 1000);

  // another approach
  // setInterval(()=>console.log('hi again'), 1000)
}
function sayHiAgain() {
  console.log('hi again');
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */
/*
Create a function limitedRepeat that console logs hi for now every second,
but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
*/

function limitedRepeat() {
  // ADD CODE HERE
  const intervalID = setInterval(sayHiNow, 1000);
  setTimeout(clearFun, 5000, intervalID);

  // another approach
  // const intervalId = setInterval(() => console.log('hi for now'), 1000);
  // setTimeout(intervalId => clearInterval(intervalId), 5000, intervalId);

  // third approach
  // let counter = 0;
  // const intervalId = setInterval(() => {
  //   console.log('hi for now');
  //   counter++;
  //   if (counter > 4) {
  //     clearInterval(intervalId);
  //   }
  // },1000)
}
function sayHiNow() {
  console.log('hi for now');
}
function clearFun(intervalID) {
  clearInterval(intervalID);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */
/*
Write a function called everyXsecsForYsecs that will accept three arguments: 
a function func, a number interval, and another number duration. everyXsecsForYsecs 
will execute the given function every interval number of milliseconds, 
but then automatically stop after duration milliseconds. 
Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 
interval time an 5000 duration time. What do you expect to happen?
*/
function everyXsecsForYsecs() {
  // ADD CODE HERE
  const func = arguments[0];
  const time = arguments[1];
  const total = arguments[2];
  const interval = setInterval(func, time);
  setTimeout(intervalID => {
    clearInterval(intervalID)
  }, total, interval);
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */
/*
Write a function delayCounter that accepts a number (called 'target') 
as the first argument and a number of milliseconds (called 'wait') as the second argument, 
and returns a function. When the returned function is invoked, it should log to the console 
all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/
function delayCounter(target, wait) {
  return () => {
    for (let i = 1; i <= target; i++){
      setTimeout(() => console.log(i), i * wait);
    }
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

