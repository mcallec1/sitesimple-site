# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

SiteSimple serves Australian small-business owners whose existing websites are outdated. They use the marketing site to understand the offer, judge whether SiteSimple is credible, inspect real examples, and request a private preview of a rebuilt website.

## Product Purpose

SiteSimple rebuilds outdated small-business websites into polished static sites. A business owner can review the finished rebuild before deciding whether to keep it. Success means the owner understands the offer and its conditions, trusts the evidence, requests a preview, and can move to signup without uncertainty if they decide to keep the site.

## Positioning

SiteSimple builds the website first and lets the owner decide after seeing it. Reviewing the rebuild costs nothing. If the owner keeps it, the service costs $29 per month including GST and covers hosting, support, technical upkeep, and ongoing changes, with no upfront fee or lock-in.

## Operating Context

The owner submits their current website address and contact details. SiteSimple uses the information already available on that website to prepare a private preview, sends the owner a link, and makes requested changes while they decide. If the owner keeps the site, signup and recurring payment use Stripe, SiteSimple helps point the owner's existing domain to the replacement site, and ongoing support is handled by email.

## Capabilities and Constraints

- The marketing site captures preview requests through `https://api.sitesimple.au/submit`.
- The signup flow uses Stripe for the recurring $29 monthly payment.
- The standard offer covers a small-business website rebuilt from existing content. Shops, booking systems, or other paid services must be assessed before the owner decides.
- The owner's domain remains theirs, their existing email setup should remain intact, and their business content remains theirs.
- Product claims, prices, examples, testimonials, statistics, credentials, and delivery promises must be grounded in real evidence. Future work must not invent proof.
- The current website is a static HTML, CSS, and JavaScript implementation served without a framework build step.

## Brand Commitments

- Render the name exactly as `SiteSimple`.
- Preserve Marc's plain-speaking, conversational voice and the identity of a Melbourne-based owner-operated service.
- Explain the offer and its conditions directly, without agency jargon, hype, or hidden qualifications.
- Preserve the existing SiteSimple brand mark at `assets/sitesimple-renewal-mark-original.png` unless Marc explicitly replaces it.

## Evidence on Hand

- Ten real before-and-after website comparisons are stored under `portfolio/proof/` and presented on the homepage.
- Additional portfolio imagery is stored under `portfolio/`.
- The SiteSimple brand mark and email logo are stored under `assets/`.
- The homepage and signup page contain the current offer, pricing, ownership, hosting, support, and cancellation explanations.
- No testimonials, performance metrics, awards, certifications, or quantified customer outcomes are established in this repository; future work must not fabricate them.

## Product Principles

1. Let finished work make the case before asking for payment.
2. Make the price, inclusions, limitations, ownership, and cancellation terms easy to understand.
3. Use real before-and-after evidence instead of unsupported marketing claims.
4. Reduce the effort and risk felt by a busy small-business owner.
5. Keep every interaction personal, direct, and accountable to Marc and SiteSimple.
