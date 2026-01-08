# Large Files Setup Guide

## Problem
GitHub has a 100MB file size limit. Large video files (like `xdrive video.mov` - 166MB) cannot be pushed directly to GitHub.

## Solution Options

### Option 1: Exclude Large Files from Git (Recommended)
Large video files are now in `.gitignore`. They won't be tracked by Git.

**To use videos in your website:**
1. Keep video files locally in `public/` folder
2. For production, upload videos to:
   - **Cloud storage** (AWS S3, Google Cloud Storage, Azure Blob)
   - **CDN** (Cloudflare, Vercel Blob)
   - **Video hosting** (YouTube, Vimeo, Cloudinary)
3. Update video paths in your code to use hosted URLs

### Option 2: Use Git LFS (Large File Storage)
If you need to track large files in Git:

```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.mov"
git lfs track "*.mp4"
git lfs track "public/*.mov"
git lfs track "public/*.mp4"

# Add .gitattributes
git add .gitattributes

# Commit and push
git add .
git commit -m "Add large files with LFS"
git push
```

### Option 3: Compress Videos
Compress large videos before adding to Git:

```bash
# Use ffmpeg to compress
ffmpeg -i "xdrive video.mov" -vcodec libx264 -crf 28 -preset slow "xdrive-video-compressed.mp4"
```

## Current Setup
- Large video files are in `.gitignore`
- They won't be pushed to GitHub
- Website will work locally with videos in `public/` folder
- For production, use hosted video URLs

## Files Currently Ignored
- `*.mov` files
- `*.mp4` files in root
- `xdrive video.mov`
- `public/xdrive-video.mov`
- Large video files

## Next Steps
1. **For local development:** Keep videos in `public/` folder
2. **For GitHub:** Large files are excluded, code will push successfully
3. **For production:** Upload videos to cloud storage and update URLs in code

