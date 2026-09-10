# `@sebastienrousseau/markdownlint-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/markdownlint-config`.

---

## Description

Shareable markdownlint configuration enforcing clean, accessible, consistent Markdown.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/markdownlint-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Front Matter Safety

- **Description**: Ignores YAML and TOML front matter blocks (`ignore_front_matter`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Heading Level Consistency

- **Description**: Enforces ATX style headings without trailing punctuation (`MD003`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Unordered List Uniformity

- **Description**: Enforces consistent dash bullet markers (`MD004`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Code Block Style

- **Description**: Enforces fenced code blocks with language identifiers (`MD046`, `MD048`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Line Length Flexibility

- **Description**: Disables rigid line length constraints for prose readability (`MD013: false`)
- **Scope**: Production & Development
- **Status**: Stable & Active

