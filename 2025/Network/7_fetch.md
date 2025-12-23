# Fetch
## 介绍
相比于Ajax，更简单易用，且仍处于于维护状态  
相比于xhr，fetch更简洁  
fetch只支持GET、POST请求，不支持其他请求方式  
fetch对请求头的设置更直接  
fetch发送post请求时，请求数据需要作为参数传递，而xhr是直接传递数据  
fetch对更多的数据支持:  
     text()：返回文本  
     json()：返回json  
     blob()：返回二进制  
     formData()：返回表单数据  
     arrayBuffer()：返回数组缓冲区  
fetch**解决跨域使用的是cors方案**，比xhr更简单
## 使用
### get
```js
fetch('url').then(res => res.json())
```
fetch返回一个Promise对象，使用then方法获取响应结果
### post
```js
fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        ....
    })
}).then(res =>res.json())
```
### 中断
取消中断依靠**AbortController()对象**，该对象有一个abort()方法，用于中断请求，有一个signal属性，用于传递给fetch请求，当signal触发中断时，fetch请求也会中断
```js
const controller = new AbortController()
fetch(url,{
    signal:controller.signal
}).then(res => res.json())
controller.abort()
```
### 进度获取
1. 发送请求
2. 获取文件的总大小
3. 获取一个文件读取器
4. 获取已经接收的大小
5. 进度 = 已接收大小 / 文件总大小
```js
const res = await fetch(url)
total = res.headers.get('content-length')//文件总大小
reader = res.body.getReader()//获取读取器
received = 0//已接收大小
while(true){
    const {done,value} = await reader.read()//读取数据
    if(done){
        break
    }
    received += value.length
    console.log(`received ${received} of ${total}`)
}

```

response是流，只能读取一次，读取一次后，流就关闭了，再次读取会报错，可以克隆一个进行其他处理
