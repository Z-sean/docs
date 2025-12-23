# 使用
## 初始化
1. npm init -y
2. npm i express
3. 创建server.js文件

## API
### 服务器搭建
1. 引入框架
2. 创建服务器实例
3. 设置监听端口 - app.listen(端口号,回调函数)

app.use() - 用于挂载中间件或者子路由

### 设置路由
1. app.get/post/put/delete
   - get 获取
   - post 提交
   - put 更新
   - delete 删除
2. app.all - 适用于对所有请求的处理
3. app.use - 适用于对特定路径的处理
4. app.route - 适用于对特定路径的不同请求方式处理，可以链式调用

### 设置错误处理
1. app.use((err,req,res,next) => {})
### 常见参数
- req.params - 路径参数
- req.query - 查询参数
- req.body - 请求体参数 需要提前启用解析器
- req.headers/req.get() - 请求头参数
---
- res.send() - 发送文本响应
- res.json() - 发送json响应
- res.status() - 设置响应状态码
- res.set()/res.header() - 设置响应头
- res.download() - 下载文件

## 基本使用
```js

```
- node server.js启动后，会把代码加载在内存中，若你对代码做出了修改，需要重新启动服务器(不会自动更新)