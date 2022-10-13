module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  framework: "@storybook/react",
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = '/ignite-lab-design-system/'
    }
    return config;
  }
}
