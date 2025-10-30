# 部署指南

本文档提供了将Novera官方网站部署到各种平台的详细说明。

## 前置要求

- Node.js 18.17 或更高版本
- npm 或 yarn 或 pnpm

## 环境变量配置

创建 `.env.local` 文件并配置以下变量：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.com
```

## 构建生产版本

```bash
# 安装依赖
npm install

# 构建
npm run build

# 本地测试生产版本
npm start
```

## Vercel部署（推荐）

Vercel是Next.js的官方推荐部署平台，提供最佳性能和开发体验。

### 方式1：通过Vercel Dashboard

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Import Project"
3. 连接您的Git仓库
4. Vercel会自动检测Next.js项目
5. 点击 "Deploy"

### 方式2：通过Vercel CLI

```bash
# 安装Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

### 自定义域名配置

1. 在Vercel Dashboard中选择项目
2. 进入 "Settings" → "Domains"
3. 添加您的自定义域名
4. 按照提示配置DNS记录

## Netlify部署

### 方式1：通过Netlify Dashboard

1. 访问 [netlify.com](https://netlify.com)
2. 点击 "Add new site" → "Import an existing project"
3. 连接您的Git仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
5. 点击 "Deploy site"

### 方式2：通过Netlify CLI

```bash
# 安装Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy

# 部署到生产环境
netlify deploy --prod
```

## Docker部署

### 创建Dockerfile

```dockerfile
FROM node:18-alpine AS base

# 依赖安装
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 生产环境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### 构建和运行

```bash
# 构建镜像
docker build -t novera-website .

# 运行容器
docker run -p 3000:3000 novera-website
```

## 自托管（VPS/云服务器）

### 使用PM2

```bash
# 安装PM2
npm install -g pm2

# 构建应用
npm run build

# 启动应用
pm2 start npm --name "novera" -- start

# 设置开机自启
pm2 startup
pm2 save
```

### 使用Nginx反向代理

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 配置SSL证书（使用Let's Encrypt）

```bash
# 安装certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

## AWS部署

### 使用AWS Amplify

1. 登录AWS Console
2. 进入AWS Amplify
3. 选择 "Host web app"
4. 连接Git仓库
5. 配置构建设置
6. 部署

### 使用AWS EC2

1. 启动EC2实例（推荐Ubuntu 22.04）
2. SSH连接到实例
3. 安装Node.js和npm
4. Clone代码仓库
5. 使用PM2运行应用
6. 配置Nginx反向代理
7. 配置SSL证书

## 性能优化建议

1. **启用CDN**
   - 使用Cloudflare或AWS CloudFront加速静态资源

2. **图片优化**
   - 使用WebP格式
   - 启用Next.js Image优化

3. **缓存策略**
   - 配置合理的缓存headers
   - 使用浏览器缓存和CDN缓存

4. **压缩**
   - 启用Gzip/Brotli压缩
   - 优化JavaScript bundle大小

## 监控和分析

### Google Analytics

在 `app/layout.tsx` 中添加：

```typescript
import Script from 'next/script'

// 在<body>标签后添加
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 故障排除

### 构建失败

1. 检查Node.js版本（需要18.17+）
2. 删除node_modules和package-lock.json，重新安装
3. 检查环境变量配置

### 页面404错误

1. 确保路由配置正确
2. 检查build输出是否成功
3. 验证服务器重写规则

### 样式不正确

1. 确保Tailwind CSS配置正确
2. 检查CSS文件导入顺序
3. 清除浏览器缓存

## 支持

如有问题，请联系：
- 邮箱：support@novera.ai
- 电话：+86 400-123-4567

---

© 2024 Novera. All rights reserved.

