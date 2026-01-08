# Quick Start Guide

## ✅ Fixed! You can now run npm commands from either directory!

The project structure is:
```
updated  xenex/       ← Root directory (has package.json that delegates to xenex/)
  ├── package.json    ← Workspace root (delegates to xenex/)
  └── xenex/          ← Main project directory
      ├── package.json
      ├── app/
      └── ...
```

## Common Commands

### From the root directory (`updated  xenex`):
```powershell
cd "C:\Users\19nee\OneDrive\Desktop\updated  xenex"

npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

### Or from the xenex subdirectory:
```powershell
cd "C:\Users\19nee\OneDrive\Desktop\updated  xenex\xenex"

npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Troubleshooting

If you get "Missing script" errors:
1. Make sure you're in either the root directory or the `xenex` subdirectory
2. Check that `package.json` exists in your current directory
3. Run `npm run` to see available scripts
4. If issues persist, try: `cd xenex && npm run build`

