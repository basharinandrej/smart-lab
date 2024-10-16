import {PaddingsCard} from "../enums/enums";


export const getClassNamesByPaddings = (padding: PaddingsCard) => {
  const paddingsMap: Record<PaddingsCard, string> = {
    [PaddingsCard.Compressed]: 'ds--card--compressed',
    [PaddingsCard.Default]: 'ds--card--default',
    [PaddingsCard.None]: 'ds--card--none',
  }

  return paddingsMap[padding]
}
