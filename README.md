# svara.io

My personal website build with [Astro](https://astro.build/) and automatically deployed
on [Cloudflare Pages](https://pages.cloudflare.com/) using the free tier.

## Watermarks

The website contains a watermark, included to let the user know which version of the website is currently looking at.
This feature is very useful for applications that are deployed by automated pipelines as testers and developers are
always aware of the code version they are using. The application watermark (present in the bottom right corner)
comprises multiple information that points to the exact codebase that is being served.

```text
v0.1.2 - none.01234567 - svara.io
```

The watermark includes the `version` value being extracted from `package.json` within
the [Footer](./src/components/Footer.tsx) component with:

```typescript
import {version} from '../../package.json'
```

followed by the Git branch name and the first 7 characters of the commit SHA1 (standard representation used by GitHub).
Those values are typically available as environment variables only at build time, making them slightly more tricky to
extract. Here we extract the environment variables within an `.astro` file header that is fully executed at build time
and storing the value to the `watermark` variable that is then used to render the static HTML file. The watermark is
thereafter permanently present in the built `index.html` file. See [index.astro](./src/pages/index.astro)

```typescript
const watermark = `${import.meta.env.CF_PAGES_BRANCH}.${import.meta.env.CF_PAGES_COMMIT_SHA.substring(0, 7)}`
```

## Open Graph Images

To improve SEO and create a nice preview when sharing the website is becoming increasingly important to include the
OpenGraph image to your website pages. An interesting feature of this project is the automated creation of such images
at build time. The images are create directly rendering a React component.

This feature is achieved with the creation of a statically compiled Astro `.png` route. This is achieved via:

- `getStaticPaths` creates all the data for the images
- The data is rendered via `createElement` React function
- The virtual dom is then converted into an image via `ImageResponse` from `@vercel/og`
- The image is returned by a statically compiled Astro `GET` route

This multi-stage process results in a collection of static `.png` images available under `./dist/og` after the build
process.

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
