// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom markdownlint rule extension
 */
const base = require("../index.cjs");
const custom = { ...base, MD013: true };
console.log("Custom line length rule toggled:", custom.MD013);
