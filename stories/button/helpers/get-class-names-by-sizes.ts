import {TypeButton} from "../enums/enums";


export const getClassNamesByTypes = (type: TypeButton) => {
  const typesMap: Record<TypeButton, string> = {
    [TypeButton.Primary]: 'ds--button--primary',
    [TypeButton.Gray]: 'ds--button--gray'
  }

  return typesMap[type]
}
