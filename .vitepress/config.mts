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
        text: "2025",
        items: [
          { text: "Network", link: "/2025/Network/1_七层参考模型" },
          { text: "Git", link: "/2025/Git/_Git使用流程" },
          { text: "Vue", link: "/2025/Vue/1_邂逅Vue" },
          {
            text: "JavaScript 基础",
            link: "/2025/JavaScript_基础/1_浏览器渲染与V8执行",
          },
          // { text: '工程化', link: '/2025/工程化/' }
        ],
      },
    ],
    outline: [1, 6],
    sidebar: {
      "/2025/Network/": [
        {
          text: "Network（网络）",
          collapsed: false,
          items: [
            { text: "七层参考模型", link: "/2025/Network/1_七层参考模型" },
            {
              text: "TCP 三次握手与四次挥手",
              link: "/2025/Network/2_TCP三次握手与四次挥手",
            },
            {
              text: "URL 输入浏览器后发生了什么",
              link: "/2025/Network/3_当url输入浏览器后",
            },
            { text: "浏览器跨域", link: "/2025/Network/4_浏览器跨域" },
            { text: "AJAX", link: "/2025/Network/5_AJAX" },
            { text: "CDN 内容分发", link: "/2025/Network/6_CDN内容分发" },
            { text: "Fetch", link: "/2025/Network/7_fetch" },
            { text: "SSE", link: "2025/Network/8_SSE" },
            { text: "WebSocketd", link: "2025/Network/9_WebSocked" },
            {
              text: "navigator.sendBeacon",
              link: "2025/Network/10_navigator.sendBeacon",
            },
            { text: "HTTPS & TLS", link: "2025/Network/11_SSL&TLS&HTTPS" },
            { text: "JWT", link: "2025/Network/12_JWT" },
            {
              text: "网络状态查询",
              link: "2025/Network/13_网络状态&强网弱网环境",
            },
            {
              text: "XSS跨站脚本攻击",
              link: "2025/Network/14_XSS跨站脚本攻击",
            },
          ],
        },
      ],

      "/2025/Git/": [
        {
          text: "Git",
          collapsed: false,
          items: [{ text: "Git 使用", link: "/2025/Git/_Git使用流程" }],
        },
      ],
      "/2025/Vue/": [
        {
          text: "Vue",
          collapsed: false,
          items: [
            { text: "邂逅Vue", link: "/2025/Vue/1_邂逅Vue" },
            { text: "插值语法&指令", link: "/2025/Vue/2_插值语法&指令" },
            { text: "组件化&组件通信", link: "/2025/Vue/3_组件化&组件通信" },
            { text: "插槽&非父子通信", link: "/2025/Vue/4_插槽&非父子通信" },
            {
              text: "组件化额外知识补充",
              link: "/2025/Vue/5_组件化额外知识补充",
            },
            { text: "组合式语法", link: "/2025/Vue/6_组合式语法1" },
            { text: "Vue路由#1", link: "/2025/Vue/7_VueRouter" },
            { text: "Vue路由#2", link: "/2025/Vue/8_vue-Router2" },
            { text: "Vuex状态管理", link: "/2025/Vue/9_Vuex状态管理" },
          ],
        },
      ],
      "/2025/JavaScript_基础/": [
        {
          text: "JavaScrip基础",
          collapsed: false,
          items: [
            {
              text: "浏览器渲染与V8执行",
              link: "/2025/JavaScript_基础/1_浏览器渲染与V8执行",
            },
            {
              text: "代码执行过程与作用域问题",
              link: "/2025/JavaScript_基础/2_全局代码执行与作用域",
            },
            {
              text: "内存管理与闭包",
              link: "/2025/JavaScript_基础/3_内存管理与闭包",
            },
            {
              text: "JS函数中的this",
              link: "/2025/JavaScript_基础/4_JS中的this与其绑定规则",
            },
            
            {
              text: "纯函数&组合函数&柯里化",
              link: "/2025/JavaScript_基础/6_纯函数&组合函数&柯里化",
            },
            {
              text: "JS知识补充",
              link: "/2025/JavaScript_基础/7_with&eval&严格模式&对象创建",
            },
           
            {
              text: "JS面向对象",
              link: "/2025/JavaScript_基础/8_关于Object",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Z-sean/docs" }],
  },
});
