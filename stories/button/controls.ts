import {ArgTypes} from '@storybook/html'
import {SizeButton, StateButton, TypeButton} from "./enums/enums";
import {Props} from "./Button";


export const controls: Controls = {
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
      defaultValue: { summary: SizeButton.Medium },
      type: { summary: `${SizeButton.Small}, ${SizeButton.Medium}, ${SizeButton.Big}` },
    },
    options: [SizeButton.Big, SizeButton.Small, SizeButton.Medium],
  },
  type: {
    description: 'Тип кнопки',
    control: { type: 'select' },
    table: {
      defaultValue: { summary: TypeButton.Primary },
      type: { summary: `${TypeButton.Primary}, ${TypeButton.Gray}` },
    },
    options: [TypeButton.Primary, TypeButton.Gray]
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
  size: SizeButton.Medium,
  state: StateButton.Default,
  icon: false
}
type Controls = Partial<ArgTypes<Props>>
type DefaultProps = Partial<Omit<Props, 'icon'> & {
  icon: boolean
}>
