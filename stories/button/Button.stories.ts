import {createButton, Props} from './Button';
import {TypeButton} from './enums/enums'
import type {Meta, StoryObj} from '@storybook/html';
import {controls, defaultProps} from "./controls";

type Story = StoryObj<Props>;

const meta: Meta<Omit<Props, 'icon'>> = {
  title: 'UI-KIT/Button',
  render: (props: Props) => {
    return createButton(props)
  },
  args:defaultProps,
  argTypes: controls,
  parameters: {
    docs: {
      description: {
        component: 'Самая часто используемая кнопка на сайте'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {
    type: TypeButton.Primary,
  },
};

export const ButtonIcon: Story = {
  args: {
    type: TypeButton.Primary,
    icon: '#trash'
  },
};

