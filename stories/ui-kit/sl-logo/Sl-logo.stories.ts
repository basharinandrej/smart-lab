import {createSLLogo, Props} from './Sl-logo';
import type {Meta} from '@storybook/html';
import {defaultProps, controls} from './controls'
import { Story } from '../types';


const meta: Meta<Props> = {
  title: 'UI-KIT/SL-Logo',
  render: (props: Props) => {
    return createSLLogo(props)
  },
  args: defaultProps,
  argTypes: controls,
  parameters: {
    docs: {
      description: {
        component: 'Отображение элемента “Предупреждение” чтобы привлечь внимание пользователя.'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {},
};

