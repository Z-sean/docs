import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zc的学习笔记",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '2025',
        items: [
          { text: 'Network', link: '/2025/Network/1_七层参考模型' },
          { text: 'Git', link: '/2025/Git/_Git使用流程' },
          // { text: 'JavaScript 基础', link: '/2025/JavaScript基础/' },
          // { text: '工程化', link: '/2025/工程化/' }
        ]
    }
    ],
    outline: [1,6],
    sidebar: {
      '/2025/Network/': [
    {
      text: 'Network（网络）',
      collapsed: false,
      items: [
        { text: '七层参考模型', link: '/2025/Network/1_七层参考模型' },
        { text: 'TCP 三次握手与四次挥手', link: '/2025/Network/2_TCP三次握手与四次挥手' },
        { text: 'URL 输入浏览器后发生了什么', link: '/2025/Network/3_当url输入浏览器后' },
        { text: '浏览器跨域', link: '/2025/Network/4_浏览器跨域' },
        { text: 'AJAX', link: '/2025/Network/5_AJAX' },
        { text: 'CDN 内容分发', link: '/2025/Network/6_CDN内容分发' },
        { text: 'Fetch', link: '/2025/Network/7_fetch' },
        { text: 'SSE', link: '2025/Network/8_SSE' },
        { text: 'WebSocketd', link: '2025/Network/9_WebSocked' },
        { text: 'navigator.sendBeacon', link: '2025/Network/10_navigator.sendBeacon' },
        { text: 'HTTPS & TLS', link: '2025/Network/11_SSL&TLS&HTTPS' },
        { text: 'JWT', link: '2025/Network/12_JWT' },
        { text: '网络状态查询', link: '2025/Network/13_网络状态&强网弱网环境' },
        { text: 'XSS跨站脚本攻击', link: '2025/Network/14_XSS跨站脚本攻击' }
        
      ]
    }
  ],

    '/2025/Git/': [
    {
      text: 'Git',
      collapsed: false,
      items: [
        { text: 'Git 使用', link: '/2025/Git/_Git使用流程' },
        
      ]
    }
  ],


    },
      
      
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Z-sean/docs' }
    ]
  }
})
