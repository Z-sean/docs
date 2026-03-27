# SSE介绍
> 浏览器用一条长期保持的 HTTP 连接，让服务器可以“单向、持续地”往客户端推消息。
## 基本信息
- SSE由服务器向客户端传输信息
- 基于普通的HTTP请求(text/event-stream)
- 在请求建立后连续不断的返回数据
- 在浏览器端，使用EventSource对象接收数据

服务器字段:
```txt
event: message
id: 123
retry: 5000
data: hello
data: world

```
- 空行表示一个事件的结束，**data**字段可以多行，浏览器最终会将多行拼接

# SSE的设计初衷
> 当服务器有消息更新时，如何**主动推送**给浏览器，而不是等待浏览器请求？

- 轮询：浏览器定时向服务器发出请求，服务器返回最新的数据给浏览器
- 长轮询：浏览器向服务器发出请求，服务器等待一定时间后返回数据给浏览器
- WebSocket；双向通信，但对于该使用场景，没有必要这么做

SSE就是为简化这种服务器向客户端推送消息而设计的

## 使用场景
- 数据面板的实时更新
- 类似ChatGpt的流式输出

SSE不支持IE老浏览器

# SSE的使用
## 浏览器
```js
//1. 建立连接
const es = new EventSource('http://localhost:3000/sse')

//2. 监听事件
es.onmessage = (e)=>{
  console.log('message',e.data)
}

//3. 连接建立
es.onopen = (e) => {
  console.log('连接建立')
}

//4. 监听自定义事件
es.addEventListener('xxx',(e)=>{
  console.log('xxx',e.data)
})

//5. 连接关闭
function stop(){
  es.close()
}
```
```js
<div class="txt"></div>
  <script>
    const es = new EventSource('http://localhost:3000/api/sse');
    es.onopen  = (e)=>{
      console.log(e)
    }
    es.addEventListener('lol',(e)=>{
       document.querySelector('.txt').textContent += e.data;
    })
  </script>
```
基本上，在使用SSE时，需要用到的API
- `new EventSource(url，options)`
  - options：对象类型
    - withCredentials：表示是否携带Cookie和HTTP认证信息
    - headers：请求头信息
    - retryInterval：表示与服务器断开连接后的重连时间间隔
- `es.onmessage` / `es.onopen` / `es.onerror`: 基本事件监听
- `es.readyState`:只读，表示连接状态
  - 0：CONNECTING，正在连接
  - 1：OPEN，连接已建立
  - 2：CLOSED，连接已关闭
- `es.addEventListener('type',handler)`: 自定义事件(event:xxx)监听
- `es.close()`: 关闭连接
- `e.data`: 消息内容(字符串)
- `e.lastEventId`: 事件ID（服务器的事件id）
>EventSource不能自定义请求头

## 服务器(express)
```js
const express = require('express');
const cors = require('cors');
const FileSystem = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/sse',(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/event-stream',
    })
    const data  = FileSystem.readFileSync('./data.txt','utf-8');
    const total = data.length
    let current = 0

    let time = setInterval(()=>{
        console.log(current,total)
        if(current>=total){
            console.log("over")
            clearInterval(time)
            return
        }
        res.write(`event:lol\n`)

        res.write(`data:${data.split("")[current]}\n\n`)
        current++
    },1000)
})

app.listen(3000,()=>{
    console.log('HTTP 服务器已启动，端口 3000');
})
```