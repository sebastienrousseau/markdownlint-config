# `@sebastienrousseau/markdownlint-config` Features & Capabilities

An exhaustive overview covering **100% of the features, rules, and capabilities** provided by `@sebastienrousseau/markdownlint-config`.

---

## Feature Matrix

| Feature | Scope | Status | Guarantee |
| :--- | :--- | :--- | :--- |
| **Front Matter Safety** | Core | Active | Ignores YAML and TOML front matter blocks (`ignore_front_matter`) |
| **Heading Level Consistency** | Core | Active | Enforces ATX style headings without trailing punctuation (`MD003`) |
| **Unordered List Uniformity** | Core | Active | Enforces consistent dash bullet markers (`MD004`) |
| **Code Block Style** | Core | Active | Enforces fenced code blocks with language identifiers (`MD046`, `MD048`) |
| **Line Length Flexibility** | Core | Active | Disables rigid line length constraints for prose readability (`MD013: false`) |
| **Zero Dependencies** | Packaging | Active | 0 external npm runtime dependencies |
| **Dual Packaging** | Distribution | Active | Full CommonJS and ESM interoperability |
| **TypeScript Types** | Typings | Active | Bundled `index.d.ts` declarations |

---

## Feature Deep Dive

### 1. Front Matter Safety

Ignores YAML and TOML front matter blocks (`ignore_front_matter`). Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 2. Heading Level Consistency

Enforces ATX style headings without trailing punctuation (`MD003`). Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 3. Unordered List Uniformity

Enforces consistent dash bullet markers (`MD004`). Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 4. Code Block Style

Enforces fenced code blocks with language identifiers (`MD046`, `MD048`). Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 5. Line Length Flexibility

Disables rigid line length constraints for prose readability (`MD013: false`). Designed to guarantee deterministic behavior across all development and continuous integration environments.

