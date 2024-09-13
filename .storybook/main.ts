import type { StorybookConfig } from '@storybook/html-vite';
import svgLoader from 'vite-svg-loader'

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(ts)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    defaultName: 'Документация',
  },
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    const mergedConfig = mergeConfig(config, {
      plugins: [svgLoader({
        defaultImport: 'raw'
        })
      ],
    })
    return mergedConfig
  },
};
export default config;
