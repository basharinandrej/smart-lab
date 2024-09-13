import { Preview } from '@storybook/html';
import {themeDecorator} from "./decorators/theme-decorator";

import '/variables.sass'
import '/variables-dark.sass'
import '/variables-light.sass'

const preview: Preview = {
  tags: ['autodocs'],

  decorators: [ themeDecorator ],

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
