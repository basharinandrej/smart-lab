import {Controls} from '../types'
import {Props} from "./chip";


export const controls: Controls<DefaultProps> = {
  isWithElement: {
    description: 'Показать пример использования chip с кнопкой',
    table: {
      defaultValue: { summary: 'false'},
      type: { summary: `boolean` },
    },
    control: {
      type: 'boolean',
    }
  },
  paragraph: {
    description: 'Текст в chip\'e',
    table: {
      defaultValue: { summary: '1' },
      type: { summary: 'string' },
    },
    control: {
      type: 'text',
    }
  },
}

export const defaultProps:DefaultProps = {
  paragraph: '1',
  isWithElement: false
}

export type DefaultProps = Props & {isWithElement: boolean} 
