@echo off
echo ========================================
echo Next.js禅意文化网站 - 安装与运行脚本
echo ========================================
echo.

echo 正在检查Node.js版本...
node --version > nul 2>&1
if errorlevel 1 (
    echo 错误: Node.js未安装！
    echo 请先安装Node.js: https://nodejs.org/
    echo 推荐版本: Node.js 18或更高
    pause
    exit /b 1
)

echo Node.js已安装。
echo.

echo 正在安装依赖...
call npm install
if errorlevel 1 (
    echo 错误: 依赖安装失败！
    echo 请尝试: npm cache clean --force
    pause
    exit /b 1
)

echo.
echo 依赖安装成功！
echo.

echo 正在启动开发服务器...
echo.
echo ========================================
echo 🎉 网站已启动！
echo 🌐 访问: http://localhost:3000
echo 📱 响应式设计，支持手机/平板/电脑
echo 🚀 按 Ctrl+C 停止服务器
echo ========================================
echo.

call npm run dev