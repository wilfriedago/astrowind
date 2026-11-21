# Personal portfolio built with Astro

A dark, single-page portfolio with four full-height sections (Introduction, Portfolio, About, Contact), plus a projects index and a page per project. Built with [Astro](https://astro.build) 7, plain CSS and a few lines of vanilla TypeScript.

## Getting started

Requires [Bun](https://bun.sh) 1.4.5 or newer.

```bash
bun install      # install dependencies
bun run dev      # start the dev server at http://localhost:4321
bun run check    # type-check .astro and .ts files
bun run build    # build the static site into ./dist
bun run preview  # serve the production build locally
```

## Editing content

| What                                   | Where                              |
| -------------------------------------- | ---------------------------------- |
| Name, intro, about tabs, email, socials | `src/data/site.ts`                 |
| Projects (one Markdown file each)      | `src/content/projects/*.md`        |
| Project frontmatter schema             | `src/content.config.ts`            |
| Colors, spacing, global styles         | `src/styles/global.css`            |

A project's frontmatter looks like this:

```yaml
title: My Project
description: One or two sentences about the project.
role: Lead Engineer
year: 2026
order: 1          # lower comes first
featured: true    # show on the home page (first 3), opens in a dialog
draft: false      # hide without deleting
tags: [Go, gRPC]                 # short line under the title
stack: [Go, gRPC, etcd]          # full list in the details
highlights:
  - One measurable result
cover: ../../assets/projects/my-project.jpg      # optional hero image
thumbnail: ../../assets/projects/my-thumb.jpg    # optional, defaults to cover
url: https://example.com          # optional, shows "Live demo"
repo: https://github.com/you/repo # optional, shows "View source"
```

The design lives in `design/main.pen` (open it in [Pencil](https://pen.dev)).

## Deploying

The site is fully static and deploys to Cloudflare (Workers static assets) from Git:

| Setting        | Value                         |
| -------------- | ----------------------------- |
| Build command  | `bun run build`               |
| Deploy command | `npx wrangler versions upload` (preview) or `npx wrangler deploy` (production) |

`wrangler.jsonc` points Cloudflare at `dist/`, serves `404.html` for unknown paths, and its `name` must match the Worker name in the Cloudflare dashboard. `public/_headers` sets long-lived caching for Astro's hashed assets.

To check a deploy locally without uploading anything: `bun run build && bunx wrangler deploy --dry-run`.

## License

This project is open source and available under the [MIT License](LICENSE.md).

> 📢 **PSA for those who want to fork or copy this repo and use it for their own site:**
>
> Please be a decent person and give me proper credit by linking back to my website! Refer to this handy [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure.
>
> © 2022 by [Wilfried AGO](https://wilfriedago.me)
