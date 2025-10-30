# Novera - AI与认知科技公司官方网站 🚀

<div align="center">

**专业 · 现代 · 高性能**

一个为AI与认知科技公司打造的企业官方网站

[查看演示](#) · [快速开始](#快速开始) · [文档](#文档)

</div>

---

## ✨ 特性

- 🎨 **现代化设计** - 简约大气，富有科技感
- 📱 **完全响应式** - 完美适配手机、平板和桌面
- ⚡ **高性能** - 基于Next.js 16，快速加载
- 🔍 **SEO优化** - 内置SEO最佳实践
- 🌙 **深色模式** - 自动适配系统主题
- 💪 **TypeScript** - 类型安全，更好的开发体验
- 🎯 **易于定制** - 清晰的代码结构，方便修改

## 🖥️ 页面展示

### 📄 包含的页面

- ✅ **首页** - 展示核心价值和服务概览
- ✅ **关于我们** - 公司使命、愿景和团队
- ✅ **产品服务** - 详细的产品和服务介绍
- ✅ **洞察博客** - 行业洞察和技术文章
- ✅ **联系我们** - 联系表单和公司信息

## 🚀 快速开始

### 前置要求

- Node.js 18.17+
- npm 或 yarn 或 pnpm

### 安装

```bash
# 1. 克隆项目（或直接使用现有目录）
cd E:\Novera

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:3000
```

就这么简单！ 🎉

## 📁 项目结构

```
novera/
├── app/              # 页面和路由
│   ├── page.tsx      # 首页
│   ├── about/        # 关于我们
│   ├── services/     # 产品服务
│   ├── blog/         # 博客
│   └── contact/      # 联系我们
├── components/       # 可复用组件
├── config/          # 配置文件
└── public/          # 静态资源
```

## 🎨 技术栈

- **框架**: [Next.js 16](https://nextjs.org/) - React框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) - 实用优先的CSS
- **React**: [React 19](https://react.dev/) - 用户界面库

## 🛠️ 自定义

### 修改公司信息

编辑 `config/site.ts`:

```typescript
export const siteConfig = {
  name: "你的公司名",
  description: "你的公司描述",
  contact: {
    email: "your@email.com",
    phone: "+86 123-4567-8900",
  },
};
```

### 修改主题颜色

编辑 `app/globals.css`:

```css
:root {
  --accent: #3b82f6;  /* 改成你喜欢的颜色 */
}
```

### 修改页面内容

直接编辑各个页面文件，内容清晰易懂！

## 📚 文档

- 📖 [快速开始指南](./QUICKSTART.md) - 5分钟上手
- 📘 [使用说明](./使用说明.md) - 详细中文教程
- 🔧 [开发指南](./CONTRIBUTING.md) - 开发规范
- 🚀 [部署指南](./DEPLOYMENT.md) - 部署教程
- 📊 [项目总结](./PROJECT_SUMMARY.md) - 功能总览

## 🚢 部署

### Vercel（推荐，最简单）

1. 访问 [vercel.com](https://vercel.com)
2. 导入项目
3. 一键部署

**完全免费** ✨

### 其他平台

- Netlify
- AWS Amplify
- 自托管（VPS）

详见 [部署指南](./DEPLOYMENT.md)

## 📊 性能

- ⚡ 快速加载（< 2秒）
- 🎯 SEO友好
- 📱 移动优先
- ♿ 可访问性

## 🔧 可用脚本

```bash
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本
npm start          # 启动生产服务器
npm run lint       # 代码检查
npm run type-check # 类型检查
```

## 💡 使用建议

1. **先查看网站** - 运行 `npm run dev` 预览
2. **修改内容** - 替换成你的公司信息
3. **调整样式** - 修改颜色和布局
4. **添加图片** - 使用真实的图片
5. **部署上线** - 发布到互联网

## 🤝 贡献

欢迎贡献！请阅读 [贡献指南](./CONTRIBUTING.md)

## 📄 许可

Copyright © 2024 Novera. All rights reserved.

## 💬 支持

需要帮助？

- 📧 Email: support@novera.ai
- 📱 Phone: +86 400-123-4567
- 💬 提交 [Issue](https://github.com/your-org/novera/issues)

## 🌟 特别说明

这个网站是为您量身打造的：

- ✅ **开箱即用** - 无需复杂配置
- ✅ **专业品质** - 媲美一流科技公司
- ✅ **易于维护** - 清晰的代码结构
- ✅ **完整文档** - 详细的中文说明
- ✅ **持续更新** - 使用最新技术

---

<div align="center">

**用心构建 · 智启未来**

Made with ❤️ for Novera

[返回顶部](#novera---ai与认知科技公司官方网站-)

</div>

