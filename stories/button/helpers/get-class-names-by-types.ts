import {SizeButton} from "../enums/enums";


export const getClassNamesBySizes = (size: SizeButton) => {
  const sizesMap: Record<SizeButton, string> = {
    [SizeButton.Small]: 'ds--button--size-small',
    [SizeButton.Default]: 'ds--button--size-default',
    [SizeButton.Big]: 'ds--button--size-big',
  }

  return sizesMap[size]
}
