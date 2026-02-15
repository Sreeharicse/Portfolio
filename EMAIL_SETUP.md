# Portfolio Contact Form - Email Setup Guide

## 📧 How to Configure Email Sending

Your contact form is now ready to send real emails! Follow these steps:

### Step 1: Get Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Click "Generate"
   - Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### Step 2: Configure Environment Variables

Open the `.env` file in your Portfolio folder and update:

```env
EMAIL_USER=hs1174071@gmail.com
EMAIL_PASS=your-16-character-app-password-here
PORT=3000
```

**Important**: Replace `your-16-character-app-password-here` with the app password you generated (remove spaces).

### Step 3: Start the Backend Server

Open a **new terminal** and run:

```bash
npm start
```

You should see:
```
🚀 Server running on http://localhost:3000
📧 Email will be sent to: hs1174071@gmail.com
✅ Server is ready to send emails
```

### Step 4: Test the Contact Form

1. Keep the Python server running on port 8000 (for the frontend)
2. Keep the Node server running on port 3000 (for email backend)
3. Open http://localhost:8000/Html/Mainpage.html
4. Fill out the contact form and submit
5. Check your email inbox for the message!

## 🔧 Troubleshooting

**Error: "Failed to send message"**
- Make sure the backend server is running on port 3000
- Check that your `.env` file has the correct credentials
- Verify your Gmail app password is correct

**Error: "Invalid login"**
- Make sure you're using an App Password, not your regular Gmail password
- Ensure 2-Factor Authentication is enabled on your Google account

## 📁 Files Created

- `server.js` - Backend server with email functionality
- `package.json` - Node.js dependencies
- `.env` - Email credentials (keep this private!)
- `.gitignore` - Protects your credentials from being committed to Git

## 🚀 Running Both Servers

You need **two terminals**:

**Terminal 1** (Frontend):
```bash
python -m http.server 8000
```

**Terminal 2** (Backend):
```bash
npm start
```
