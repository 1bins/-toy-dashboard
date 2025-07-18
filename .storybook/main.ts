import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/nextjs", // <- Vite 아닌 Webpack preset 사용
    options: {}
  },
  staticDirs: ["../public"],
};
export default config;