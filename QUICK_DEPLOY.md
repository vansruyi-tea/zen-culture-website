# ⚡ Next.js现代化版本 - 快速部署命令

## 🎯 一句话部署

**将整个项目上传到GitHub，然后在Vercel导入，点击部署。**

## 📋 详细命令

### 1. 初始化Git仓库
```bash
git init
git add .
git commit -m "禅意文化空间 - Next.js现代化网站"
```

### 2. 创建GitHub仓库（网页操作）
1. 访问：https://github.com/new
2. 仓库名：`zen-culture-website`
3. 不创建README

### 3. 连接到GitHub
```bash
git branch -M main
git remote add origin https://github.com/你的用户名/zen-culture-website.git
git push -u origin main
```

### 4. Vercel部署（网页操作）
1. 访问：https://vercel.com/new
2. 导入GitHub仓库
3. 点击 "Deploy"

## 🚀 一键脚本

### Windows用户：
双击 `setup-and-run.bat` 启动本地开发服务器

### 所有用户：
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 🌐 部署后访问

### Vercel自动分配域名：
`https://zen-culture-website.vercel.app`

### 自定义域名（可选）：
1. 在Vercel项目设置中添加域名
2. 在域名注册商处配置DNS
3. 等待生效（最多24小时）

## 🔧 环境要求

### 最低要求：
- Node.js 18或更高版本
- npm 8或更高版本
- 现代浏览器（Chrome 90+, Firefox 88+, Safari 14+）

### 推荐配置：
- Node.js 20 LTS
- 8GB RAM
- 高速网络连接

## 📞 紧急支持

### 部署失败？
1. 检查Node.js版本：`node --version`
2. 清理缓存：`npm cache clean --force`
3. 重新安装：`rm -rf node_modules && npm install`

### 网站无法访问？
1. 检查Vercel部署状态
2. 查看构建日志
3. 联系Vercel支持

### 需要帮助？
随时在这里问我！我会提供实时支持。 🐾

---

## 🎉 立即开始！

**复制粘贴这些命令：**

```bash
# 1. 进入项目目录
cd zen-culture-website

# 2. 初始化Git
git init
git add .
git commit -m "禅意文化空间网站"

# 3. 创建GitHub仓库（网页操作）
# 访问 https://github.com/new

# 4. 推送到GitHub
git remote add origin https://github.com/你的用户名/zen-culture-website.git
git branch -M main
git push -u origin main

# 5. Vercel部署（网页操作）
# 访问 https://vercel.com/new
```

**预计完成时间：10分钟** ⏱️

---

**你的Next.js现代化禅意文化网站即将上线！** 🚀

*专业级网站，零配置部署* 🏆