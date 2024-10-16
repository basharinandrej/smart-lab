import {Controls} from '../types'
import {SizeButton, StateButton, TypeButton} from "./enums/enums";
import {Props} from "./Button";


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
    control: { type: 'select'},
    table: {
      defaultValue: { summary: SizeButton.Default },
      type: { summary: `${SizeButton.Small}, ${SizeButton.Default}, ${SizeButton.Big}` },
    },
    options: [SizeButton.Big, SizeButton.Small, SizeButton.Default],
  },
  type: {
    description: 'Тип кнопки',
    control: { type: 'select' },
    table: {
      defaultValue: { summary: TypeButton.Primary },
      type: { summary: `${TypeButton.Primary}, ${TypeButton.Secondary}, ${TypeButton.Green}` },
    },
    options: [TypeButton.Primary, TypeButton.Secondary, TypeButton.Green]
  },
  state: {
    control: { type: 'select' },
    description: 'Состояние кнопки',
    table: {
      defaultValue: { summary: StateButton.Default },
      type: { summary: `
        ${StateButton.Default}, 
        ${StateButton.Active},
        ${StateButton.Hover},
        ${StateButton.Loading},
        ${StateButton.Disabled}`
      },
    },
    options: [
      StateButton.Default,
      StateButton.Loading,
      StateButton.Hover,
      StateButton.Active,
      StateButton.Disabled
    ]
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
