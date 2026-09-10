// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/* eslint-disable camelcase -- markdownlint's own option names are snake_case
   (ignore_front_matter, ul_single, ol_single). They are part of its public
   schema and must be spelled exactly; a camelCase key would be ignored. */

/**
 * Shareable markdownlint configuration.
 *
 * @type {import('markdownlint').Configuration}
 */
module.exports = {
  default: true,
  ignore_front_matter: true,
  MD003: {
    style: "atx",
  },
  MD004: {
    style: "dash",
  },
  MD007: {
    indent: 4,
  },
  MD012: false,
  MD013: false,
  MD029: {
    style: "one",
  },
  MD030: {
    ul_single: 1,
    ol_single: 2,
    ul_multi: 2,
    ol_multi: 1,
  },
  MD033: false,
  MD035: {
    style: "---",
  },
  MD041: false,
  MD044: false,
  MD046: false,
  MD048: {
    style: "backtick",
  },
};
