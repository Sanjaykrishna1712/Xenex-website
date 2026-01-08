# Push to GitHub - Step by Step Guide

## Problem Solved
Large video files (166MB+) are now excluded from Git via `.gitignore`.

## Steps to Push to GitHub

### 1. Navigate to the project directory
```powershell
cd "C:\Users\19nee\OneDrive\Desktop\updated  xenex\xenex"
```

### 2. Initialize Git (if not already done)
```powershell
git init
```

### 3. Remove large files from Git tracking (if already added)
```powershell
git rm --cached "xdrive video.mov" 2>$null
git rm --cached "public/xdrive-video.mov" 2>$null
git rm --cached "*.mov" 2>$null
git rm --cached "*.mp4" 2>$null
```

### 4. Add all files (large videos will be ignored)
```powershell
git add .
```

### 5. Commit your changes
```powershell
git commit -m "Initial commit - XENEX website"
```

### 6. Add remote repository (replace with your GitHub repo URL)
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### 7. Push to GitHub
```powershell
git push -u origin main
```

## Alternative: Use Git LFS for Large Files

If you want to track large videos in Git:

```powershell
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.mov"
git lfs track "*.mp4"

# Add .gitattributes
git add .gitattributes

# Now add and commit
git add .
git commit -m "Add files with LFS"
git push
```

## Files Excluded from Git
- `xdrive video.mov` (166MB - too large)
- `public/xdrive-video.mov`
- All `.mov` and `.mp4` files

## Website Will Still Work
- Videos in `public/` folder work locally
- For production, upload videos to cloud storage
- Update video URLs in code to use hosted links

