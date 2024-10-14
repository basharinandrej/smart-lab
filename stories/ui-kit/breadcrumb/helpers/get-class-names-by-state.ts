import {BreadcrumbState} from "../enums/enums";


export const getClassNamesByStates = (state: BreadcrumbState) => {
  const statesMap: Record<BreadcrumbState, string> = {
    [BreadcrumbState.Active]: 'ds--breadcrumb-item--active',
    [BreadcrumbState.Default]: 'ds--breadcrumb-item--default',
    [BreadcrumbState.Disabled]: 'ds--breadcrumb-item--disabled',
    [BreadcrumbState.Hover]: 'ds--breadcrumb-item--hover',
  }

  return statesMap[state]
}
