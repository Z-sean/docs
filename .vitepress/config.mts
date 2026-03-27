import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zc的学习笔记",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "前端",
        items: [
          { text: "Network", link: "/前端/Network/1_七层参考模型" },
          { text: "Git", link: "/前端/Git/_Git使用流程" },
          { text: "Vue", link: "/前端/Vue/1_邂逅Vue" },
          {
            text: "JavaScript 基础",
            link: "/前端/JavaScript_基础/1_浏览器渲染与V8执行",
          },
          // { text: '工程化', link: '/前端/工程化/' }
        ],
      },
    ],
    outline: [1, 6],
    sidebar: {
      "/前端/Network/": [
        {
          text: "Network（网络）",
          collapsed: false,
          items: [
            { text: "七层参考模型", link: "/前端/Network/1_七层参考模型" },
            {
              text: "TCP 三次握手与四次挥手",
              link: "/前端/Network/2_TCP三次握手与四次挥手",
            },
            {
              text: "URL 输入浏览器后发生了什么",
              link: "/前端/Network/3_当url输入浏览器后",
            },
            { text: "浏览器跨域", link: "/前端/Network/4_浏览器跨域" },
            { text: "AJAX", link: "/前端/Network/5_AJAX" },
            { text: "CDN 内容分发", link: "/前端/Network/6_CDN内容分发" },
            { text: "Fetch", link: "/前端/Network/7_fetch" },
            { text: "SSE", link: "前端/Network/8_SSE" },
            { text: "WebSocketd", link: "前端/Network/9_WebSocked" },
            {
              text: "navigator.sendBeacon",
              link: "前端/Network/10_navigator.sendBeacon",
            },
            { text: "HTTPS & TLS", link: "前端/Network/11_SSL&TLS&HTTPS" },
            { text: "JWT", link: "前端/Network/12_JWT" },
            {
              text: "网络状态查询",
              link: "前端/Network/13_网络状态&强网弱网环境",
            },
            {
              text: "XSS跨站脚本攻击",
              link: "前端/Network/14_XSS跨站脚本攻击",
            },
          ],
        },
      ],

      "/前端/Git/": [
        {
          text: "Git",
          collapsed: false,
          items: [{ text: "Git 使用", link: "/前端/Git/_Git使用流程" }],
        },
      ],
      "/前端/Vue/": [
        {
          text: "Vue",
          collapsed: false,
          items: [
            { text: "邂逅Vue", link: "/前端/Vue/1_第一个Vue应用" },
            { text: "插值语法&指令", link: "/前端/Vue/2_插值语法&指令" },
            { text: "组件化&组件通信", link: "/前端/Vue/3_组件化&组件通信" },
            { text: "插槽&非父子通信", link: "/前端/Vue/4_插槽&非父子通信" },
            {
              text: "组件化额外知识补充",
              link: "/前端/Vue/5_组件化额外知识补充",
            },
            { text: "组合式语法", link: "/前端/Vue/6_组合式语法1" },
            { text: "Vue路由#1", link: "/前端/Vue/7_VueRouter" },
            { text: "Vue路由#2", link: "/前端/Vue/8_vue-Router2" },
            { text: "Vuex状态管理", link: "/前端/Vue/9_Vuex状态管理" },
          ],
        },
      ],
      "/前端/JavaScript_基础/": [
        {
          text: "JavaScrip基础",
          collapsed: false,
          items: [
            {
              text: "浏览器渲染与V8执行",
              link: "/前端/JavaScript_基础/1_浏览器渲染与V8执行",
            },
            {
              text: "代码执行过程与作用域问题",
              link: "/前端/JavaScript_基础/2_全局代码执行与作用域",
            },
            {
              text: "内存管理与闭包",
              link: "/前端/JavaScript_基础/3_内存管理与闭包",
            },
            {
              text: "JS函数中的this",
              link: "/前端/JavaScript_基础/4_JS中的this与其绑定规则",
            },

            {
              text: "纯函数&组合函数&柯里化",
              link: "/前端/JavaScript_基础/6_纯函数&组合函数&柯里化",
            },
            {
              text: "JS知识补充",
              link: "/前端/JavaScript_基础/7_with&eval&严格模式&对象创建",
            },

            {
              text: "JS面向对象",
              link: "/前端/JavaScript_基础/8_关于Object",
            },
            {
              text: "面向对象_继承",
              link: "/前端/JavaScript_基础/9_JS继承",
            },
            {
              text: "ES6~ES12更新一览",
              link: "/前端/JavaScript_基础/10_ES6~ES12内容更新",
            },
            {
              text: "Proxy-Reflect",
              link: "/前端/JavaScript_基础/11_Proxy-Reflect",
            },
            {
              text: "响应式",
              link: "/前端/JavaScript_基础/12_响应式",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Z-sean/docs" }],
  },
});
