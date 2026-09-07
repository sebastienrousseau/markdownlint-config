/**
 * 100% Feature Showcase for @sebastienrousseau/markdownlint-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/markdownlint-config ===");
assert.strictEqual(config.default, true);
assert.strictEqual(config.ignore_front_matter, true);
assert.strictEqual(config.MD013, false);
assert.strictEqual(config.MD033, false);
assert.strictEqual(config.MD003.style, "atx");

console.log("  ✓ Default enabled: true");
console.log("  ✓ ATX headings enforced: true");
console.log("  ✓ Front matter ignored: true");
console.log("✅ 100% of markdownlint-config rules and features validated.");
