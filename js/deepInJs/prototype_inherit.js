/**
 * 深入继承的方法及优缺点
 */
/**
 * 原型继承
 * 问题：引用类型的属性被所有实例共享
 *       创建Child实例时不能像Parent传参
 */
function Parent() {
  this.name = ['stt', 'eminem'];
}
function Child() {}
Child.prototype = new Parent();