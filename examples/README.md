# `@sebastienrousseau/markdownlint-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/markdownlint-config`.

---

## Example Suite Overview

| File                           | Type      | Feature Coverage                       | Command                     |
| :----------------------------- | :-------- | :------------------------------------- | :-------------------------- |
| [`basic.js`](./basic.js)       | CommonJS  | Standard default configuration import  | `node examples/basic.js`    |
| [`advanced.js`](./advanced.js) | CommonJS  | Custom extension and rule overrides    | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs)         | ES Module | Native ESM consumption via `import`    | `node examples/esm.mjs`     |
| [`features.js`](./features.js) | CommonJS  | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Front Matter Safety**: Ignores YAML and TOML front matter blocks (`ignore_front_matter`)
- [x] **Heading Level Consistency**: Enforces ATX style headings without trailing punctuation (`MD003`)
- [x] **Unordered List Uniformity**: Enforces consistent dash bullet markers (`MD004`)
- [x] **Code Block Style**: Enforces fenced code blocks with language identifiers (`MD046`, `MD048`)
- [x] **Line Length Flexibility**: Disables rigid line length constraints for prose readability (`MD013: false`)
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
