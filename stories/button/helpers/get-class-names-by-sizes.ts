import {TypeButton} from "../enums/enums";


export const getClassNamesByTypes = (type: TypeButton) => {
  const typesMap: Record<TypeButton, string> = {
    [TypeButton.Primary]: 'ds--button--primary',
    [TypeButton.Secondary]: 'ds--button--secondary'
  }

  return typesMap[type]
}
