# GitHub上传和部署完整指南

## 📋 前置准备

### 1. 确保已安装Git

检查是否安装：
```bash
git --version
```

如果未安装，访问 [git-scm.com](https://git-scm.com/) 下载安装。

### 2. 注册GitHub账号

访问 [github.com](https://github.com) 注册（如果还没有账号）。

---

## 🚀 方法一：VS Code图形界面（最简单）

### 步骤1：初始化Git

1. 打开VS Code
2. 点击左侧 **源代码管理** 图标（或 `Ctrl+Shift+G`）
3. 点击 **"初始化存储库"** 按钮

### 步骤2：首次提交

1. 所有文件会显示在"更改"列表中
2. 点击文件旁边的 **"+"** 号添加到暂存区（或点击顶部的 **"+"** 添加所有文件）
3. 在顶部消息框输入：`初始提交：Novera官方网站`
4. 点击 **"✓ 提交"** 按钮

### 步骤3：创建GitHub仓库

1. 访问 [github.com/new](https://github.com/new)
2. 填写仓库信息：
   - **Repository name**: `novera-website`
   - **Description**: `Novera AI与认知科技公司官方网站`
   - 选择 **Public**（推荐）或 **Private**
   - **不要勾选** "Add a README file"
   - **不要勾选** "Add .gitignore"
   - **不要勾选** "Choose a license"
3. 点击 **"Create repository"**

### 步骤4：连接GitHub

在VS Code终端（`Ctrl+` `）中运行：

```bash
# 添加远程仓库（替换YOUR_USERNAME和REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/novera-website.git

# 重命名分支为main
git branch -M main

# 推送到GitHub
git push -u origin main
```

**示例（实际使用时替换用户名）：**
```bash
git remote add origin https://github.com/zhangsan/novera-website.git
git branch -M main
git push -u origin main
```

### 步骤5：输入GitHub凭据

首次推送时会要求输入：
- **Username**: 您的GitHub用户名
- **Password**: 使用 **Personal Access Token**（不是密码）

#### 如何获取Personal Access Token：

1. 访问 [github.com/settings/tokens](https://github.com/settings/tokens)
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 填写信息：
   - **Note**: `Novera网站部署`
   - **Expiration**: 选择有效期（推荐90天或1年）
   - 勾选 **repo** 权限
4. 点击 **"Generate token"**
5. **复制token**（只显示一次！请保存好）
6. 在终端输入密码时，粘贴这个token

---

## 💻 方法二：完整命令行步骤

### 1. 初始化并配置Git

```bash
# 进入项目目录
cd E:\Novera

# 初始化Git仓库
git init

# 配置用户信息（首次使用Git需要）
git config --global user.name "您的名字"
git config --global user.email "your.email@example.com"
```

### 2. 提交代码到本地

```bash
# 查看状态
git status

# 添加所有文件到暂存区
git add .

# 提交
git commit -m "初始提交：Novera官方网站v1.0"
```

### 3. 创建GitHub仓库

（同方法一的步骤3）

### 4. 推送到GitHub

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/novera-website.git

# 查看远程仓库（确认配置正确）
git remote -v

# 重命名分支
git branch -M main

# 推送
git push -u origin main
```

---

## 🚢 部署到Vercel

### 为什么选择Vercel？

- ✅ **完全免费**（个人项目）
- ✅ **自动部署**（推送代码即部署）
- ✅ **全球CDN**（访问速度快）
- ✅ **HTTPS免费**
- ✅ **Next.js官方推荐**

### 部署步骤

#### 1. 登录Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"Sign Up"**
3. 选择 **"Continue with GitHub"**
4. 授权Vercel访问GitHub

#### 2. 导入项目

1. 在Vercel Dashboard，点击 **"Add New..."**
2. 选择 **"Project"**
3. 找到 `novera-website` 仓库
4. 点击 **"Import"**

#### 3. 配置项目

通常保持默认设置即可：

- **Project Name**: `novera-website`
- **Framework Preset**: Next.js（自动检测）
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

#### 4. 部署

1. 点击 **"Deploy"** 按钮
2. 等待构建完成（2-5分钟）
3. 完成后会显示您的网站地址

#### 5. 获得网站地址

您会得到一个免费域名，例如：
- `novera-website.vercel.app`
- `novera-website-abc123.vercel.app`

### 自定义域名（可选）

如果您有自己的域名：

1. 在Vercel项目设置中，找到 **"Domains"**
2. 输入您的域名
3. 按照提示配置DNS记录
4. 等待验证完成

---

## 🔄 后续更新流程

### 每次修改代码后：

#### 使用VS Code：

1. 在源代码管理中查看更改
2. 输入提交信息（如："更新联系方式"）
3. 点击提交
4. 点击 **"同步更改"** 或 **"推送"**

#### 使用命令行：

```bash
# 查看修改
git status

# 添加修改的文件
git add .

# 提交
git commit -m "更新：修改了联系方式和办公室地址"

# 推送到GitHub
git push
```

### 自动部署

- ✅ 推送到GitHub后，Vercel会**自动检测**
- ✅ 自动构建和部署新版本
- ✅ 1-2分钟后网站更新完成

---

## 📝 常用Git命令

```bash
# 查看状态
git status

# 添加所有文件
git add .

# 添加特定文件
git add 文件名

# 提交
git commit -m "提交说明"

# 推送到GitHub
git push

# 拉取最新代码
git pull

# 查看提交历史
git log

# 查看远程仓库
git remote -v
```

---

## ❓ 常见问题

### Q: 推送时提示"Permission denied"？

**A: 需要配置Personal Access Token**

1. 访问 [github.com/settings/tokens](https://github.com/settings/tokens)
2. 生成新token
3. 使用token作为密码

### Q: 提示"fatal: remote origin already exists"？

**A: 远程仓库已存在，删除后重新添加**

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/novera-website.git
```

### Q: 如何查看我的GitHub仓库地址？

**A: 在仓库页面点击绿色的"Code"按钮，复制HTTPS链接**

### Q: Vercel部署失败怎么办？

**A: 检查以下几点：**

1. 本地是否能成功构建（`npm run build`）
2. 查看Vercel的构建日志
3. 确保所有依赖都在package.json中
4. 检查Node.js版本兼容性

### Q: 如何删除GitHub上的仓库？

**A: 在仓库设置中：**

1. 进入仓库页面
2. 点击 **"Settings"**
3. 滚动到底部
4. 点击 **"Delete this repository"**
5. 按提示输入仓库名确认

### Q: 能不能不上传node_modules？

**A: 已经自动排除了！**

项目中的`.gitignore`文件会自动忽略：
- `node_modules/`
- `.next/`
- `.env.local`
等不需要上传的文件

---

## 🎯 完整流程总结

### 首次部署：

1. ✅ 初始化Git仓库
2. ✅ 提交代码到本地
3. ✅ 在GitHub创建仓库
4. ✅ 推送代码到GitHub
5. ✅ 在Vercel导入项目
6. ✅ 等待自动部署完成
7. ✅ 获得网站地址

### 后续更新：

1. ✅ 修改代码
2. ✅ 提交并推送到GitHub
3. ✅ Vercel自动部署
4. ✅ 完成！

---

## 📞 需要帮助？

如果遇到问题：

1. 📖 查看错误信息
2. 🔍 搜索错误提示
3. 💬 查看GitHub/Vercel官方文档
4. 📧 联系技术支持

---

## 🎉 恭喜！

完成这些步骤后，您的网站将：

- ✅ 托管在GitHub上（代码安全）
- ✅ 部署在Vercel上（全球访问）
- ✅ 拥有HTTPS加密
- ✅ 自动部署（推送即更新）
- ✅ 完全免费

**下一步：**
- 🎨 自定义域名
- 📊 添加Google Analytics
- 🔍 优化SEO
- 📱 分享您的网站！

---

**Novera** - 用心构建 · 智启未来

