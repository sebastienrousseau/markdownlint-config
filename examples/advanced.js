/**
 * Advanced custom markdownlint rule extension
 */
const base = require("../index.cjs");
const custom = { ...base, MD013: true };
console.log("Custom line length rule toggled:", custom.MD013);
