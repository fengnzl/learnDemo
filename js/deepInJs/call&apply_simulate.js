function bar() {
  console.log(this.value)
}
var foo = {
  value: 1
}

bar.call(foo)

// 假设call方法是将foo对象改造如下，但我们不想在对象中增加bar属性，最后还需将其删除
var foo = {
  value: 2,
  bar() {
    console.log(this.value)
  }
}
foo.bar()

/**
 * 因此我们可以假设call 方法可以分为以下几步
 * 1.将函数设置成对象的属性
 * 2.执行函数
 * 3.删除对象的属性
 * 
 * 
 * 即
 * 1.foo.fn = bar
 * 2.fn()
 * 3.delete foo.fn
 */

/**
 * 第一版模拟call函数
 */
Function.prototype.call2 = function (context) {
  // 首先获取调用此方法的函数
  context.fn = this;
  context.fn();
  delete context.fn;
}

var foo = {
  value: 3
}

function bar2 () {
  console.log(this.value);
}
bar2.call2(foo);


// 模拟第二步 call函数还能给定参数执行函数

function bar3(a, b) {
  console.log(a);
  console.log(b);
  console.log(this.value);
}
var foo = {
  value: 4
};
bar3.call(foo, 'stt', 25);

/**
 * 因此我们模拟时还需考虑到参数，这里我们使用类数组对象Arguments，获取第二个到最后一个的参数  
 * 因为call 是ES3的语法，所以这里就不使用ES6的语法了
 */

Function.prototype.call3 = function(context){
  // 获取调用此方法的函数
  context.fn = this;
  // 获取传递的参数
  var args = [];
  for (var i = 1, j = arguments.length; i < j; i++) {
    args.push('arguments[' + i + ']');
  }
  // 使用eval 时args 自动调用 args.toString()方法  相当于context.fn(arguments[1],arguments[2],...)
  eval('context.fn(' + args + ')');

  // ES6语法
  // var args = Array.from(arguments).slice(1);
  // var args = [...arguments].slice(1);
  // context.fn(...args);

  delete context.fn;
}

bar3.call3(foo, 'stt', 25)

// 注意this的参数可以传null,传null的时候，this指向window Node中没有window对象
var stt = 'hello stt';
var fn2 = {
  stt: 'who',
  foo() {
    console.log(this.stt);
  }
}
fn2.foo();
fn2.foo.call(null)

// 还需注意函数可以有返回值

var obj = {
  character: 'beautiful'
}

function fn3(name, age) {
  return {
    name: name,
    age: age,
    character: this.character,
  }
}

console.log(fn3.call(obj, 'stt', 25));

/**
 *  模拟call函数第三版
 */
Function.prototype.call3 = function (context) {
  // 判断传递的是否为null，如果为null则设置为window
  context = context || window;
  // 获取调用此方法的函数
  context.fn = this;
  // 获取传递的参数
  var args = [];
  for (var i = 1, j = arguments.length; i < j; i++){
    args.push('arguments[' + i + ']');
  }
  // 调用函数
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
  
}

console.log(fn3.call3(obj, 'stt', 25));


/**
 * 模拟apply
 */

Function.prototype.apply2 = function (context, arr) {
  // Object可以将给定值创建一个对象包装器
  context = context? Object(context) : window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, j = arr.length; i < j; i++){
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }

  delete context.fn;
  return result;
}
console.log(fn3.apply2(obj, ['stt', 25]));
