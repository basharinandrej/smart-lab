import {createButton, Props} from './Button';
import {TypeButton} from './enums/enums'
import type {Meta, StoryObj} from '@storybook/html';
import {controls, defaultProps} from "./controls";
import closeIcon from '../assets/trash.svg';

type Story = StoryObj<Props>;

const meta: Meta<Props> = {
  title: 'UI-KIT/Button',
  render: (props: Props) => {
    if(props.icon) {
      props.icon = closeIcon
    }

    return createButton(props)
  },
  args: defaultProps,
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
    icon: closeIcon
  },
};


/*
* - ts +
* - docs components
* - sass +
* - docs storybook
* - icon
* - states
* - typography
* - deploy
* */
