import {Controls} from '../types'
import {AvatarSize} from "./enums/enums";
import {Props} from "./Avatar";
import {convertMapToControl} from '../../tools/convert-map-to-control'


export const controls: Controls<Props> = {
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
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  isHeaderPremium: {
    description: 'Премиум',
    table: {
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    },
  },
  isShowImg: {
    description: 'Показать изображение',
    table: {
      defaultValue: { summary: 'false' },
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
}

export const defaultProps: Props = {
  size: AvatarSize.Large,
  src: 'https://i.pinimg.com/736x/71/81/14/7181149979b9cc345415d3b6465b192b.jpg',
  isBorder: false,
  isShowImg: true,
  stubText: 'ФИ',
  isHeaderPremium: true
}
