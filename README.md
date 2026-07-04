# Shadowvale exact hero pack

Copy these files into your project:

- `src/components/home/Hero.tsx`
- `src/app/page.tsx`
- `src/components/layout/Footer.tsx`
- `public/hero/shadowvale-hero-reference.png`

Then append the contents of:

- `src/app/globals-addition.css`

to the bottom of your existing `src/app/globals.css`.

Run:

```bash
npm run dev
```

This uses the approved mockup as the actual hero background so the layout matches the look much more closely. Later, replace `shadowvale-hero-reference.png` with clean separated production assets when you have them.
