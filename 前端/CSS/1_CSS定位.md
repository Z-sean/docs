## CSS担任的职责

- 结构呈现
- 响应式适配
- 交互反馈
- 设计还原度
- 后续维护成本

---

### 什么是差的CSS设计？
- 布局不稳定，出现错位、溢出、塌陷
- 响应式失控，移动端体验差
- 组件样式耦合严重，改一处炸一片
- 可访问性和性能细节被忽略，例如焦点态缺失、动画滥用、累积布局偏移明显

```css
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
  inline-size: min(100%, 320px);
}
```

## 现代框架下的CSS
- CSS 没有消失，只是换了组织方式：CSS Modules、Tailwind、CSS-in-JS、原子化类名、本地作用域样式等
- 担任的职责仍然是：
  - 元素如何布局
  - 状态如何反馈
  - 组件如何复用
  - 样式如何隔离与维护