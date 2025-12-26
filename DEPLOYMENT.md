# 🚀 Deployment Guide - berrylradianh.github.io

## Quick Deploy

To deploy your React portfolio to **berrylradianh.github.io**, run:

```bash
npm run deploy
```

That's it! Your site will be live at https://berrylradianh.github.io

---

## How It Works

### 1. **Local Development**
```bash
npm run dev
```
- Runs on http://localhost:5173
- Hot reload for instant changes
- Development mode with source maps

### 2. **Production Deployment**
```bash
npm run deploy
```

This command does the following:
1. **Builds** your React app (`npm run build`)
   - Compiles TypeScript
   - Bundles with Vite
   - Optimizes assets
   - Creates `dist/` folder
   
2. **Deploys** to GitHub Pages (`gh-pages -d dist`)
   - Pushes `dist/` contents to `gh-pages` branch
   - GitHub Pages serves from that branch
   - Usually live in 1-2 minutes

---

## First-Time Setup

### Step 1: Configure GitHub Repository

Go to your repository settings:
```
https://github.com/berrylradianh/berrylradianh.github.io/settings/pages
```

Set:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages`
- **Folder**: `/ (root)`

### Step 2: Deploy
```bash
npm run deploy
```

### Step 3: Wait
- GitHub Pages builds your site
- Usually takes 1-2 minutes
- Check: https://berrylradianh.github.io

---

## Deployment Process Explained

```
┌─────────────────────────────────────────────────┐
│ 1. You edit code in src/                       │
│    → Save files                                 │
│    → See changes instantly (dev mode)           │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 2. Ready to deploy?                             │
│    → Run: npm run deploy                        │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 3. Build process (automatic)                    │
│    → TypeScript compiles to JavaScript          │
│    → Vite bundles everything                    │
│    → Creates optimized dist/ folder             │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 4. Deploy process (automatic)                   │
│    → gh-pages pushes dist/ to gh-pages branch   │
│    → Git commits to GitHub                      │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ 5. GitHub Pages serves your site                │
│    → Reads from gh-pages branch                 │
│    → Deploys to berrylradianh.github.io        │
│    → Live in 1-2 minutes! 🎉                    │
└─────────────────────────────────────────────────┘
```

---

## Commands Reference

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `npm run dev` | Start local dev server | While coding |
| `npm run build` | Build production files | Test build locally |
| `npm run preview` | Preview production build | Test before deploy |
| `npm run deploy` | Deploy to GitHub Pages | Publish to live site |

---

## Deployment Checklist

Before deploying, make sure:

- ✅ Code works locally (`npm run dev`)
- ✅ No TypeScript errors
- ✅ All images in `public/assets/`
- ✅ Updated project info in components
- ✅ Tested on mobile view
- ✅ Git committed your changes (recommended)

Then run:
```bash
npm run deploy
```

---

## Troubleshooting

### Issue: "Permission denied" or "failed to push"

**Solution**: Make sure you're logged into GitHub
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Issue: Site shows 404 after deployment

**Solutions**:
1. Check GitHub Pages settings (gh-pages branch selected)
2. Wait 2-3 minutes for deployment to complete
3. Clear browser cache
4. Try incognito/private window

### Issue: Changes not showing up

**Solutions**:
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Check if deployment succeeded: `git log gh-pages`

### Issue: Build fails

**Check**:
```bash
npm run build
```
Fix any TypeScript or build errors before deploying

---

## Workflow Examples

### Daily Development
```bash
# 1. Start dev server
npm run dev

# 2. Edit code, see live changes

# 3. Happy with changes? Deploy!
npm run deploy
```

### After Major Changes
```bash
# 1. Test build locally
npm run build
npm run preview

# 2. Everything good? Deploy!
npm run deploy

# 3. Commit to git
git add .
git commit -m "Updated portfolio"
git push origin master
```

---

## Understanding Your Branches

Your repository will have two branches:

### `master` (or `main`) - Source Code
- Contains your React source code
- All your `.tsx`, `.ts`, `.css` files
- Development files
- This is what you edit

### `gh-pages` - Deployed Site
- Auto-generated by `npm run deploy`
- Contains built files (HTML, CSS, JS)
- This is what GitHub Pages serves
- **Don't edit this directly!**

---

## Custom Domain (Optional)

Want to use a custom domain like `www.yourname.com`?

### Step 1: Add CNAME file
Create `public/CNAME` with your domain:
```
www.yourname.com
```

### Step 2: Configure DNS
Add DNS records at your domain provider:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   berrylradianh.github.io
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: GitHub Settings
Enable custom domain in repository settings

---

## Performance Tips

After deployment, check performance:

1. **Lighthouse Audit** (Chrome DevTools)
   - Performance score
   - SEO optimization
   - Accessibility

2. **GTmetrix** - https://gtmetrix.com
   - Page load time
   - Asset optimization

3. **Google PageSpeed** - https://pagespeed.web.dev
   - Core Web Vitals
   - Mobile performance

---

## Updating Your Portfolio

### Adding a New Project

1. Edit `src/components/Projects.tsx`
2. Add image to `public/assets/`
3. Test locally: `npm run dev`
4. Deploy: `npm run deploy`

### Changing Colors

1. Edit `tailwind.config.js`
2. Update CSS in `src/index.css`
3. Test: `npm run dev`
4. Deploy: `npm run deploy`

### Adding New Section

1. Create component in `src/components/`
2. Import in `src/App.tsx`
3. Test: `npm run dev`
4. Deploy: `npm run deploy`

---

## Rollback Deployment

Made a mistake? Rollback to previous version:

```bash
# View deployment history
git log gh-pages

# Rollback to specific commit
git checkout gh-pages
git reset --hard <commit-hash>
git push origin gh-pages --force
```

---

## Monitoring Deployments

### GitHub Actions (Optional - Auto Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Now every push to `master` auto-deploys!

---

## FAQ

**Q: How long does deployment take?**  
A: Usually 1-2 minutes after running `npm run deploy`

**Q: Can I deploy from any computer?**  
A: Yes, as long as you have the repository cloned and npm installed

**Q: Do I need to commit to git before deploying?**  
A: No, but it's recommended for backup

**Q: What if I want to unpublish?**  
A: Delete the `gh-pages` branch or disable GitHub Pages in settings

**Q: Can I deploy to a subfolder?**  
A: Yes, change `base: '/'` to `base: '/subfolder/'` in `vite.config.ts`

---

## Summary

**Development:**
```bash
npm run dev  # Work locally at http://localhost:5173
```

**Deployment:**
```bash
npm run deploy  # Push to https://berrylradianh.github.io
```

**That's it!** Your React portfolio is now deployed! 🚀
