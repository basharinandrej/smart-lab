import { Preview } from '@storybook/html';
import {svgSpriteDecorator} from "./decorators/svg-sprite-decorator";
import {themeDecorator} from "./decorators/theme-decorator";

import '/styles/global.css'
import '/styles/variables-colors.css'
import '/styles/fonts.css'

const preview: Preview = {
  tags: ['autodocs'],

  decorators: [ themeDecorator, svgSpriteDecorator ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
