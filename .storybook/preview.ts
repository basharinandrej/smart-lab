import { Preview } from '@storybook/html';
import {svgSpriteDecorator} from "./decorators/svg-sprite-decorator";
import {themeDecorator} from "./decorators/theme-decorator";

import '/styles/global.sass'
import '/styles/variables.sass'
import '/styles/variables-dark.sass'
import '/styles/variables-light.sass'
import '/styles/fonts.sass'

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
