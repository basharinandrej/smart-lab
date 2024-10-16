import {StateButton} from "../enums/enums";


export const getClassNamesByStates = (state: StateButton) => {
  const statesMap: Record<StateButton, string> = {
    [StateButton.Default]: 'ds--button--default',
    [StateButton.Active]: 'ds--button--active',
    [StateButton.Disabled]: 'ds--button--disabled',
    [StateButton.Loading]: 'ds--button--loading',
    [StateButton.Hover]: 'ds--button--hover',
  }

  return statesMap[state]
}
