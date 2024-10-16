import {Controls} from '../types'
import {SizeButton, StateButton, TypeButton} from "./enums/enums";
import {Props} from "./Button";
import {convertMapToControl} from '../../tools/convert-map-to-control'


export const controls: Controls<Props> = {
  label: {
    description: 'Текст в кнопке',
    table: {
      defaultValue: { summary: 'Кнопка' },
      type: { summary: 'string' },
    },
  },
  size: {
    description: 'Размер кнопки',
    ...convertMapToControl(SizeButton),
  },
  type: {
    description: 'Тип кнопки',
    ...convertMapToControl(TypeButton),
  },
  state: {
    description: 'Состояние кнопки',
    ...convertMapToControl(StateButton),
  },
  isFull: {
    description: 'Размер кнопки во всю ширину контейнера',
    table: {
      defaultValue: { summary: 'false'},
      type: { summary: `boolean` },
    },
    control: {
      type: 'boolean',
    }
  },
  icon: {
    description: 'Наличие иконки',
    table: {
      defaultValue: { summary: 'null'},
      type: { summary: `HTMLElement` },
    },
    control: {
      type: 'boolean',
    }
  }
}

export const defaultProps: DefaultProps = {
  label: 'Кнопка',
  size: SizeButton.Default,
  state: StateButton.Default,
  icon: false,
  isFull: false
}

type DefaultProps = Partial<Omit<Props, 'icon'> & {
  icon: boolean
}>
