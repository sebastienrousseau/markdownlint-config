// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

export interface MarkdownlintConfig {
  [key: string]: unknown;
}

declare const config: MarkdownlintConfig;
export default config;
