// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

/*
Challenge 1
  Create a function createFunction that creates and returns a function. 
  When that created function is called, it should print "hello".
 */
function createFunction() {
  return function () {
    console.log('hello')
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();


/*
Challenge 2
  Create a function createFunctionPrinter that accepts one input and returns a function. 
  When that created function is called, it should print out the input that was used when the function was created.
 */
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();


/*
Challenge 3
  Examine the code for the outer function. Notice that we are returning a function 
  and that function is using variables that are outside of its scope.
  Uncomment those lines of code. Try to deduce the output before executing.
*/
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


/*
Challenge 4
Now we are going to create a function addByX that returns a function that will add an input by x.
 */
function addByX(x) {
  return function (y) {
    return x + y;
  }
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1));

// now call addByTwo with an input of 2
// console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

/*
Extension: Challenge 5
  Write a function once that accepts a callback as input and returns a function.
  When the returned function is called the first time, 
  it should call the callback and return that output. If it is called any additional times,
  instead of calling the callback again it will simply return the output value from the first time it was called.
 */
function once(func) {
  let counter = 0;
  let result;
  return function (input) {
    counter++;
    if (counter === 1) {
      return result = func(input);
    } else {
      func(input);
      return result;
    }
  }
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

/*
Extension: Challenge 6
  Write a function after that takes the number of times the callback needs to be
  called before being executed as the first parameter and the callback as the second parameter
 */
function after(count, func) {
  let num = 0;
  return function () {
    num++;
    if (num === count) {
      func();
    }
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

  // afterCalled(); // -> nothing is printed
  // afterCalled(); // -> nothing is printed
  // afterCalled(); // -> 'hello' is printed


/*
Extension: Challenge 7
  Write a function delay that accepts a callback as the first parameter and 
  the wait in milliseconds before allowing the callback to be invoked as the second parameter. 
  Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/
function delay(func, wait) {
  setTimeout(func, wait);
}

/*
Extension: Challenge 8
  Write a function rollCall that accepts an array of names and returns a function. 
  The first time the returned function is invoked, it should log the first name to the console. 
  The second time it is invoked, it should log the second name to the console, and so on, 
  until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
 */
function rollCall(names) {
  const arr = names;
  let len = names.length;
  let count = 0;
  return function () {
    if (count < len) {
      console.log(arr.shift());
    } else {
      console.log('Everyone accounted for');
    }
    count++;
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // -> Should log 'Victoria'
// rollCaller() // -> Should log 'Juan'
// rollCaller() // -> Should log 'Ruth'
// rollCaller() // -> Should log 'Everyone accounted for'

