# openbusinessprotocol.org

Landing site for the [Open Business Protocol (OBP)](https://openbusinessprotocol.org) — an open protocol for agent-readable, human-owned business data.

## Stack

- [Astro](https://astro.build) v4 (static site)
- [Tailwind CSS](https://tailwindcss.com) v3
- Deployed via Cloudflare Pages

## Development

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Deployment

Deployed to `openbusinessprotocol.org` via Cloudflare Pages.

This directory is maintained as a git subtree of [Flapbase/flapbase-cloud](https://github.com/Flapbase/flapbase-cloud):

```bash
# Push updates from monorepo to this repo
git subtree push --prefix=apps/obp-org obp-org main
```

## License

MIT
