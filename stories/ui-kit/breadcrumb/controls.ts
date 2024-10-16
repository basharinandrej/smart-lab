import {Controls} from '../types'
import { BreadcrumbState } from "./enums/enums";
import {Props} from "./Breadcrumb";
import {convertMapToControl} from '../../tools/convert-map-to-control'


export const controls: Controls<Props> = {
  state: {
    description: 'Состояние хлебных крошек',
    ...convertMapToControl(BreadcrumbState)
  }
}

export const defaultProps: Props = {
  length: 5,
  state: BreadcrumbState.Default
}
