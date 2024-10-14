import {getClassNamesByStatePointColor} from './helpers/get-class-names-by-state-point-color'
import {getClassNamesBySize} from './helpers/get-class-names-by-size'
import {PointColorSLLogo, SizeSLLogo} from './enums/enums'

import './sl-logo.css'

export const createSLLogo = ({
  paragraph,
  subparagraph,
  state = PointColorSLLogo.Red,
  size = SizeSLLogo.Medium
}: Props) => {

  const classNames = [
    "ds--logo",
    getClassNamesByStatePointColor(state),
    getClassNamesBySize(size)
  ]

  return `
    <div class="${classNames.join(' ')}">
      <div class="ds--logo-box">
        <p class="ds--logo-paragraph">${paragraph}</p>
        <p class="ds--logo-subparagraph">${subparagraph}</p>
      </div>
      <span class="ds--logo-label"/>
    </div>
  `
}

export interface Props {
  paragraph: string
  subparagraph: string
  state: PointColorSLLogo
  size: SizeSLLogo
}