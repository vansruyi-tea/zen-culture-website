# 🚀 禅意文化空间网站 - 立即部署指南

## 部署方案对比

| 方案 | 难度 | 速度 | 成本 | 推荐度 |
|------|------|------|------|--------|
| **Vercel** | ⭐☆☆☆☆ | ⭐⭐⭐⭐⭐ | 免费 | ⭐⭐⭐⭐⭐ |
| **Netlify** | ⭐⭐☆☆☆ | ⭐⭐⭐⭐☆ | 免费 | ⭐⭐⭐⭐☆ |
| **GitHub Pages** | ⭐⭐⭐☆☆ | ⭐⭐⭐☆☆ | 免费 | ⭐⭐⭐☆☆ |
| **传统服务器** | ⭐⭐⭐⭐⭐ | ⭐⭐☆☆☆ | 付费 | ⭐⭐☆☆☆ |

## 📋 方案一：Vercel部署（推荐）

### 步骤1：准备GitHub仓库
1. 访问 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 填写仓库信息：
   - Repository name: `zen-culture-website`
   - Description: `禅意文化空间网站`
   - 选择 Public（公开）
   - 不勾选 "Add a README file"
4. 点击 "Create repository"

### 步骤2：上传代码到GitHub
在项目目录执行：

```bash
# 1. 初始化git（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交更改
git commit -m "Initial commit: 禅意文化空间网站"

# 4. 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/zen-culture-website.git

# 5. 推送代码
git branch -M main
git push -u origin main
```

### 步骤3：Vercel部署
1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "Add New..." → "Project"
4. 导入你的 `zen-culture-website` 仓库
5. 配置部署：
   - **Framework Preset**: Next.js（自动检测）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）
6. 点击 "Deploy"

### 步骤4：访问网站
部署完成后，Vercel会提供：
- 🌐 **生产域名**: `https://zen-culture-website.vercel.app`
- 🔄 **自动更新**: 每次推送到GitHub都会自动重新部署
- 🔒 **免费SSL证书**: 自动启用HTTPS

## 📋 方案二：Netlify部署（备选）

### 步骤1：准备GitHub仓库（同上）

### 步骤2：Netlify部署
1. 访问 [Netlify](https://netlify.com)
2. 使用GitHub账号登录
3. 点击 "Add new site" → "Import an existing project"
4. 选择你的GitHub仓库
5. 配置部署：
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. 点击 "Deploy site"

### 步骤3：修改Next.js配置
在 `next.config.js` 中添加：
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  output: 'export',  // 添加这一行
}

module.exports = nextConfig
```

## 📋 方案三：GitHub Pages部署

### 步骤1：修改Next.js配置
在 `next.config.js` 中添加：
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/zen-culture-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zen-culture-website/' : '',
}
```

### 步骤2：创建GitHub Actions工作流
创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 步骤3：启用GitHub Pages
1. 在GitHub仓库设置中，找到 "Pages"
2. 选择 "gh-pages" 分支作为源
3. 保存设置

## 🎯 一键部署脚本

我已经创建了 `deploy.bat` 文件，可以一键运行本地开发服务器：

```bash
# Windows用户双击 deploy.bat
# 或手动运行：
npm install
npm run dev
```

## 🔧 部署前检查清单

### ✅ 代码检查
- [ ] 所有页面组件已创建
- [ ] 图片资源已准备
- [ ] 配置文件完整
- [ ] 依赖包已安装

### ✅ 配置检查
- [ ] `package.json` 中的脚本正确
- [ ] `next.config.js` 配置正确
- [ ] 环境变量已设置（如果需要）

### ✅ 测试检查
- [ ] 本地运行正常 (`npm run dev`)
- [ ] 构建成功 (`npm run build`)
- [ ] 响应式设计正常
- [ ] 链接跳转正常

## 🌐 域名绑定（可选）

### 自定义域名
1. 在域名注册商处添加CNAME记录：
   ```
   CNAME www → zen-culture-website.vercel.app
   ```
2. 在Vercel/Netlify中添加自定义域名
3. 等待DNS生效（通常需要几分钟到几小时）

### SSL证书
- Vercel/Netlify自动提供免费SSL证书
- 无需额外配置

## 📊 部署后监控

### 性能监控
- **Vercel Analytics**: 内置性能分析
- **Google Analytics**: 添加跟踪代码
- **Web Vitals**: 核心性能指标

### 访问统计
- **Vercel Analytics**: 基本访问统计
- **Google Analytics 4**: 详细用户分析
- **Umami**: 开源隐私友好的统计

## 🚨 常见问题解决

### 问题1：构建失败
**症状**: `npm run build` 失败
**解决**:
```bash
# 清理缓存
rm -rf .next node_modules
npm cache clean --force
npm install
npm run build
```

### 问题2：图片不显示
**症状**: 生产环境图片404
**解决**: 在 `next.config.js` 中添加图片域名：
```javascript
images: {
  domains: ['your-domain.com', 'cdn.your-domain.com'],
}
```

### 问题3：路由404
**症状**: 刷新页面后404
**解决**: 确保使用Next.js的Link组件，而不是a标签

## 📞 技术支持

### 在线资源
- [Next.js文档](https://nextjs.org/docs)
- [Vercel文档](https://vercel.com/docs)
- [Tailwind CSS文档](https://tailwindcss.com/docs)

### 社区支持
- [Vercel社区](https://vercel.com/community)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

## 🎉 部署成功标志

1. ✅ 网站可以访问
2. ✅ HTTPS已启用
3. ✅ 所有页面正常显示
4. ✅ 移动端适配正常
5. ✅ 图片资源加载正常
6. ✅ 链接跳转正常

---

**立即行动**：
1. 选择Vercel方案（最简单）
2. 按照步骤1-3操作
3. 10分钟内获得在线网站！

**预计时间**：10-30分钟
**预计成本**：$0（免费）
**技术难度**：初学者友好 🟢