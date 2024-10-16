import {createCard, Props} from './Card';
import type {Meta, StoryObj} from '@storybook/html';
import {convertMapToControl} from '../../tools/convert-map-to-control'
import { PaddingsCard } from './enums/enums';

type Story = StoryObj<{}>;

const meta: Meta<Props> = {
  title: 'UI-KIT/Card',
  render: (props: Props) => {
    return createCard(props)
  },
  args: {
    textBody: 'textBody',
    textHeader: 'textHeader',
    textFooter: 'textFooter',
    padding: PaddingsCard.Default
  },
  argTypes: {
    padding: {
      description: 'Размер padding\'a',
      ...convertMapToControl(PaddingsCard)
    }
  },
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

