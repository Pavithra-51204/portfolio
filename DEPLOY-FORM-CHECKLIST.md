# Contact form — post-deploy checklist

Netlify Forms only activates on a real Netlify deploy. It works by scanning
the **built HTML** for a `<form data-netlify="true">` tag at deploy time — not
by running any code — so it can never be tested on `astro dev` or
`astro preview` locally. A POST to `/thank-you/` on either of those returns a
plain 404, even though the setup is correct; that's expected, not a bug. If
you want to test the actual submission flow before going live, run
`netlify dev` instead of the Astro dev server — it proxies form handling
through Netlify's local emulator.

Do these steps in the Netlify UI after your **first** deploy:

## 1. Confirm form detection ran

- Netlify dashboard → your site → **Forms**.
- You should see a form named **contact** listed within a minute or two of
  the deploy finishing. If it's not there:
  - Confirm the deploy actually built from `dist/` (check the deploy log for
    "Forms" — Netlify logs how many forms it detected during the build).
  - Re-check that `data-netlify="true"` is still on the `<form>` tag — run
    `npm run build && grep -o 'data-netlify="true"' dist/index.html` locally;
    it should print one match.

## 2. Verify a real submission lands

- Submit the live contact form on the deployed URL.
- Dashboard → **Forms** → **contact** → you should see the submission appear
  within a few seconds.

## 3. Turn on email notifications

By default, Netlify stores submissions in the dashboard only — it does
**not** email you unless you add a notification.

- Dashboard → your site → **Forms** → **Settings and usage** (or the "..."
  menu on the **contact** form) → **Add notification** → **Email
  notification**.
- Set the recipient to `pavithra.manogaran2004@gmail.com`.
- Save, then submit the form again from the live site to confirm the email
  actually arrives (check spam on the first one).

## 4. Optional — reCAPTCHA

Not set up here on purpose (the brief asked for honeypot only, no
third-party captcha). The `bot-field` honeypot is already wired up
(`data-netlify-honeypot="bot-field"` on the form, plus the hidden
`bot-field` input) — Netlify silently drops submissions where that field is
filled in, which is normal bot behavior and invisible to real users.
