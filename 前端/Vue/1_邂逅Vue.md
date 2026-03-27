# 引入方式
1. CDN引入
2. 下载引用


## CDN引入
- 内容分发网络
  - 通过相互连接的网络，利用最接近的用户服务器
  - 更快的资源传输
  - 高性能、可拓展、成本低
- 常见的CDN服务器
  - 个人服务器-由阿里、腾讯等厂家提供
  - 开源服务器：unpkg、JSDelivr...
```js
<script src="https://unpkg.com/vue@next"></script>
```

## 下载引入
- 通过下载源码，本地引用

## 计数器案例


# 声明式 & 命令式
- 声明式是结果导向，不关注如何实现
- 命令式是过程导向，关注每一个步骤

# MVVM
- 体系结构，Vue的设计参考了这种结构
- V-视图 M-模型 VM-视图模型
- Vue充当了VM的角色

# template
写法一：
```js
<script type="x-template" id ="test">
    <div>
        ....
    </div>
</script>
```
- 在Vue对象参数中，将id传给template属性
写法二:
```vue
<template id="test">
    <div>....</div>
</template>
```
- 将对应的id传给temolate参数

如果字符串是以#开头，那么就会被querySelector匹配

template可以使用div代替，但是不这么做，在浏览器解析过程中，div也会被解析再次渲染一次->页面上有两个视图内容

# data
- 传入一个函数，返回一个对象
- data的对象会被Vue响应式系统劫持，之后对该对象的修改访问都会被劫持处理

# method
- methods属性是一个对象，包含多个方法
  - 可以被绑定在template中
  - 可以使用this直接访问data数据
- methods中不应该使用箭头函数
  - 为什么？
    - 
  - 不使用箭头，this的指向是什么