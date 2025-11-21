# Deployment Guide for GitHub Pages

This guide will help you deploy your Twinkle Health Foundation site to GitHub Pages.

## Prerequisites
- Git installed and configured
- GitHub account
- SSH key set up for GitHub (or use HTTPS)

## Deployment Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git remote add origin git@github.com:WilsonTenk/Twinklehealth-V2.git
```

### 2. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/WilsonTenk/Twinklehealth-V2
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

### 3. Commit and Push Your Code

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Twinkle Health Foundation site"

# Push to main branch
git branch -M main
git push -u origin main
```

### 4. Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:
- Build your site
- Deploy it to GitHub Pages

The workflow file is located at `.github/workflows/deploy.yml`

### 5. Access Your Site

After deployment completes (usually 2-3 minutes), your site will be available at:
- `https://wilsontenk.github.io/Twinklehealth-V2/`

You can check the deployment status in the **Actions** tab of your GitHub repository.

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## Troubleshooting

- **Build fails**: Check the Actions tab for error messages
- **Site not loading**: Verify GitHub Pages is enabled in repository settings
- **Images not showing**: Ensure all images are in the `public/images/` folder

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your site locally.

