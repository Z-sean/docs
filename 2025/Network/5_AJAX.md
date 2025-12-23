# 什么是Ajax
- Ajax是一种在不刷新情况下，向服务器发送请求，更新页面的技术
# Ajax流程
1. 创建XMLHttpRequest对象xhr  --快递创建
2. `xhr.open(请求方法,请求地址,是否异步)`  --开快递单
3. `xhr.setRequestHeader(请求头,请求头内容)`  --类似于给快递贴标签
4. `xhr.responseType = 'json'`--设置响应数据类型 --告诉希望收到什么快递
5. `xhr.timeout = 3000`--设置超时时间
6. 事件回调{
   1. `xhr.onload = ()=>{}`--请求成功，收到响应但业务不一定成功
   2. `xhr.onerror = ()=>{}`--请求失败
   3. `xhr.ontimeout = ()=>{}`--请求超时
   4. `xhr.onprogress = (e)=>{}`--请求进度
}
7. `xhr.send(请求体)`--发送请求  --把快递送出去

>DNS找域名->TCP建立连接->网络层传输->应用层处理<br/>
返回状态码 + 响应头 + 响应体
## xhr状态码
- xhr.onreadystatechange = ()=>{}--监听xhr状态变化
   1. xhr.readyState == 0--未初始化
   2. xhr.readyState == 1--已打开
   3. xhr.readyState == 2--已发送
   4. xhr.readyState == 3--已接收
   5. xhr.readyState == 4--已处理
   6. xhr.status == 200--请求成功

## 案例:
### 发送Get请求
```js
const xhr = new XMLHttpRequest()
xhr.open("GET","http://baidu.com？w=xxx&callback=xxx",true)
xhr.setRequestHeader("Content-Type","application/json")
xhr.responseType = 'json'
xhr.timeout = 3000
xhr.onload()=>{
  if(xhr.status == 200){
    console.log(xhr.response)
  }else{
    console.log("请求失败")
  }
}
xhr.send()
```

### 发送Post请求-Json格式
```js
const xhr = new XMLHttpRequest()
xhr.open('POST', 'http://localhost:3000/api/user', true)

xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

xhr.onload = () => console.log(xhr.responseText)
xhr.send(JSON.stringify({ name: 'xxx', age: 18 }))

```

### 发送Post请求-表单格式
```js
//...
const xhr = new XMLHttpRequest()
xhr.open('POST', 'http://localhost:3000/api/user', true)

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')

xhr.onload = () => console.log(xhr.responseText)
xhr.send('name=zhangsan&age=18')

```
### 上传文件
```js
const file = document.querySelector('#file').files[0]//文件对象

const fd = new FormData()
fd.append('file', file)

const xhr = new XMLHttpRequest()
xhr.open('POST', 'http://localhost:3000/upload', true)

xhr.onload = () => console.log(xhr.responseText)
xhr.send(fd) // 注意：这里不要手动 setRequestHeader Content-Type

```

### 请求中断
AJAX可以手动中断请求`abort)`,触发后自动执行事件处理函数`onabort()`,`onabort()`不需要手动调用
```js
xhr.abort()
```

### 获取进度
原理是通过 event.loaded 和 event.total 属性获取已上传数据量和总数据量，并计算上传进度，最后将进度显示在页面上
```js
xhr.onprogress = (e) => {
  console.log(e.loaded, e.total)
}
```