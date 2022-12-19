# Astro Starter Template

Astro is an all-in-one web framework for building fast, content-focused websites. This repo is a starter template to build on Astro.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── notes/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── posts/
│   │   └── ...
│   ├── snippets/
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   └── styles/
│       └── ...
└── package.json

```

The `src/notes`, `src/posts` and `src/snippets` directories store markdown files. From here the blog content, notes and snippets are generated.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

**IMPORTANT**: Update the file content of `src/config.ts`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
