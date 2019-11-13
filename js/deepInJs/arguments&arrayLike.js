/**
 * 类数组对象是拥有length属性和若干属性的对象
 * Arguments对象就是一个类数组对象
 */
var arr = ['jack', 'male'];
var arrLike = {
  0: 'Brian',
  1: 'female',
  length: 2
}
// for循环
for (var i = 0, len = arr.length; i < len; i++){
  console.log(arr[i])
}
for (var i = 0, len = arrLike.length; i < len; i++){
  console.log(arrLike[i])
}
// 但是类数组对象无法使用数组的方法
// arrLike.push(34) // arrLike.push is not a function

// 类数组对象转换为数组的方法
// 1.slice
Array.prototype.slice.call(arrLike);
// 2.splice
Array.prototype.splice.call(arrLike, 0);
// 3.ES6 Array.from
Array.from(arrLike);
// 4.apply 
Array.prototype.concat.apply([], arrLike);

/**
 * Arguments对象只定义在函数体内，包含了函数的参数和其他属性，在函数体中，arguments代指该函数的Arguments对象
 */
function foo(name, age) {
  console.log(arguments);
}
foo('st', 34);

/**
 * length表示实参的长度
 */
function bar(name, age) {
  console.log(`实参的长度${arguments.length}`);
}
console.log('形参的长度' + bar.length); 
bar('eminem');
//=>形参的长度2
// =>实参的长度1

/**
 * callee 属性，Arguments的callee属性，可以通过此属性调用函数本身
 */
var data = [];
for (var i = 0; i < 3; i++){
  (data[i] = function () {
    console.log(arguments.callee.i);
  }).i = i;
}
data[0](); // 0
data[1]();// 1
data[2](); // 2

/**
 * argements和对应的参数绑定
 * 当有参数传入时，实参和arguments的值共享，没有参数传递时，不共享
 * 在严格模式下均不共享
 */
function fun(name, age, gender, character) {
  // 'use strict'
  console.log(name, arguments[0]); // name name
  // 改变实参的值
  name = 'new name';
  console.log(name, arguments[0]); // new name new name

  // 改变arguments的值
  arguments[1] = 'new age';
  console.log(age, arguments[1]); // new age new age

  // 未传入的是否会绑定
  console.log(gender); // undefined

  gender = 'new gender';
  console.log(gender, arguments[2]); // new gender undefined

  arguments[3] = 'new character';
  console.log(character, arguments[3]); // undefined 'new character'

}

fun('name', 'age')

/**
 * 传参，将函数的参数传递到另外一个函数
 */
function fun2() {
  fun3.apply(this, arguments);
}
function fun3(a, b, c) {
  console.log(a, b, c);
}
fun2(1, 2, 3); // => 1, 2, 3

/**
 * 在ES6中可以使用...操作符让其形成数组
 * 这里使用模拟的类数组的对象无法实现， 因为没有Symbol(Symbol.iterator)这个属性
 */
function fun3() {
  console.log([...arguments])
}
fun3('dance monkey', 'austraila');