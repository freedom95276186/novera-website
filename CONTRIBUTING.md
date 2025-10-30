# 开发指南

感谢您对Novera官方网站项目的关注！本文档提供了开发和贡献的指南。

## 开发环境设置

### 前置要求

- Node.js 18.17 或更高版本
- npm、yarn 或 pnpm
- Git
- 代码编辑器（推荐 VS Code）

### 克隆仓库

```bash
git clone https://github.com/your-org/novera.git
cd novera
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 项目结构说明

```
novera/
├── app/                    # Next.js App Router
│   ├── (routes)/          # 路由页面
│   │   ├── about/         # 关于我们
│   │   ├── services/      # 产品服务
│   │   ├── blog/          # 博客
│   │   └── contact/       # 联系我们
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── globals.css        # 全局样式
│   ├── loading.tsx        # 全局加载状态
│   ├── not-found.tsx      # 404页面
│   ├── sitemap.ts         # 网站地图
│   ├── robots.ts          # robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # 可复用组件
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   └── CTASection.tsx     # CTA区块
├── config/               # 配置文件
│   └── site.ts           # 网站配置
├── public/               # 静态资源
├── next.config.ts        # Next.js配置
├── tailwind.config.ts    # Tailwind配置
└── tsconfig.json         # TypeScript配置
```

## 编码规范

### TypeScript

- 使用TypeScript编写所有代码
- 为组件props定义接口
- 避免使用 `any` 类型
- 使用类型推断，但在需要时明确指定类型

```typescript
// ✅ 好的示例
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ text, onClick, variant = 'primary' }: ButtonProps) {
  // ...
}

// ❌ 避免
export default function Button(props: any) {
  // ...
}
```

### React组件

- 优先使用函数组件
- 使用具有描述性的组件名称
- 将复杂逻辑提取到自定义Hooks
- 使用 "use client" 指令标记客户端组件

```typescript
// ✅ 服务端组件（默认）
export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ✅ 客户端组件
"use client";

export default function InteractiveForm() {
  const [data, setData] = useState({});
  // ...
}
```

### CSS和样式

- 使用Tailwind CSS实用类
- 遵循移动优先的设计原则
- 使用语义化的颜色变量
- 避免内联样式（除非动态计算）

```typescript
// ✅ 好的示例
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all">
  点击我
</button>

// ❌ 避免
<button style={{ background: '#3b82f6', color: 'white' }}>
  点击我
</button>
```

### 命名规范

- **组件文件**: PascalCase (例如：`Header.tsx`)
- **工具函数**: camelCase (例如：`formatDate.ts`)
- **常量**: UPPER_SNAKE_CASE (例如：`API_BASE_URL`)
- **CSS类名**: kebab-case (但使用Tailwind时通常不需要)

## Git工作流

### 分支策略

- `main` - 生产分支
- `develop` - 开发分支
- `feature/*` - 功能分支
- `fix/*` - 修复分支
- `hotfix/*` - 紧急修复分支

### 提交信息规范

使用约定式提交（Conventional Commits）：

```
<type>(<scope>): <subject>

<body>

<footer>
```

类型：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat(header): 添加移动端菜单动画

在移动端添加了平滑的菜单打开/关闭动画，提升用户体验。

Closes #123
```

### Pull Request流程

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 测试

### 运行lint检查

```bash
npm run lint
```

### 类型检查

```bash
npx tsc --noEmit
```

### 构建测试

```bash
npm run build
```

## 性能优化指南

### 图片优化

使用Next.js Image组件：

```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="描述"
  width={800}
  height={600}
  priority // 对于首屏图片
/>
```

### 代码分割

使用动态导入：

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>加载中...</p>,
})
```

### 字体优化

使用Next.js字体优化：

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## 可访问性（A11y）

- 使用语义化HTML标签
- 为图片添加alt属性
- 确保键盘导航可用
- 保持足够的颜色对比度
- 使用ARIA属性（必要时）

```typescript
// ✅ 好的示例
<button aria-label="关闭菜单" onClick={handleClose}>
  <CloseIcon />
</button>

<img src="/logo.png" alt="Novera公司标志" />
```

## 常见问题

### 开发服务器启动失败

1. 删除 `.next` 目录
2. 删除 `node_modules` 目录
3. 重新安装依赖: `npm install`
4. 重新启动: `npm run dev`

### 样式不更新

1. 清除浏览器缓存
2. 重启开发服务器
3. 检查Tailwind配置

### TypeScript错误

1. 运行 `npx tsc --noEmit` 查看详细错误
2. 确保所有类型定义正确
3. 检查是否需要添加类型声明文件

## 获取帮助

- 查看 [Next.js文档](https://nextjs.org/docs)
- 查看 [Tailwind CSS文档](https://tailwindcss.com/docs)
- 提交Issue
- 联系团队：dev@novera.ai

## 行为准则

- 尊重所有贡献者
- 保持专业和友好的态度
- 接受建设性的批评
- 专注于对项目最有利的事情

---

感谢您的贡献！

© 2024 Novera Development Team

