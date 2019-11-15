// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/
/*
Create a function that accepts two inputs (name and age) and returns an object. 
Let's call this function makePerson. This function will:
1.create an empty object
2.add a name property to the newly created object with its value being the 'name' argument passed into the function
3.add an age property to the newly created object with its value being the 'age' argument passed into the function
4.return the object
 */
function makePerson(name, age) {
  // third approach
  const obj = {};
  obj.name = name;
  obj.age = age;
  return obj;


	// add code here
  // return {
  //   name: name,
  //   age: age
  // }
}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
/**
 * Inside personStore object, create a property greet where the value is a function that logs "hello".
 */
const personStore = {
  // add code here
  greet: ()=>console.log('hello'),
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
/**
 * Create a function personFromPersonStore that takes as input a name and an age. 
 * When called, the function will create person objects using the Object.create method on the personStore object.
 */

function personFromPersonStore(name, age) {
	// add code here
  /**
   * the function Object.create() always return a new object, when pass the parameter in that function, 
   * it will let the property __proto__ of the new project assigned the value of the parameter reference
   * thus when we pass the null as prameter,it will create a clean object without __proto__ property.
   */
  const obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;
  return obj;

}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
/*
Without editing the code you've already written, 
add an introduce method to the personStore object that logs "Hi, my name is [name]".
*/
// add code here

personStore.introduce = function intro(){
  console.log(`Hi, my name is ${this.name}`);
};
// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
/**
 * Create a function PersonConstructor that uses the this keyword to save a single 
 * property onto its scope called greet. greet should be a function that logs the string 'hello'.
 */

function PersonConstructor() {
	// add code here
  this.greet = () => console.log('hello');

}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
/**
 * Create a function personFromConstructor that takes as input a name and an age. 
 * When called, the function will create person objects using the new keyword instead of the Object.create method.
 */
function personFromConstructor(name, age) {
	// add code here
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;

}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
/**
 * Without editing the code you've already written, 
 * add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
 */
// add code here
PersonConstructor.prototype.introduce = function intro() {
  console.log(`Hi, my name is ${this.name}`);
}

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor() {
    // add code here


	}

	// add code here

}


// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here


// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

// const adminFunctionStore /* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
}

/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"


/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

let robotFido = new Dog();

// robotFido = /* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"

