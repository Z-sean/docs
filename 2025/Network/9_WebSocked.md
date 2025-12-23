# 什么是websocket
基于TCP连接的全双工通信，多用于要求**实时性的应用**，如聊天室、股票行情、在线游戏等.  
WebSocket可建立长时间连接。

# 实例方法
- `close(code,reason)` - 关闭连接,code是关闭码，reason是关闭原因
- `send(code,reason)` - 发送消息 
---
# 事件
- open/connection - 连接打开
- message - 收到消息
- close - 连接关闭
- error - 连接错误
---
# 使用
## 服务端
```js
const ws = require('ws'); // 引入 WebSocket 库

// 创建 WebSocket 服务器
const wss = new ws.Server({ port: 8080 },()=>{
    console.log('WebSocket 服务器已启动');
});

// wss.on('connection', (socket) => {
//     console.log("已连接")
//     socket.on('message', (message) => {//在服务端接收的消息通常是Buffer格式
//         console.log(`接收到消息: ${message}`);//触发了隐式转换，将Buffer转换为字符串
//         socket.send(message.toString('utf-8')); // 回显收到的消息
//     })
// })

//wss对象有一个clients属性，存放set格式，表示所有连接到该服务器的客户端，可以进行广播输出
// wss.on('connection', (socket) => {
//     console.log("已连接")
//     socket.on('message', (message) => {
//         wss.clients.forEach(client => {
//             client.send(message.toString('utf-8'));
//         })
//         // console.log(`接收到消息: ${message}`);
//         // socket.send(message.toString('utf-8')); 
//     })
// })

//心跳检测- 由于网络波动或者网络弱，导致连接断开，该机制用于检测是否断开
wss.on("connection", (socket) => {
  let lastPongTime = Date.now(); // 1) 放外面，interval 能用

  socket.on("message", (message) => {
    const msg = message.toString("utf-8");

    // 2) 客户端回应 pong，服务端收到后更新时间
    if (msg === "pong") {
      lastPongTime = Date.now();
      return;
    }

    // 业务消息
    console.log("biz:", msg);
  });

  const heartCheck = setInterval(() => {
    if (socket.readyState !== ws.OPEN) {
      clearInterval(heartCheck);
      return;
    }

    socket.send("ping");

    // 3) 超时判死：10s 没收到 pong
    if (Date.now() - lastPongTime > 10000) {
      socket.close();
      clearInterval(heartCheck);
    }
  }, 5000);

  socket.on("close", () => clearInterval(heartCheck));
});

```
- `wss.on('connection')`：监听客户端连接事件，当有客户端连接时，会触发该事件.
- 连接返回一个`WebSocket`对象(socket)，用于与客户端进行通信。
  - `socket.on('message')`：监听客户端发送的消息事件，当客户端发送消息时，会触发该事件.
  - `socket.send(data)`：向客户端发送消息.
  - `socket.on('close')`：监听客户端关闭事件，当客户端关闭连接时，会触发该事件.
  - `socket.on('error')`：监听客户端错误事件，当客户端发生错误时，会触发该事件.
- ws对象维护一个clients属性，存放set格式，表示所有连接到该服务器的客户端，可以进行广播输出
- 心跳检测机制，长时间不进行消息传输可能连接会断掉，该机制主要是设置一个定时器，当连接建立起来时就注册完成，定时向客户端发送检测字段，客户端收到后返回，如果超过一定时间没有收到客户端的返回，则认为连接断开，关闭连接。
- 所有事件都是使用on()方法进行监听，第一个参数是事件名称，第二个参数是回调函数。
## 客户端
```js
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => ws.send('hi');
ws.onmessage = (e) => console.log(e.data);
ws.onclose = () => console.log('closed');
ws.onerror = (e) => console.log('error', e);
```
- `ws.onopen`：监听连接打开事件，当连接打开时，会触发该事件.
- `ws.onmessage`：监听消息事件，当收到消息时，会触发该事件.
- `ws.onclose`：监听连接关闭事件，当连接关闭时，会触发该事件.
- `ws.onerror`：监听连接错误事件，当连接发生错误时，会触发该事件.