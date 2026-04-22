# SiteSimple go-live + Stripe prep (2026-02-18)

## What was assessed
- Project is static HTML in `projects/sitesimple-site`.
- Main pages: `index.html`, `signup.html`.
- No framework build step required.
- Local preview command: `node serve.js` (serves on 127.0.0.1:3463).
- Production domain `sitesimple.au` currently points to `27.124.125.171` (CrazyDomains) and serves a cert for `*.crazydomains.com` (SSL mismatch on `sitesimple.au`).

## What was done
1. Created Cloudflare Pages project: `sitesimple`.
2. Deployed current site to Pages successfully.
   - Latest deployment URL: `https://12beee62.sitesimple.pages.dev`
3. Updated homepage CTAs to point to signup:
   - Header CTA -> `/signup.html`
   - Hero primary CTA -> `/signup.html`
   - Pricing CTA -> `/signup.html`
4. Added Stripe post-checkout destination pages:
   - `success.html`
   - `cancel.html`

## Stripe status
- Existing signup checkout CTA still uses placeholder:
  - `https://buy.stripe.com/placeholder`
- No Stripe credentials were available in environment (API keys/webhook secret missing).
- No backend webhook handler exists in this static site project.

## What blocks full go-live on `sitesimple.au`
1. Domain DNS is not in Cloudflare account used for deployment (zone not present).
2. Because of that, custom domain binding + SSL issuance on Pages for `sitesimple.au` cannot be completed here.
3. Stripe payment link/product/price/webhook could not be created without Stripe account credentials/dashboard access.

## Commands for next run
```bash
# deploy current site to Cloudflare Pages
cd /home/marc/jarvis/projects/sitesimple-site
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... npx wrangler pages deploy . --project-name sitesimple --commit-dirty=true
```

## Minimal Marc action checklist
1. **DNS / domain**
   - Move `sitesimple.au` DNS to Cloudflare (or point DNS records to Pages target and complete verification in Cloudflare dashboard).
   - Attach custom domains: `sitesimple.au` and `www.sitesimple.au` to the `sitesimple` Pages project.
   - Verify SSL status becomes Active for both hostnames.
2. **Stripe setup**
   - In Stripe (test mode first), create:
     - Product: `SiteSimple`
     - Recurring monthly price: `A$29.00`
   - Create a Payment Link using that price.
   - Set Payment Link redirect URLs:
     - Success: `https://sitesimple.au/success.html`
     - Cancel: `https://sitesimple.au/cancel.html`
   - Replace placeholder in `signup.html` with real payment link.
3. **Webhook (optional until backend exists)**
   - If you want automated onboarding events, add a backend endpoint first (Worker/API), then configure Stripe webhook to it.
   - Store webhook secret securely in runtime env (not in HTML).
4. **Live-mode cutover**
   - Confirm tax settings, business details, payout bank account, statement descriptor.
   - Switch test payment link to live payment link after one successful end-to-end test mode checkout.
