// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
/**
 Create a function called map that takes two inputs:
    1.an array of numbers (a list of numbers)
    2.a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
  Have map return a new array filled with numbers that are the result 
  of using the 'callback' function on each element of the input array.
 */ 
function map(array, callback) {
  let result = [];
  for (let i = 0, len = array.length; i < length; i++){
    result.push(callback(array[i]))
  }
  // second approach because an array is essentially an object 
  // for (let element of array) {
  //   result.push(callback(element));
  // }
  return result;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
/* 
The function forEach takes an array and a callback, 
and runs the callback on each element of the array.
forEach does not return anything.
*/
function forEach(array, callback) {
  for (let i = 0, len = array.length; i < len; i++){
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); 

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
/*
  In the first part of the extension,
  you're going to rebuild map as mapWith. 
  This time you're going to use forEach inside of mapWith instead of using a for loop.
*/
function mapWith(array, callback) {
  let result = [];
  forEach(array, function (item) {
    result.push(item);
  })
  return result;
}
// console.log(mapWith([1, 2, 3], addTwo));


//Extension 2
/*
  The function reduce takes an array and reduces the elements to a single value. 
  For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
  Here's how it works. 
  The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. 
  The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
  The callback's return value becomes the new accumulator value.
  The next loop executes with this new accumulator value. 
  In the example bottom, the accumulator begins at 0. add(0,4) is called. 
  The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.
*/
function reduce(array, callback, initialValue) {
  let sum = initialValue;
  forEach(array, item => {
    sum = callback(sum, item);
  })
  return sum;
}
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8

//Extension 3
/*
  Construct a function intersection that compares input arrays and returns a new array
  with elements found in all of the inputs. BONUS: Use reduce!
*/
function intersection(arrays) {
  var arr = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);

  if (arr.length <= 1) return [];
 
  return reduce(arr.slice(1), (arr1, arr2) => {
    let result = [];
    for (let i = 0, len = arr1.length; i < len; i++){
      if (arr2.indexOf(arr1[i]) > -1) {
        result.push(arr1[i]);
      }
    }
    return result;
  }, arr[0])
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
/*
  Construct a function union that compares input arrays and returns a new array
  that contains all elements. If there are duplicate elements, only add it once to the new array.
  Preserve the order of the elements starting from the first element of the first input array.
  BONUS: Use reduce!
*/
function union(arrays) {
  if (arguments.length == 0) return [];

  const arr = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);

  if (arr.length == 1) return arr;
  return reduce(arr.slice(1), (arr1, arr2) => {
    let result = arr1;
    for (let i = 0, len = arr2.length; i < len; i++){
      if (arr1.indexOf(arr2[i]) === -1) {
        result.push(arr2[i]);
      }
    }
    return result;
  }, arr[0])
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
/*
  Construct a function objOfMatches that accepts two arrays and a callback. 
  objOfMatches will build an object and return it. 
  To build the object, objOfMatches will test each element of the first array using the 
  callback to see if the output matches the corresponding element (by index) of the second array.
  If there is a match, the element from the first array becomes a key in an object, 
  and the element from the second array becomes the corresponding value.
*/
function objOfMatches(array1, array2, callback) {
  const obj = {};
  for (let i = 0, len = array1.length; i < len; i++){
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i];
    }
  }
  return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
/*
  Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. 
  multiMap will return an object whose keys match the elements in the array of values. 
  The corresponding values that are assigned to the keys will be arrays consisting of 
  outputs from the array of callbacks, where the input to each callback is the key.
*/
function multiMap(arrVals, arrCallbacks) {
  const obj = {};
  for (let i = 0, len = arrVals.length; i < len; i++){
    const temArr = [];
    forEach(arrCallbacks, item => {
      temArr.push(item(arrVals[i]));
    })
    obj[arrVals[i]] = temArr;
  }
  return obj;
}

// console.log(multiMap(['c atfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
/*
  Construct a function objectFilter that accepts an object as the first parameter
  and a callback function as the second parameter. objectFilter will return a new object. 
  The new object will contain only the properties from the input object such that the property's 
  value is equal to the property's key passed into the callback.
*/
function objectFilter(obj, callback) {
  const result = {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === callback(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
}

// const cities = {
//   London: 'LONDON',
//   LA: 'Los Angeles',
//   Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

