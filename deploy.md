# Deployment Guide

## Quick Deploy Options

### 1. Netlify (Recommended)
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site will be live instantly!

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed automatically

### 3. GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

### 4. Surge.sh
1. Install Surge: `npm install -g surge`
2. Build: `npm run build`
3. Deploy: `surge dist`

## Environment Variables
No environment variables needed for this static site.

## Custom Domain
After deployment, you can add a custom domain in your hosting platform's settings.
