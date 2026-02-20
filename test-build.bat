@echo off
cd /d "C:\Users\Administrator\openclaw\zen-culture-website"
echo Current directory: %cd%
echo.
echo Checking package.json...
if exist package.json (
  echo package.json exists
  echo.
  echo Running npm run build...
  npm run build
) else (
  echo ERROR: package.json not found
  pause
)