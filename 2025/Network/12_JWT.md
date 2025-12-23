# JWT
本质上是一个由.分割的三段字符串
`header.payload.signature`
- Header：说明 token 类型（JWT）+ 签名算法
- Payload：包含传输信息，比如用户身份、权限等
- Signature：用“密钥/私钥”对前两段签名，防止 payload 被篡改

# 使用
- 服务端签发token
- 客户端保持token
- 每次请求都携带token，服务端只需要进行验证

## 服务端：
```js
app.post('/api/login',(req,res)=>{
    if(req.body.username === users.username && req.body.password === users.password){
        res.json({
            message:'登录成功',
            code:200,
            token:jwt.sign({id:users.id,username:users.username},process.env.SECRET_KEY,{expiresIn:'1h'})
        })
    }else{
        res.json({
            message:'用户名或密码错误',
            code:400
        })
    }
})

app.get('/api/verify', (req, res) => {
  jwt.verify(req.headers.authorization, secretKey, (err, data) => {
    if (err) {
      return res.json({ message: 'token失效', code: 403 });
    }
    return res.json({
      message: '获取列表成功',
      code: 200,
      data: [
        { name: '张三', age: 18 },
        { name: '李四', age: 20 },
      ],
    });
  });
});
```
- `jwt.sign(payload, secretOrPrivateKey, options)`
  - payload:用户标识信息
  - secretOrPrivateKey:密钥
  - options:配置选项，过期时间`expiresIn`必须设置
- `jwt.verify(token, secretOrPublicKey, options)`
  - 验证token是否有效
  - 错误会抛出err，成功返回payload
## 客户端：
```html
<body>
  <label for="user">
    Username:
    <input type="text" id="user" name="user" />
  </label>
  <label for="pass">
    Password:
    <input type="password" id="pass" name="pass" />
  </label>
  <button class="send">send</button>
  <script>

    const username = document.getElementById('user');
    const password = document.getElementById('pass');
    const send = document.querySelector('.send');

    send.addEventListener('click', () => {
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      location.href = './verify.html';
    })
    .catch(err => {
      console.error('login failed:', err);
    });
});

  </script>
</body>

//verify.html
<body>
    <script>
        console.log(localStorage.getItem('token'))
        fetch('http://localhost:3000/api/verify', {
            headers: {
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
        })
    </script>
</body>

```
- `Bearer`是一种认证方案名，表示持有该token的人是有权限的，与后续用一个空格分开
