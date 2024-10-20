import {createAvatar, Props} from './Avatar';
import type {Meta} from '@storybook/html';
import { Story } from '../types';
import { AvatarSize } from './enums/enums';
import { convertMapToControl } from '../../tools/convert-map-to-control';


const meta: Meta<{}> = {
  title: 'UI-KIT/Avatar',
  render: (props: Props) => {
    return createAvatar(props)
  },
  args: {
    size: AvatarSize.Large,
    src: 'https://i.pinimg.com/736x/71/81/14/7181149979b9cc345415d3b6465b192b.jpg',
    isBorder: false,
    isShowImg: true,
    stubText: 'ФИ',
    isHeaderPremium: true
  },
  argTypes: {
    stubText: {
      description: 'Заглушка',
      table: {
        defaultValue: { summary: 'ФИ'},
        type: { summary: 'string' },
      },
    },
    isBorder: {
      description: 'Наличие рамки',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    isHeaderPremium: {
      description: 'Премиум',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    isShowImg: {
      description: 'Показать изображение',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    size: {
      description: 'Размер аватар',
      ...convertMapToControl(AvatarSize)
    },
    src: {
      description: 'URL изображения',
      table: {
        defaultValue: { summary: 'Кнопка' },
        type: { summary: 'string' },
      },
    }
  },
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
