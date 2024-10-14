import {SizeSLLogo} from "../enums/enums";


export const getClassNamesBySize = (size: SizeSLLogo) => {
  const sizeMap: Record<SizeSLLogo, string> = {
    [SizeSLLogo.Big]: 'ds--logo--big',
    [SizeSLLogo.Medium]: 'ds--logo--medium',
    [SizeSLLogo.Small]: 'ds--logo--small',
  }

  return sizeMap[size]
}
