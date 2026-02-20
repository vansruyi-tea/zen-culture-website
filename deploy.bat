@echo off
echo ========================================
echo 禅意文化空间网站 - 部署脚本
echo ========================================
echo.

echo 1. 检查Node.js版本...
node --version
if errorlevel 1 (
    echo 错误: Node.js未安装
    echo 请先安装Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo 2. 安装依赖...
call npm install
if errorlevel 1 (
    echo 错误: 依赖安装失败
    pause
    exit /b 1
)

echo.
echo 3. 构建项目...
call npm run build
if errorlevel 1 (
    echo 错误: 构建失败
    pause
    exit /b 1
)

echo.
echo 4. 启动开发服务器...
echo.
echo ========================================
echo 网站已准备就绪！
echo 访问: http://localhost:3000
echo 按 Ctrl+C 停止服务器
echo ========================================
echo.

call npm run dev

pause