var trendRate = -0;
trendRate === -0 // true

trendRate.toString(); // '0' OOPS!
trendRate === 0; // true  OOPS!
trendRate > 0; // false
trendRate < 0; // false

// Object.is() 判断两个值是否相同。其判断逻辑与`==`和`===`都不相同
Object.is(trendRate, -0);  // true
Object.is(trendRate, 0); // fasle

// Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零。
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign(-0); // -0 WTF
Math.sign(0); // 0 WTF

// 'fix' Math.sign()
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}
sign(3); // 1
sign(-3); // -1
sign(0); // 1
sign(-0); // -1 