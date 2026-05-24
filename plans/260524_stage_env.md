# Stage Environment

Add a stage deployment lane alongside the existing prod deploy, without standing up a second Worker.

## Goals

- Keep `main` → `svara.io` production deploy untouched.
- Deploy the `stage` branch as a preview version with alias `stage`.
- Deploy any `stage/{name}` branch as a preview version with alias `stage-{sanitized-name}`.
- No custom domain on stage: reachable only via Cloudflare preview URLs.

## Topology

Single Worker (`svara-website`), single `wrangler.jsonc`, single secrets/bindings set. Stage uses Cloudflare Workers **version aliases** + **preview URLs**; prod uses the active deployment on the custom domain.

Implication: all preview versions share prod bindings. Acceptable today (static assets, no stateful backend). If/when stateful bindings (KV, D1, R2 writes) are added, revisit and split envs.

## Wrangler config

`wrangler.jsonc`:

- Flip `"preview_urls": false` → `"preview_urls": true`.
- Leave `routes` (svara.io custom domain) and everything else unchanged. Custom-domain routes only attach to the active deployment, so preview versions stay off `svara.io`.

## Deploy commands

| Branch ref           | Command                                                          | Result                                  |
| -------------------- | ---------------------------------------------------------------- | --------------------------------------- |
| `main`               | `wrangler deploy`                                                | Prod on `svara.io`                      |
| `stage`              | `wrangler versions upload --preview-alias stage`                 | `stage-svara-website.<sub>.workers.dev` |
| `stage/{name}`       | `wrangler versions upload --preview-alias stage-{sanitized}`     | `stage-{sanitized}-svara-website…`      |

Pass `--message "$VITE_WATERMARK"` on every upload/deploy so the CF dashboard shows the watermark.

## Alias sanitization (`stage/{name}` → `stage-{sanitized}`)

Cloudflare preview alias = DNS label: lowercase, `[a-z0-9-]`, max 63 chars, no leading/trailing hyphen.

Rules applied to `{name}`:

1. Lowercase.
2. Replace any run of non-`[a-z0-9]` with a single `-`.
3. Trim leading/trailing `-`.
4. Prefix with `stage-`.
5. Truncate to 63 chars; re-trim trailing `-`.

Examples:

- `stage/foo` → `stage-foo`
- `stage/Feature_X.2` → `stage-feature-x-2`
- `stage/JIRA-123/fix bug` → `stage-jira-123-fix-bug`

## GitHub Actions workflow

Single file (`.github/workflows/deploy.yml`), single job. Changes vs current:

- `on.push.branches`: `[main, stage, 'stage/**']`
- Add `concurrency` block:
  ```yaml
  concurrency:
    group: deploy-${{ github.ref }}
    cancel-in-progress: true
  ```
- New step "Compute deploy command" that, from `github.ref_name`, sets a `command` output:
  - `main` → `deploy`
  - `stage` → `versions upload --preview-alias stage --message "<watermark>"`
  - `stage/*` → `versions upload --preview-alias stage-<sanitized> --message "<watermark>"`
- Pass that output to `cloudflare/wrangler-action@v4` via its `command` input.

Build step (and watermark) stays identical across envs — branch name already flows into the watermark via the `BRANCH.SHA7.RUN` format.

## Out of scope (deferred)

- PR preview deploys from forks/PRs.
- Automatic cleanup of stale aliases when a `stage/*` branch is deleted. todo: revisit if alias count becomes noisy in the CF dashboard.
- Per-env secrets/bindings. todo: split envs when a stateful backend is introduced.
- Basic-auth / IP allowlist on preview URLs. todo: add if stage content must not be publicly indexable.
