import { PaddingsCard } from './enums/enums'
import { getClassNamesByPaddings } from './helpers/get-class-names-by-paddings'

import './card.css'

export const createCard = ({
  textBody,
  textHeader,
  textFooter,
  padding
}:Props ) => {


  const header = (`
    ${textHeader 
      ? `<div class="ds--card-header">
          <p>${textHeader}</p>
        </div>`
      : ''}
  `)
  const body = (`
    ${textBody 
      ? `<div class="ds--card-body">
          <p>${textBody}</p>
        </div>`
      : ''}
  `)
  const footer = (`
    ${textFooter 
      ? `<div class="ds--card-footer">
          <p>${textFooter}</p>
        </div>`
      : ''}
  `)

  const classNames = [
    "ds--card",
    getClassNamesByPaddings(padding)
  ]

  return `
    <div class="${classNames.join(' ')}">
      ${header}
      ${body}
      ${footer}
    </div>
  `
}


export interface Props {
  textBody: string
  textHeader: string
  textFooter: string
  padding: PaddingsCard
}