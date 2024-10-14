import {TypeButton} from "../enums/enums";


export const getClassNamesByTypes = (type: TypeButton) => {
  const typesMap: Record<TypeButton, string> = {
    [TypeButton.Primary]: 'ds--button--primary',
    [TypeButton.Secondary]: 'ds--button--secondary',
    [TypeButton.Green]: 'ds--button--green',
  }

  return typesMap[type]
}
