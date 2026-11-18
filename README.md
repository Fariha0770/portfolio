# Fahima Akter Fariha: Personal Portfolio

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step.

## Files
- `index.html`: page shell
- `content.js`: **all your text lives here** (edit only this for normal updates)
- `style.css`: design
- `script.js`: builds the page from `content.js`
- `assets/photo.jpg`: profile photo
- `assets/resume.pdf`: résumé (the Download button uses this)

## Preview on your computer
Extract the ZIP and double-click `index.html` (open in Chrome).

## Updating later
Open `content.js` in VS Code or Notepad, change the text between quotes, save, refresh.
- Projects: each project has `tag`, `tech`, `text`, `features`, `code` (GitHub link) and `live` (website link). Leave a link as `""` to hide it. `featured: true` shows the big dark card.
- Awards: set `kind` to `"Cultural"` or `"Academic"` to place it in the right box.
- Photo / résumé: replace the files in `assets/` but keep the same names.

## Deploy free on Vercel
1. Go to github.com → **New repository** → name it e.g. `portfolio` → Public → Create.
2. Click **uploading an existing file**, drag in everything inside this folder (`index.html`, `content.js`, `style.css`, `script.js`, `README.md` and the `assets` folder) → **Commit changes**.
3. Go to vercel.com → **Sign up / Log in with GitHub**.
4. **Add New… → Project** → pick the `portfolio` repo → **Import**.
5. Framework Preset: **Other**. Leave Build Command and Output Directory empty → **Deploy**.
6. You get a link like `portfolio-xxxx.vercel.app`. To change it: Project → Settings → Domains → edit to e.g. `fahima-fariha.vercel.app`.

After that, every time you change a file on GitHub, Vercel updates the site automatically in about a minute.

## Before publishing
Double-check CGPA, award details, project descriptions and contact details. Only publish a phone number you are comfortable sharing publicly.
