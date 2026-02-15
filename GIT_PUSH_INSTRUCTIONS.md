# Push Portfolio to GitHub - Instructions

## Quick Method: Use Git Bash

1. **Open Git Bash** (Right-click in the Portfolio folder → "Git Bash Here")

2. **Run these commands one by one:**

```bash
# Initialize Git repository
git init

# Add remote repository
git remote add origin https://github.com/Sreeharicse/Portfolio.git

# Add all files
git add .

# Create commit
git commit -m "Initial commit: Portfolio website with SMTP email functionality"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Alternative Method: Use GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Browse to `C:\Users\hs117\OneDrive\Desktop\Portfolio`
5. Click "Publish repository"
6. Select the existing repository: `Sreeharicse/Portfolio`
7. Click "Push origin"

## What Will Be Pushed

Your repository will include:

### Frontend Files
- `Html/Mainpage.html` - Main portfolio page with updated contact form
- `Css/Mainpage.css` - Styling
- `Css/Contact.css` - Contact section styling  
- `Images/` - All portfolio images
- `Js/` - JavaScript files

### Backend Files (Email Functionality)
- `server.js` - Express server with nodemailer
- `package.json` - Node.js dependencies
- `.gitignore` - Protects sensitive files

### Documentation
- `EMAIL_SETUP.md` - Email configuration guide
- `README.md` (if exists)

### Protected Files (Won't be pushed - in .gitignore)
- `.env` - Your email credentials (PROTECTED)
- `node_modules/` - Dependencies (will be installed via npm)

## Important Notes

> [!WARNING]
> **Your `.env` file with email credentials will NOT be pushed** to GitHub (it's in `.gitignore`). This is for security.

> [!TIP]
> After pushing, anyone who clones your repository will need to:
> 1. Run `npm install` to install dependencies
> 2. Create their own `.env` file with their email credentials
> 3. Follow the instructions in `EMAIL_SETUP.md`

## Verify the Push

After pushing, visit: https://github.com/Sreeharicse/Portfolio

You should see all your files there!

## Troubleshooting

**Error: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/Sreeharicse/Portfolio.git
```

**Error: "failed to push"**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**Authentication Required:**
- Use your GitHub username
- For password, use a [Personal Access Token](https://github.com/settings/tokens) (not your GitHub password)
