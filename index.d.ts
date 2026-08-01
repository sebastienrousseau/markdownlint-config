export interface MarkdownlintConfig {
  default?: boolean;
  ignore_front_matter?: boolean;
  [key: string]: unknown;
}

declare const config: MarkdownlintConfig;
export default config;
