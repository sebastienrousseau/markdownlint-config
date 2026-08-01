const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/markdownlint-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert.strictEqual(cjsConfig.ignore_front_matter, true);
  assert.strictEqual(cjsConfig.MD003.style, "atx");

  const esmModule = await import("../index.mjs");
  const esmConfig = esmModule.default;
  assert(esmConfig && typeof esmConfig === "object", "ESM config must be an object");
  assert.strictEqual(esmConfig.ignore_front_matter, true);

  console.log("✅ markdownlint-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
