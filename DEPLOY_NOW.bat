@echo off
echo ========================================
echo 禅意文化空间网站 - 一键部署脚本
echo ========================================
echo.

echo 选择部署方案：
echo.
echo [1] GitHub Pages部署（推荐，免费）
echo [2] 本地测试网站
echo [3] 查看部署指南
echo [4] 退出
echo.

set /p choice="请选择 (1-4): "

if "%choice%"=="1" goto github
if "%choice%"=="2" goto local
if "%choice%"=="3" goto guide
if "%choice%"=="4" exit

:github
echo.
echo ========================================
echo GitHub Pages部署指南
echo ========================================
echo.
echo 请按照以下步骤操作：
echo.
echo 1. 访问 https://github.com
echo 2. 创建新仓库：zen-culture-website
echo 3. 上传 simple-index.html 文件
echo 4. 将文件重命名为 index.html
echo 5. 进入仓库设置 -> Pages
echo 6. 选择 main 分支，保存
echo 7. 等待1-2分钟，访问你的网站
echo.
echo 网站地址：https://你的用户名.github.io/zen-culture-website
echo.
pause
exit

:local
echo.
echo ========================================
echo 本地测试网站
echo ========================================
echo.
echo 正在打开网站...
echo.
echo 如果浏览器没有自动打开，请手动打开：
echo 文件位置：%cd%\simple-index.html
echo.
start simple-index.html
echo 按任意键返回菜单...
pause > nul
goto menu

:guide
echo.
echo ========================================
echo 部署指南
echo ========================================
echo.
echo 详细部署指南：
echo 1. 查看 INSTANT_DEPLOY.md 文件
echo 2. 查看 DEPLOY_GUIDE.md 文件
echo.
echo 按任意键打开指南...
pause > nul
start INSTANT_DEPLOY.md
exit

:menu
call %0