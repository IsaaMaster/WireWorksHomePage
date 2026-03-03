# WeaveWorks

Landing page for WeaveWorks — local business automation.

## Deploy to Railway

1. Push this folder to a GitHub repository
2. Go to [railway.app](https://railway.app) and click **New Project**
3. Select **Deploy from GitHub repo** and choose your repo
4. Railway will auto-detect the Node.js app and deploy it
5. Go to **Settings → Networking → Generate Domain** to get your public URL

That's it. No environment variables needed.

## Local Development

```bash
npm install
npm start
```

Then open http://localhost:3000

## File Structure

```
weaveworks/
├── public/
│   ├── index.html       ← The full page
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── server.js            ← Express static server
├── package.json
├── railway.toml         ← Railway deploy config
└── .gitignore
```

## Customization

- **Founder photo**: Replace the placeholder in the About section of `public/index.html`
- **Contact form**: Wire up the form in `public/js/main.js` to a service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) (both have free tiers)
- **Copy**: All text lives in `public/index.html` — easy to find and edit
