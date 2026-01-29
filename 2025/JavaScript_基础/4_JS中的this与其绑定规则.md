# JS中的this
## this在全局作用域的指向
> 在浏览器环境下：window(GlobalObject)
> 在Node环境下：{}
>   - 在node环境下，每一个文件都被当做一个模块(Module)，加载->编译->放在一个函数中->执行函数.apply({})
> ![](../../assets/images/4_JS中的this与其绑定规则_2026-01-29-13-25-42.png)

## 
```js
functiopn foo(){
    console.log(this)
}

var obj ={
    name:"ax",
    foo:foo,
}
obj.foo()

foo.apply("ac");
```
- this通常在函数中使用
  - 每一个函数在执行时会创建一个执行上下文，this是该上下文中的一条记录
- this是动态绑定的，与函数所处位置无关，与**函数调用方式**有关，在运行时绑定

## this的绑定规则
- 默认绑定
- 隐式绑定
- 显式绑定
- new绑定
### 默认绑定
> 独立函数调用是默认绑定
- 默认绑定的绑定对象是window
### 隐式绑定
> 隐式绑定是指通过**某个对象调用时**的绑定规则
### 显式绑定
> 与直接调用的区别就是this绑定的不同  
> 可以实现在不添加对象属性的前提下为函数绑定this 

> apply&call的区别：传递参数的形式不同  
>   call()传参是通过剩余参数的形式传递的  
>   apply()传参是通过数组的形式传递的
```js
foo.call("name",20,30,40);
foo.apply("name",[20,30,40])
```
> bind解决了每一次独立调用函数时需要执行显式绑定的操作，直接返回一个新的函数，this指向绑定的对象

```js
var newFoo = foo.bind("abc")

newFoo()//绑定abc
```

### new绑定
- JS中的函数可以当做构造函数使用(new关键字实现)
- 使用new时的执行步骤:
  - 创建一个新对象
  - 新对象执行prototype连接
  - 新对象会被绑定在函数调用的this上(**this绑定**)
  - 如果函数没有返回其他对象，表达式会返回该新对象

```js
function foo(){

}

var bar = new foo()
//新对象：obj:{}
//obj._proto_ = foo.prototype
//foo.this = obj

```

## 规则优先级

## this面试题：
