## 核心概念
可访问性是指让包括依赖键盘/读屏器/放大工具的用户也可以理解与操作页面
HTML文档本身自带功能：
- `button` 可聚焦、可回车/空格触发
- `label` 能给表单提供可读名称
- 标题 `h1-h6` 能让页面形成清晰信息层级
- `img` 的 `alt` 能给图片提供替代文本。

```html
<a href="/detail">查看详情</a>
<button type="submit">提交</button>
<img src="avatar.png" alt="用户头像">
<label for="username">用户名</label>
<input id="username" name="username" type="text">
```

## 常见注意事项
- 可点击区域用 `div`：鼠标能点，不代表键盘能用，也不代表读屏知道它是交互控件。
- 输入框没有可读名称：只靠 placeholder 不够，内容一输入提示就消失。
- 图片乱写 `alt`：装饰图可空 `alt=""`，信息图必须写有意义的替代说明。
- 标题层级跳跃：`h1` 后直接 `h4`，会让页面结构对读屏器不连贯。