# svara.io

My personal website build with [Astro](https://astro.build/) and automatically deployed
on [Cloudflare Pages](https://pages.cloudflare.com/) using the free tier.

## Build & Deployment Automation

The project is build via standard Astro build process `astro build`. The result of building results in a completely
static bundle of files in `./dist` that can then be served with any service that supports static files serving like
Nginx, Cloudflare Pages, GitHub Pages, or AWS Pages.

The project do not contain any GitHub Action as the whole CI/CD process is automated via a CloudFlare page connection (
the repository is built by Cloudflare). The build pipeline is triggered after any commit to the `main` branch and will
result in the last version of the website being automatically deployed to production. Whe website deploys at:

- [production](https://svara.io)
- [production alias](https://svara-website.pages.dev)

# Todo

- ✅ Redirect all to home
- ✅ Add black color to Mobile Chrome Bar
- ✅ Add SEO tags for sharing (Check OpenGraph [here](https://www.opengraph.xyz/))
- ✅ Fix OG Image font not being Sen (works when compiled on CloudFlare / Linux)
- Internationalize
- Fix SEO
