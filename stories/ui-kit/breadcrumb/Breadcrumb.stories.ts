import {createBreadcrumb, Props} from './Breadcrumb';
import type {Meta} from '@storybook/html';
import {defaultProps, controls} from './controls'
import { Story } from '../types';


const meta: Meta<Props> = {
  title: 'UI-KIT/Breadcrumb',
  render: (props: Props) => {
    return createBreadcrumb(props)
  },
  args: defaultProps,
  argTypes: controls,
  parameters: {
    docs: {
      description: {
        component: 'Ряд ссылок, указывающих местоположение текущей страницы в навигационной иерархии сайта.'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {},
};

