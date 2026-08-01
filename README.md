<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./markdownlint-config.svg" alt="markdownlint-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/markdownlint-config</h1>

<p align="center">
  Shareable markdownlint configuration rules adhering to modern documentation standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/markdownlint-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/markdownlint-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/markdownlint-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fmarkdownlint-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/markdownlint-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/markdownlint-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/markdownlint-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Markdown Structure & Style Rules](#markdown-structure-style-rules) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/markdownlint-config

# pnpm
pnpm add -D @sebastienrousseau/markdownlint-config

# yarn
yarn add -D @sebastienrousseau/markdownlint-config

# bun
bun add -d @sebastienrousseau/markdownlint-config
```

---

## Quick Start

### In `package.json`

```json
{
  "markdownlint": "@sebastienrousseau/markdownlint-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/markdownlint-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/markdownlint-config";
export default config;
```

---

## Markdown Structure & Style Rules

Enforces consistent ATX heading style, dash unordered lists, and proper front matter handling.

### Before (Unstandardized)

```javascript
# Heading 1
* item 1
* item 2
```

### After (@sebastienrousseau/markdownlint-config Enforced)

```javascript
# Heading 1

- Item 1
- Item 2
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/markdownlint-config.git
cd markdownlint-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
