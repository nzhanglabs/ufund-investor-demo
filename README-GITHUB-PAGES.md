# GitHub Pages Publish (UFUND Demo)

## 1) Initialize repo locally
```bash
git init
git checkout -b main
git add .
git commit -m "Initial investor access demo"
```

## 2) Create a new empty GitHub repo
Create on GitHub UI, for example: `ufund-investor-demo`

## 3) Connect and push
```bash
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

## 4) Enable Pages deployment
1. Open GitHub repo -> `Settings` -> `Pages`
2. Under `Build and deployment`, choose `Source: GitHub Actions`
3. Wait 1-3 minutes for workflow `Deploy static site to GitHub Pages`

## 5) Open your live site
Your public URL will be:
`https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

Example deep link:
`https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/index.html?role=member`
