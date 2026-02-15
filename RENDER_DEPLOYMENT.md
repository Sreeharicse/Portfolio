# Render Deployment Guide

This guide will help you deploy your portfolio to Render.

## 📦 What You're Deploying

Your portfolio consists of two parts:
1. **Backend** (Node.js) - Handles contact form emails
2. **Frontend** (HTML/CSS/JS) - Your portfolio website

## 🚀 Deployment Steps

### Step 1: Deploy Backend Service

1. **Go to Render Dashboard**:
   - Visit: https://dashboard.render.com/
   - Sign up or log in (you can use GitHub to sign in)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub account if not already connected
   - Select your Portfolio repository

3. **Configure Backend Service**:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Add Environment Variables**:
   Click "Advanced" → "Add Environment Variable":
   - `EMAIL_USER` = `hs1174071@gmail.com`
   - `EMAIL_PASS` = `[your Gmail app password]`
   - `PORT` = `3000`

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - **Copy your backend URL** (e.g., `https://portfolio-backend-xxxx.onrender.com`)

### Step 2: Deploy Frontend (Static Site)

1. **Create New Static Site**:
   - Click "New +" → "Static Site"
   - Select the same Portfolio repository

2. **Configure Static Site**:
   - **Name**: `portfolio-frontend`
   - **Build Command**: Leave empty
   - **Publish Directory**: `.` (root directory)
   - **Plan**: Free

3. **Deploy**:
   - Click "Create Static Site"
   - Wait for deployment

### Step 3: Update Frontend to Use Production Backend

After backend is deployed, you need to update your HTML:

1. **Get your backend URL** from Render (from Step 1)
2. **Update `Html/Mainpage.html`**:
   - Find line 361: `const response = await fetch('http://localhost:3000/send-email', {`
   - Replace with: `const response = await fetch('https://your-backend-url.onrender.com/send-email', {`
3. **Commit and push** to GitHub:
   ```bash
   git add Html/Mainpage.html
   git commit -m "Update API endpoint for production"
   git push origin main
   ```
4. Render will automatically redeploy your frontend

## ✅ Verification

1. Visit your frontend URL (e.g., `https://portfolio-frontend-xxxx.onrender.com`)
2. Navigate to the Contact section
3. Send a test message
4. Check your email at hs1174071@gmail.com

## 📝 Important Notes

- **Free Tier**: Render's free tier spins down after 15 minutes of inactivity. First request may take 30-60 seconds.
- **Environment Variables**: Never commit `.env` to GitHub - it's already in `.gitignore`
- **Auto-Deploy**: Render automatically redeploys when you push to GitHub

## 🔗 Useful Links

- Render Dashboard: https://dashboard.render.com/
- Render Docs: https://render.com/docs
