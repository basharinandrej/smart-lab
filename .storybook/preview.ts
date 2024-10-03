import { Preview } from '@storybook/html';
import {svgSpriteDecorator} from "./decorators/svg-sprite-decorator";
import {themeDecorator} from "./decorators/theme-decorator";

import '/global.sass'
import '/variables.sass'
import '/variables-dark.sass'
import '/variables-light.sass'
import '/fonts.sass'

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
