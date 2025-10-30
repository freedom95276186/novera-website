# 快速入门指南

这是一个5分钟快速启动Novera官方网站的指南。

## 📋 前置条件

确保您已安装：
- Node.js 18.17+ ([下载](https://nodejs.org/))
- Git ([下载](https://git-scm.com/))

## 🚀 快速开始

### 1️⃣ 获取代码

```bash
# 克隆仓库
git clone https://github.com/your-org/novera.git

# 进入项目目录
cd novera
```

### 2️⃣ 安装依赖

```bash
npm install
```

这将安装所有必要的依赖包，大约需要1-2分钟。

### 3️⃣ 启动开发服务器

```bash
npm run dev
```

服务器启动后，打开浏览器访问：
👉 [http://localhost:3000](http://localhost:3000)

## ✅ 验证安装

您应该能看到：
- ✨ Novera公司主页
- 🎨 现代化的设计界面
- 📱 响应式布局（可以调整浏览器窗口大小测试）

## 📁 项目结构速览

```
novera/
├── app/              # 页面和路由
│   ├── page.tsx      # 首页 (/)
│   ├── about/        # 关于我们 (/about)
│   ├── services/     # 产品服务 (/services)
│   ├── blog/         # 博客 (/blog)
│   └── contact/      # 联系我们 (/contact)
├── components/       # 可复用组件
│   ├── Header.tsx    # 导航栏
│   └── Footer.tsx    # 页脚
└── config/          # 配置文件
    └── site.ts      # 网站配置
```

## 🎨 自定义内容

### 修改公司信息

编辑 `config/site.ts`：

```typescript
export const siteConfig = {
  name: "Novera",           // 公司名称
  description: "...",        // 公司描述
  contact: {
    email: "contact@novera.ai",  // 修改邮箱
    phone: "+86 400-123-4567",   // 修改电话
  },
  // ...
};
```

### 修改页面内容

- **首页**: 编辑 `app/page.tsx`
- **关于我们**: 编辑 `app/about/page.tsx`
- **产品服务**: 编辑 `app/services/page.tsx`
- **博客**: 编辑 `app/blog/page.tsx`
- **联系我们**: 编辑 `app/contact/page.tsx`

### 修改主题颜色

编辑 `app/globals.css`：

```css
:root {
  --accent: #3b82f6;      /* 主色调（蓝色） */
  --accent-dark: #2563eb; /* 深色主色调 */
  /* 修改这些值来改变网站的颜色主题 */
}
```

常用颜色示例：
- 蓝色：`#3b82f6`
- 紫色：`#8b5cf6`
- 绿色：`#10b981`
- 橙色：`#f59e0b`

## 🛠️ 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器（需要先构建）
npm start

# 代码检查
npm run lint

# TypeScript类型检查
npm run type-check
```

## 📱 访问网站

开发服务器启动后，您可以访问：

- **本地**: [http://localhost:3000](http://localhost:3000)
- **网络**: 在开发服务器启动时会显示局域网IP地址，可用于手机测试

## 🎯 下一步

✅ 已完成快速启动！现在您可以：

1. 📖 阅读 [README.md](./README.md) 了解更多功能
2. 🎨 自定义内容和样式
3. 📚 查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解开发规范
4. 🚀 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解如何部署

## ❓ 遇到问题？

### 端口被占用

如果3000端口被占用，Next.js会自动使用下一个可用端口（如3001）。

或者手动指定端口：
```bash
PORT=3001 npm run dev
```

### 依赖安装失败

尝试清理并重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 页面不显示或报错

1. 确保Node.js版本 >= 18.17
2. 检查终端是否有错误信息
3. 尝试重启开发服务器（Ctrl+C然后重新运行`npm run dev`）

## 💡 提示

- **热重载**: 修改代码后会自动刷新浏览器，无需手动刷新
- **错误提示**: 开发模式下会在浏览器中显示详细的错误信息
- **编辑器推荐**: VS Code + TypeScript插件 = 最佳开发体验

## 📞 获取帮助

- 📧 邮箱：dev@novera.ai
- 📱 电话：+86 400-123-4567
- 💬 提交Issue：[GitHub Issues](https://github.com/your-org/novera/issues)

---

🎉 祝您使用愉快！

© 2024 Novera

