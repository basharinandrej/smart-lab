import { AvatarSize } from "../enums/enums";


export const getClassNamesBySize = (size: AvatarSize) => {
  const sizeMap: Record<AvatarSize, string> = {
    [AvatarSize.Big]: 'ds--avatar--big',
    [AvatarSize.Large]: 'ds--avatar--large',
    [AvatarSize.Medium]: 'ds--avatar--medium',
    [AvatarSize.Small]: 'ds--avatar--small',
    [AvatarSize.XSmall]: 'ds--avatar--x-small',
    [AvatarSize.XXSmall]: 'ds--avatar--xx-small',
  }

  return sizeMap[size]
}
