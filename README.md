# Shadowvale Clan Site

A Git-ready starter website for the Shadowvale OSRS clan.

## Current features

- Shadowvale themed homepage
- About page section
- Clan ranks section
- PvM and bossing section
- Raid teaching section
- Public event calendar list
- Discord page section
- Staff login demo
- Staff dashboard for creating and deleting events
- Browser localStorage event saving for testing
- Vite project structure

## Demo staff login

```txt
Username: staff
Password: shadowvale
```

This is only for local/demo use. Real staff accounts should be added later with Supabase authentication.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build for hosting

```bash
npm run build
npm run preview
```

## Put it on GitHub

```bash
git init
git add .
git commit -m "Initial Shadowvale clan site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shadowvale-clan-site.git
git push -u origin main
```

## Recommended next upgrades

1. Convert events from localStorage to Supabase database.
2. Replace demo staff login with Supabase Auth.
3. Add real calendar month view.
4. Add event signup/RSVP system.
5. Add Discord webhook posting when staff publish events.
6. Add image uploads for event banners and gallery.
7. Split sections into separate pages with routing.

## Project structure

```txt
shadowvale-clan-site/
├─ index.html
├─ package.json
├─ README.md
├─ .gitignore
├─ public/
├─ docs/
└─ src/
   ├─ main.js
   └─ styles.css
```


## Open the site

You can open `index.html` directly in your browser for the static demo.

For development with Vite:

```bash
npm install
npm run dev
```

Demo staff login: `staff` / `shadowvale`
