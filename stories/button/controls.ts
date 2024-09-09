import {ArgTypes} from '@storybook/html'
import {SizeButton, StateButton, TypeButton} from "./enums/enums";
import {Props} from "./Button";


export const controls: Controls = {
  label: {
    control: { type: 'text'},
    description: 'Текст в кнопке',
  },
  size: {
    control: { type: 'select'},
    description: 'Размер кнопки',
    options: [SizeButton.Big, SizeButton.Small, SizeButton.Medium],
  },
  type: {
    control: { type: 'select' },
    description: 'Тип кнопки',
    options: [TypeButton.Primary, TypeButton.Gray]
  },
  state: {
    control: { type: 'select' },
    description: 'Состояние кнопки',
    options: [
      StateButton.Default,
      StateButton.Loading,
      StateButton.Hover,
      StateButton.Active,
      StateButton.Disabled
    ]
  },
}

export const defaultProps: Partial<Props> = {
  label: 'Кнопка',
  size: SizeButton.Medium
}
type Controls = Partial<ArgTypes<Props>>
