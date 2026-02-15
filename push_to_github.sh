#!/bin/bash
cd "/c/Users/hs117/OneDrive/Desktop/Portfolio"

echo "Initializing Git repository..."
git init

echo "Checking if remote exists..."
git remote -v

echo "Adding remote origin..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/Sreeharicse/Portfolio.git

echo "Adding all files..."
git add .

echo "Creating commit..."
git commit -m "Initial commit: Portfolio website with SMTP email functionality"

echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "Done!"
