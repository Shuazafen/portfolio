---
description: how to deploy the portfolio to Vercel
---

There are two main ways to deploy your Next.js portfolio to Vercel:

### Option 1: Vercel Dashboard (Recommended)
This is the easiest way as it sets up automatic deployments whenever you push to GitHub.

1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account if you haven't already.
3. Find your `portfolio` repository and click **Import**.
4. In the "Configure Project" screen, leave the defaults (Next.js preset).
5. Click **Deploy**.

### Option 2: Vercel CLI
Use this if you prefer deploying directly from your terminal.

1. Install the Vercel CLI:
```bash
npm install -g vercel
```
2. Log in to your Vercel account:
```bash
vercel login
```
3. Deploy the project:
```bash
vercel
```
4. For production deployment:
```bash
vercel --prod
```
