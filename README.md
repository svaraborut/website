# svara.io

My personal website build with [React Router v7](https://reactrouter.com/) and automatically deployed on [Cloudflare Pages](https://pages.cloudflare.com/) using the free tier.

## Watermarks

The website contains a watermark, included to let the user know which version of the website is currently looking at. This feature is very useful for applications that are deployed by automated pipelines as testers and developers are always aware of the code version they are using. The application watermark (present in the bottom right corner) comprises multiple information that points to the exact codebase that is being served.

```text
v0.1.2 - none.01234567.7
```

The watermark is generated using my [GitHub Action Watermark Plugin](https://github.com/svaraborut/watermark). The watermark is generated at build time and bundled via an environment variable `VITE_WATERMARKS` using Vite. The watermark is thereafter permanently present in the built `index.html` file.

## Open Graph Images

To improve SEO and create a nice preview when sharing the website is becoming increasingly important to include the OpenGraph image to your website pages. An interesting feature of this project is the automated creation of such images at build time. The images are create directly rendering a React component.

This feature is achieved with the creation of a statically compiled `.png` route. This is achieved via:

- The data is rendered via `createElement` React function
- The virtual dom is then converted into an image via `ImageResponse` from `@vercel/og`
- The image is returned by a statically compiled `GET` route

This multi-stage process results in a collection of static `.png` images available under `./dist/og` after the build process.

## Build & Deployment Automation

The project is build via standard React Router build process `react-router build`. The result of building results in a completely static bundle of files in `./build/client` that can then be served with any service that supports static files serving like Nginx, Cloudflare Pages, GitHub Pages, or AWS Pages.

The project includes a [GitHub Action](.github/workflows/deploy.yml) to perform a multi-stage build process where watermarks are included. The build pipeline is triggered after any commit to the `main` branch and will result in the last version of the website being automatically deployed to production. Whe website deploys at:

- [production](https://svara.io)

# Todo

- ✅ Add black color to Mobile Chrome Bar
- ✅ Add SEO tags for sharing (Check OpenGraph [here](https://www.opengraph.xyz/))
- ✅ Fix OG Image font not being Sen (works when compiled on CloudFlare / Linux)
- ❓ Redirect all to home
- Internationalize
- Fix SEO
