const fs = require("fs");
const path = require("path");

// ================= 配置区域 =================
// 笔记根目录 (假设脚本就放在 DOCS 目录下)
const DOCS_DIR = __dirname;
// 需要忽略的文件夹，避免误扫编译产物、配置和依赖
const IGNORE_DIRS = [".vitepress", ".vscode", "node_modules", "dist", "cache"];
// ⚠️ 是否直接执行删除？(强烈建议先保持 false 预览，确认无误再改为 true)
const EXECUTE_DELETE = false;
// ============================================

function getFiles(dir, extList, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(file)) {
        getFiles(filePath, extList, fileList);
      }
    } else {
      if (extList.some((ext) => file.toLowerCase().endsWith(ext))) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

// 1. 获取所有 Markdown 文件和所有图片
const allMdFiles = getFiles(DOCS_DIR, [".md"]);
const allImages = getFiles(DOCS_DIR, [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
]);

console.log(`📂 找到 Markdown 文件: ${allMdFiles.length} 个`);
console.log(`📸 找到 图片 文件: ${allImages.length} 张`);

let usedImageNames = new Set();
// 兼容 Markdown 标准语法和 HTML img 标签
const imgRegex = /!\[.*?\]\((.*?)\)|<img.*?src=["'](.*?)["']/g;

// 2. 提取所有在 Markdown 中被引用的图片文件名
allMdFiles.forEach((mdPath) => {
  const content = fs.readFileSync(mdPath, "utf-8");
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    // match[1] 是 markdown 语法，match[2] 是 html 语法
    const imgUrl = match[1] || match[2];
    // 排除网络图片
    if (imgUrl && !imgUrl.startsWith("http")) {
      // 提取文件名并解码 (处理路径中可能包含的 %20 等 URI 编码)
      const fileName = decodeURIComponent(path.basename(imgUrl));
      usedImageNames.add(fileName);
    }
  }
});

console.log(`📝 在文章中识别到引用的本地图片: ${usedImageNames.size} 张`);

// 3. 对比找出未使用的图片
const unusedImages = allImages.filter((imgPath) => {
  const fileName = path.basename(imgPath);
  return !usedImageNames.has(fileName);
});

console.log(`\n🗑️ 发现未使用的“孤儿”图片 (${unusedImages.length} 张):`);
unusedImages.forEach((img) => {
  // 打印相对路径，看起来更清爽
  console.log(path.relative(DOCS_DIR, img));
  if (EXECUTE_DELETE) {
    fs.unlinkSync(img);
  }
});

// 4. 结果提示
if (EXECUTE_DELETE) {
  console.log(`\n✅ 已全部清理完毕！共删除了 ${unusedImages.length} 张图片。`);
} else if (unusedImages.length > 0) {
  console.log(
    "\n⚠️ 当前为【预览模式】。如果确认以上图片列表确实是不需要的，请将代码第 9 行的 EXECUTE_DELETE 改为 true，再执行一次。",
  );
} else {
  console.log("\n🎉 太棒了，没有多余的废弃图片！");
}
