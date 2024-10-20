import {Controls} from '../types'
import { PointColorSLLogo, SizeSLLogo } from "./enums/enums";
import {Props} from "./Sl-logo";
import {convertMapToControl} from '../../tools/convert-map-to-control'


export const controls: Controls<Props> = {
  state: {
    description: 'Цвет лейбла',
    ...convertMapToControl(PointColorSLLogo)
  },
  size: {
    description: 'Размер логотипа',
    ...convertMapToControl(SizeSLLogo)
  },
  paragraph: {
    description: 'Текст логотипа',
  },
  subparagraph: {
    description: 'Подтекст логотипа',
  }
}

export const defaultProps: Props = {
  paragraph: 'SMART-LAB',
  subparagraph: 'Мы делаем деньги на бирже',
  state: PointColorSLLogo.Amber,
  size: SizeSLLogo.Medium,
}
