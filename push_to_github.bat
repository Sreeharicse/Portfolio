@echo off
echo ========================================
echo  Portfolio GitHub Push Script
echo ========================================
echo.

REM Navigate to portfolio directory
cd /d "C:\Users\hs117\OneDrive\Desktop\Portfolio"

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not recognized!
    echo Please restart your terminal and try again.
    echo.
    pause
    exit /b 1
)

echo Git is installed and ready!
echo.

REM Check if already a git repository
if exist ".git" (
    echo Repository already initialized.
) else (
    echo Initializing Git repository...
    git init
    echo.
)

REM Configure Git user (if not already configured)
git config user.name >nul 2>&1
if %errorlevel% neq 0 (
    echo Setting up Git user configuration...
    git config user.name "Sreehari P"
    git config user.email "hs1174071@gmail.com"
    echo.
)

REM Check current branch and rename to main if needed
for /f "tokens=*" %%i in ('git branch --show-current 2^>nul') do set CURRENT_BRANCH=%%i
if "%CURRENT_BRANCH%"=="master" (
    echo Renaming branch from master to main...
    git branch -M main
)

REM Add all files
echo Adding all files to Git...
git add .
echo.

REM Commit changes
echo Committing changes...
git commit -m "Initial commit: Portfolio website with HTML, CSS, and JavaScript"
if %errorlevel% neq 0 (
    echo No changes to commit or commit failed.
    echo.
)

REM Check if remote already exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo Adding remote repository...
    git remote add origin https://github.com/Sreeharicse/Portfolio.git
    echo.
) else (
    echo Remote origin already exists.
    echo.
)

REM Push to GitHub
echo Pushing to GitHub...
echo.
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo  SUCCESS! Portfolio pushed to GitHub!
    echo ========================================
    echo.
    echo Repository: https://github.com/Sreeharicse/Portfolio
    echo.
) else (
    echo.
    echo ========================================
    echo  Push failed!
    echo ========================================
    echo.
    echo This might be because:
    echo 1. You need to authenticate with GitHub
    echo 2. The repository doesn't exist or you don't have access
    echo 3. There are conflicts with existing code
    echo.
    echo Try running: git push -u origin main --force
    echo (Only if you're sure you want to overwrite remote changes)
    echo.
)

pause
