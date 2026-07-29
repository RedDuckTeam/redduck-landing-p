<p align="center">
  <a href="https://redduck.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/redduck-logo-dark.svg">
      <img src=".github/assets/redduck-logo.svg" alt="RedDuck" width="240">
    </picture>
  </a>
</p>

<h1 align="center">RedDuck Landing</h1>

<p align="center">
  The official landing page of <b>RedDuck Limited</b> — where ideas ship and ducks don't quack, they build.</br>
  Fast, animated and a little bit fancy. Built to load quick, look sharp and tell people what we do.
</p>

## Built with

| Area | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start), React 19, TypeScript |
| Animation | [GSAP](https://gsap.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Email | [Resend](https://resend.com/) |

## Getting started

> Only use **npm** to install or run the project.

```bash
npm install
npm run dev
```

The site will be waddling at `http://localhost:3000`.

## Scripts

| Command             | What it does                |
| ------------------- | --------------------------- |
| `npm run dev`       | Start the dev server        |
| `npm run build`     | Build for production        |
| `npm run start`     | Serve the production build  |
| `npm run lint`      | Lint the code               |
| `npm run typecheck` | Type-check without emitting |

## Email setup

The contact form sends emails via an SMTP server, configured in your `.env` file.

Where to get credentials: https://www.youtube.com/watch?v=18qA61bpfUs

## License

[MIT](LICENSE) © RedDuck Limited
