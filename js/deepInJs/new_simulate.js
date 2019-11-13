/**
 * new 运算符创建一个用户定义的对象类型的实例或者具有构造函数的内置对象类型之一
 */
// new可以实现的功能

function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'play games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
  console.log('My name is '+ this.name);
}

var person = new Otaku('eminem', 40);
console.log(person.name); // eminem
console.log(person.habit); // play games
console.log(person.strength); // 60
person.sayYourName(); // My name is eminem

/**
 * 实例person可以：
 * 1.访问到Otaku构造函数里面的属性
 * 2.访问到Otaku.prototype中的属性
 */

// 由于New 是关键字，无法直接进行覆盖，因此我们用函数来模拟new的效果
// function Otaku() {
//   // TODO
// }
// 使用new
// var person = new Otaku()
// 使用模拟函数
// var person = objectFactory(Otaku, ...);
// 由于new的结果是一个新对象，因此我们也要建立一个新对象

// 第一版代码
function objectFactory() {
  var obj = new Object();
  // 获得构造函数
  Constructor = [].shift.call(arguments);
  // 将对象的__proto__属性指向构造函数的prototype，从而可以访问构造函数原型的属性
  obj.__proto__ = Constructor.prototype;
  // 改变构造函数this的指向到新建的对象，这样obj就可以访问到构造函数的属性
  Constructor.apply(obj, arguments);

  return obj;
}

var person = objectFactory(Otaku,'eminem', 40);
console.log(person.name); // eminem
console.log(person.habit); // play games
console.log(person.strength); // 60
person.sayYourName(); // My name is eminem

/**
 * 返回值效果实现
 * 返回的是一个对象的，则实例中只能访问返回对象中的属性
 * 返回的是一个基本类型值，则相当于没有返回值的处理
 */
function Foo(name, age) {
  this.strength = 60;
  this.age = age;

  return {
    name: name,
    habit: 'games'
  }
}
var person = new Foo('lala', 25);
console.log(person.name); // lala
console.log(person.habit); // game
console.log(person.strength); // undefined
console.log(person.age); // undefined

function Bar(name, age) {
  this.strength = 60;
  this.age = age;
  return 'a boy';
}
var person = new Bar('abc', 30);
console.log(person.name); // undefined
console.log(person.habit); // undefined
console.log(person.strength); // 60
console.log(person.age); // 30

// 第二版模拟代码
function objectFactory() {
  var obj = new Object();
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}