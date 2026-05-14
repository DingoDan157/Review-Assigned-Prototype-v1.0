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

   The build sets the correct asset base from the repo name, so the app should load with or without a trailing slash. Table-only: add `?view=table`.

5. **Later updates:** push new commits to `main`; the workflow will rebuild and redeploy automatically.

### Local preview (including Cursor Simple Browser)

```bash
npm install
npm run dev
```

Open **`http://127.0.0.1:5173/`** or **`http://localhost:5173/`** (the dev server listens on all interfaces).

Test a production build like GitHub serves it:

```bash
npm run build
npm run preview
```

Then open **`http://127.0.0.1:4173/`** or **`http://localhost:4173/`**.

To preview a **GitHub Pages–style** build locally (subpath under your repo name):

```bash
# Windows PowerShell
$env:VITE_BASE_PATH="/YOUR_REPO_NAME/"; npm run build; npm run preview
```

### Blank white page on GitHub Pages

1. Confirm the **Actions** workflow completed successfully.
2. In the browser, press **F12 → Network**, reload, and check whether **`index-*.js`** or **`index-*.css`** is **404** (wrong path). This project includes **`public/.nojekyll`** so GitHub does not run Jekyll on your files.

Build (same as CI): `npm run build` → output in `dist/`.
