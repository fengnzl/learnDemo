/**
 * bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
 */
// 返回函数模拟实现

// 返回函数的例子
var obj = {
  value: 1
}
function foo() {
  console.log(this.value)
}
// 返回函数
var fooBind = foo.bind(obj)
fooBind()

// 关于this的指向我们可以用call或者apply来实现,考虑到绑定函数有返回值，因此使用apply
Function.prototype.bind1 = function (context) {
  // 获取调用的函数
  var self = this;
  return function () {
    return self.apply(context);
  }
}

// 可以传递参数

// bind的时候可以传参，同时bind返回的参数同样可以传参

// 传参的例子
var obj2 = {
  character: 'charming'
};
function foo2(a, b) {
  console.log(a);
  console.log(b);
  console.log(this.character);
}
var foo2Bind = foo2.bind(obj2, 'stt');
foo2Bind(25);

// 模拟bind传参
Function.prototype.bind2 = function (context) {
  var self = this;
  // 获取调用bind2时传递的参数
  var args = [].slice.call(arguments, 1);
  // 返回参数
  return function () {
    // 获取调用bind返回函数时传递的参数
    var bindArgs = [].slice.call(arguments);
    return self.apply(context, args.concat(bindArgs))
  }
}
var foo2Bind2 = foo2.bind2(obj2, 'stt');
foo2Bind2(25);

// 构造函数效果的模拟实现


/**
 * bind返回的函数作为构造函数的时候，bind时指定的this值会失效，但传入的参数依然有效
 */

var value = 2;
var obj3 = {
  value: 3
};
function bar(a, b) {
  this.habit = 'games';
  console.log(a);
  console.log(b);
  console.log(this.value);
}

bar.prototype.friend = 'lala';
var barBind = bar.bind(obj3, 'stt');
var obj = new barBind('18');// => stt 18 undefined
console.log(obj.habit, obj.friend);// games lala

// 模拟bind第三版
Function.prototype.bind3 = function (context) {
  var self = this;
  var args = [].slice.call(arguments, 1);

  var fBound = function () {
    var bindArgs = [].slice.call(arguments);
    // 当作为构造函数时，this指向实例，此时结果为true,将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的demo为例，如果改成`this instanceof fBound? null : context`，实例只是一个空对象，将null改成this,将会具有habit属性
    // 当做普通函数时，this指向window,此时结果为false，将绑定的函数this指向context
    return self.apply( this instanceof fBound? this : context, args.concat(bindArgs));
  }
  // 将返回函数的prototype为绑定函数的prototype,实例就可以继承绑定函数的原型中的值
  fBound.prototype = self.prototype;
  return fBound;
}

/**
 * 构造函数效果的优化，当直接fBound.prototype = this.prototype时，
 * 如果修改fBound.prototype的时候，也会直接修改绑定函数的prototype。这时候可以通过一个空函数进行中转
 */

Function.prototype.bind4 = function (context) {
  var self = this;
  var args = [].slice.call(arguments, 1);
  var fNOP = function () { };

  var fBound = function () {
    var bindArgs = [].slice.call();
    return (this instanceof fBound ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = self.prototype;
  fBound.prototype = new fNOP();
  return fBound;

}
 
// 进行bind绑定变量检测及兼容
Function.prototype.bind = Function.prototype.bind || function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not a function');
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () { };
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call();
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = self.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

/**
 * 注： 其中使用中转进行prototype绑定时可以使用以下方法
 */
NOP.prototype = this.prototype;
fBound.prototype = new fNOP();
  // =>
fBound.prototype = Object.create(this.prototype);
//Object.create()的模拟实现
Object.create = function (o) {
  function f() { };
  f.prototype = o;
  return new f();
}

