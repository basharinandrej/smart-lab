import {SizeButton} from "../enums/enums";


export const getClassNamesBySizes = (size: SizeButton) => {
  const sizesMap: Record<SizeButton, string> = {
    [SizeButton.Small]: 'ds--button--small',
    [SizeButton.Medium]: 'ds--button--medium',
    [SizeButton.Big]: 'ds--button--big',
  }

  return sizesMap[size]
}
