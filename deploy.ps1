# PowerShell script to deploy to GitHub
# Run this script: .\deploy.ps1

Write-Host "🚀 Deploying Twinkle Health Foundation to GitHub Pages..." -ForegroundColor Green

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "✓ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git not found. Please install Git from https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# Check if repository is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
    git remote add origin git@github.com:WilsonTenk/Twinklehealth-V2.git
} else {
    Write-Host "✓ Git repository already initialized" -ForegroundColor Green
    # Check if remote exists
    $remote = git remote get-url origin 2>$null
    if (-not $remote) {
        Write-Host "📡 Adding remote repository..." -ForegroundColor Yellow
        git remote add origin git@github.com:WilsonTenk/Twinklehealth-V2.git
    } else {
        Write-Host "✓ Remote already configured: $remote" -ForegroundColor Green
    }
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build successful" -ForegroundColor Green

# Add all files
Write-Host "📝 Staging files..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m "Deploy: Twinkle Health Foundation site with all images and configurations"
} else {
    Write-Host "ℹ No changes to commit" -ForegroundColor Cyan
}

# Set main branch
Write-Host "🌿 Setting main branch..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://github.com/WilsonTenk/Twinklehealth-V2/settings/pages" -ForegroundColor White
    Write-Host "2. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "3. Your site will be available at: https://wilsontenk.github.io/Twinklehealth-V2/" -ForegroundColor White
} else {
    Write-Host "✗ Push failed. Please check your SSH keys or use HTTPS." -ForegroundColor Red
    Write-Host "You can also push manually using:" -ForegroundColor Yellow
    Write-Host "  git push -u origin main" -ForegroundColor White
}

