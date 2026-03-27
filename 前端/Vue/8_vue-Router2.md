# Vue-Router
## 动态路
- 场景：常见于后台管理系统根据不同的角色注册不同的路由
- 特点：按需注入，若当前页面生命周期结束就失效
- 使用：
  - **添加**路由:
    - addRoute()
  - **删除**路由：
    - 使用相同name覆盖
    - 通过removeRoute(routeName)
    - 使用addRoute方法返回值回调
  - **查看**路由：
    - router.hasRoute()
    - router.getRoutes()
```js
const router = createRouter({})
//动态添加路由
const isAdmin = false
// ...
if(isAdmin){
  router.addRoute("routeName",{
    path:,
    name:,
    component:,
  })
}
// ...

//删除路由的方式
// 方式一
router.addRoute({
  path:"/home",
  name:"route#1",
  component:Home,
})
router.addRoute({
  path:"/about",
  name:"route#1",
  component:About,
})
//方式二：
router.removeRoute('route#1')
//方式三：
const removeRoute = router.addRoute({})
removeRoute()

//查看路由
router.hasRoute()//是否存在？
router.getRoutes()//全部路由映射
```

## 路由导航守卫
- 用于**在页面发生跳转之前的验证判断与逻辑处理**
- `router.beforeEach()`：所有路由操作之前都会触发
  - 参数：
    - to：前往的路由
    - from：离开的路由对象
  - 返回值：
    - false：不进行路由操作
    - 无返回值&undefined：默认导航（相当于放行）
    - 返回具体的路由地址：进行路由跳转
      - String类型
      - 对象：包含path，query，params
- Vue2.x中，通过next（参数三）决定跳转路由，在3.x版本中直接使用返回值决定，所以不推荐使用了
### 完整的导航解析流程
1. 导航被触发
2. 失活的组件中（from）调用beforeRouteLeave守卫
3. 调用beforeEach守卫
   - return false
   - return "/login"
4. 在重用的组件中（to）调用beforeRouteUpdate守卫
5. 在路由的配置里调用beforeEnter：routes:\[...]
6. 若是异步组件，就下载并解析异步组件
7. 在被激活的组件中执行beforeRouteEnter
8. beforeResolve:异步组件被解析之后，在跳转之前
9. (确定导航)进行导航
10. 调用afterEach
11. 渲染激活组件的模板->DOM更新
12. 获取激活组件实例：
    - 在步骤7中通过参数next，next会接收组件实例

>步骤七中是无法获取路由对象实例的，因为此时路由对象还没有被渲染，但可以传入一个next参数回调，该回调可以在实例创建后接收**this对象**并执行回调，路由内守卫有三个API：`beforeRouteEnter`、`beforeRouteUpdate`、`beforeRouteLeave`,
