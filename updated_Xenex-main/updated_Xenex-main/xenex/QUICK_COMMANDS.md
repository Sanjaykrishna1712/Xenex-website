# 🚀 Quick Commands Reference

## Common Commands for This Project

### Start Development Server
```bash
npm run dev
```
- Starts the Next.js development server
- Access at: `http://localhost:3000`

### Build for Production
```bash
npm run build
```
- Creates optimized production build

### Start Production Server
```bash
npm start
```
- Runs the production build (after `npm run build`)

### Install Dependencies
```bash
npm install
```
- Installs all project dependencies

### Run Linter
```bash
npm run lint
```
- Checks code for errors

## ❌ Common Mistakes

### Wrong:
```bash
run dev start    # ❌ PowerShell doesn't recognize "run"
npm dev          # ❌ Missing "run"
dev start        # ❌ Missing "npm run"
```

### Correct:
```bash
npm run dev      # ✅ Correct way to start dev server
npm run build    # ✅ Correct way to build
npm start        # ✅ Correct way to start production
```

## 📝 PowerShell Notes

In PowerShell, you need to use:
- `npm run <script>` - to run npm scripts
- `npm <command>` - for npm commands directly

The `run` keyword is part of `npm run`, not a standalone command!


