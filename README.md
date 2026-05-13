# Review Assigned (prototype)

FinScan-style review UI prototype (Vite + React).

## Share with your team (GitHub Pages)

1. **Create a new repository** on GitHub (any name, e.g. `review-assigned-prototype`). Do not add a README if you want to push this folder as the first commit.

2. **On your machine** (install [Git](https://git-scm.com/downloads) if needed), in this project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial prototype"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USER>/<YOUR_REPO>.git
   git push -u origin main
   ```

3. **Turn on Pages:** in the GitHub repo, go to **Settings → Pages → Build and deployment**. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

4. After the **Deploy GitHub Pages** workflow finishes (**Actions** tab), the site URL will be:

   `https://<YOUR_USER>.github.io/<YOUR_REPO>/`

   Table-only view: add `?view=table` to that URL.

5. **Later updates:** push new commits to `main`; the workflow will rebuild and redeploy automatically.

### Local preview

```bash
npm install
npm run dev
```

Build (same as CI): `npm run build` → output in `dist/`.
