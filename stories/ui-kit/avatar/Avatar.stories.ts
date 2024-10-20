import {createAvatar, Props} from './Avatar';
import type {Meta} from '@storybook/html';
import { Story } from '../types';
import {defaultProps, controls} from './controls'

const meta: Meta<{}> = {
  title: 'UI-KIT/Avatar',
  render: (props: Props) => {
    return createAvatar(props)
  },
  args: defaultProps,
  argTypes: controls,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        component: 'Отображение изображение, представляющего человека, компанию или группу.'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {},
};
