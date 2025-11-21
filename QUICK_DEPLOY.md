# Quick Deploy Instructions

## Option 1: Using Git Bash or Command Prompt

If you have Git installed, open **Git Bash** or **Command Prompt** in this folder and run:

```bash
# Initialize repository (if not done)
git init
git remote add origin git@github.com:WilsonTenk/Twinklehealth-V2.git

# Add all files
git add .

# Commit
git commit -m "Deploy: Twinkle Health Foundation site"

# Set main branch and push
git branch -M main
git push -u origin main
```

## Option 2: Using GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository → Select this folder
4. Publish repository to GitHub
5. Repository name: `Twinklehealth-V2`
6. Owner: `WilsonTenk`
7. Click "Publish Repository"

## Option 3: Using PowerShell Script

If Git is installed, you can run:

```powershell
.\deploy.ps1
```

## After Pushing to GitHub

1. Go to: https://github.com/WilsonTenk/Twinklehealth-V2/settings/pages
2. Under **Source**, select: **GitHub Actions**
3. Save
4. Go to **Actions** tab to see the deployment progress
5. Your site will be live at: https://wilsontenk.github.io/Twinklehealth-V2/

## Files Ready for Deployment

✅ All source files in `src/`
✅ All images in `public/images/`
✅ Configuration files (package.json, tsconfig.json, vite.config.ts)
✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
✅ Build will happen automatically on GitHub

## Need Help?

- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions
- Make sure Git is installed: https://git-scm.com/downloads

