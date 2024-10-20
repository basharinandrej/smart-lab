import {Controls} from '../types'
import { PaddingsCard } from "./enums/enums";
import {Props} from "./Card";
import {convertMapToControl} from '../../tools/convert-map-to-control'


export const controls: Controls<Props> = {
  padding: {
    description: 'Размер padding\'a',
    ...convertMapToControl(PaddingsCard)
  }
}

export const defaultProps: Props = {
  textBody: 'textBody',
  textHeader: 'textHeader',
  textFooter: 'textFooter',
  padding: PaddingsCard.Default
}
