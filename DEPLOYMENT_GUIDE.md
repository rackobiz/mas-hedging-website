# 🚀 MAS Hedging Website Deployment Guide

Follow these steps to deploy your website to Railway via GitHub.

## 📋 Prerequisites

Before starting, make sure you have:
- A GitHub account (create one at [github.com](https://github.com))
- A Railway account (create one at [railway.app](https://railway.app))
- Git installed on your computer
- Terminal/Command Prompt access

## 📁 Step 1: Download Your Project Files

I've prepared all your project files. You need to download these files to your computer:

1. **index.html** - Your main website file
2. **server.js** - Express server to run the website
3. **package.json** - Node.js configuration
4. **README.md** - Project documentation
5. **.gitignore** - Git ignore file

## 🔧 Step 2: Set Up on Your Computer

1. **Create a new folder** on your computer called `mas-hedging-website`

2. **Copy all the files** I created into this folder

3. **Open Terminal/Command Prompt** and navigate to your project folder:
   ```bash
   cd path/to/your/mas-hedging-website
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Test locally** (optional):
   ```bash
   npm start
   ```
   Then visit `http://localhost:3000` to see your website

## 📤 Step 3: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git branch -M main
   ```

2. **Configure Git with your information**:
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

3. **Add and commit files**:
   ```bash
   git add .
   git commit -m "Initial commit: MAS Hedging website"
   ```

4. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click the "+" icon → "New repository"
   - Name it `mas-hedging-website`
   - Make it **Public**
   - **Don't** initialize with README (we already have one)
   - Click "Create repository"

5. **Connect and push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mas-hedging-website.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

## 🚂 Step 4: Deploy to Railway

1. **Go to Railway**:
   - Visit [railway.app](https://railway.app)
   - Sign up/Sign in (you can use your GitHub account)

2. **Create a new project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `mas-hedging-website` repository

3. **Configure deployment**:
   - Railway will automatically detect it's a Node.js project
   - It will use the `start` script from package.json
   - No additional configuration needed!

4. **Deploy**:
   - Railway will automatically build and deploy your website
   - You'll get a live URL like `https://your-app-name.up.railway.app`

## ✅ Step 5: Verify Deployment

1. **Check the deployment**:
   - Railway will show build logs
   - Wait for "Deployment successful" message

2. **Visit your live website**:
   - Click the generated URL
   - Your MAS Hedging website should be live!

3. **Test functionality**:
   - Check navigation works
   - Test the sign-in modal
   - Verify animations are working
   - Test on mobile devices

## 🔄 Making Updates

To update your website:

1. **Make changes** to your local files
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. **Railway automatically redeploys** when you push to GitHub

## 🆘 Troubleshooting

**If deployment fails:**
- Check Railway build logs for errors
- Ensure all files are committed to GitHub
- Verify package.json has correct start script

**If website doesn't load:**
- Check that Railway assigned a port correctly
- Verify the health endpoint: `your-url.railway.app/health`

**Need help?**
- Railway has excellent documentation
- GitHub has guides for repository management
- Both platforms have community support

## 🎉 Success!

Once deployed, your website will be:
- ✅ Live on the internet
- ✅ Automatically updated when you push changes
- ✅ Hosted on Railway's reliable infrastructure
- ✅ Accessible from anywhere in the world

Your MAS Hedging website is now ready for the world to see! 🌍
