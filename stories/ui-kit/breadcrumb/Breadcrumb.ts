import {BreadcrumbState} from './enums/enums'
import {getClassNamesByStates} from './helpers/get-class-names-by-state'
import './breadcrumb.css'


export const createBreadcrumb = ({
  length = 2,
  state = BreadcrumbState.Default
}: Props) => {

  const classNames = [
    "ds",
    "ds--breadcrumb",
  ]
  const classNamesItem = [
    "ds--breadcrumb-item",
    getClassNamesByStates(state)
  ]

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.ds--breadcrumb')
      .addEventListener('click', (e) => e.preventDefault())
  })

  const itemBreadcrumb = `
    <div class="${classNamesItem.join(' ')}">
      <div class="ds--breadcrumb-icon ds--breadcrumb-icon--front">
        <svg viewBox="0 0 16 16">
          <use href="#check-2"></use>
        </svg>
      </div>
      <a href="#" class="ds--breadcrumb-paragraph">Главная</a>
      <div class="ds--breadcrumb-icon ds--breadcrumb-icon--end">
        <svg viewBox="0 0 16 16">
          <use href="#chevron-right"></use>
        </svg>
      </div>
    </div>
  `

  return `
    <div class="${classNames.join(' ')}">

      ${Array.from({length: Math.max(length, 1)}).map(() => {
        return itemBreadcrumb
      }).join(' ')}

    </div>
  `
}

export interface Props {
  length: number
  state: BreadcrumbState
}
