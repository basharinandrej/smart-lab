import { createButton } from '../button/Button';
import {createChip} from './chip';
import type {Meta, StoryObj} from '@storybook/html';
import {controls, defaultProps, DefaultProps} from './controls'

type Story = StoryObj<DefaultProps>;

const meta: Meta<DefaultProps> = {
  title: 'UI-KIT/Chip',
  render: (props: DefaultProps) => {

    if(props.isWithElement) {
      return createButton({
        label: 'Кнопка',
        children: createChip(props)
      })
    } else {
      return createChip(props)
    }
  },
  args: defaultProps,
  argTypes: controls,
  parameters: {
    docs: {
      description: {
        component: 'Отображение индикаторов или других элементов у объектов'
      },
    },
  },
}

export default meta;

export const Primary: Story = {

};

