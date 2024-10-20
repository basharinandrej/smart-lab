import {createCard, Props} from './Card';
import type {Meta} from '@storybook/html';
import { Story } from '../types';
import { controls, defaultProps } from './controls';


const meta: Meta<Props> = {
  title: 'UI-KIT/Card',
  render: (props: Props) => {
    return createCard(props)
  },
  args: defaultProps,
  argTypes: controls,
  parameters: {
    docs: {
      description: {
        component: 'Отображение карточки с содержимым: header, body и footer.'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {},
};

