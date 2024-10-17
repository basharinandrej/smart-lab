import { AvatarSize } from './enums/enums'
import { getClassNamesBySize } from './helpers/get-class-names-by-size'

import './avatar.css'


export const createAvatar = ({
  size,
  img,
  isBorder = false,
  stubText,
  isShowImg
}: Props) => {


  const classNames = [
    'ds',
    'ds--avatar',
    isBorder ? 'ds--avatar--border' : '',
    getClassNamesBySize(size)
  ]

  return `
    <div class="${classNames.join(' ')}">
      ${
        isShowImg 
        ? `<img class="ds--avatar-img" src="${img}" alt="avatar">`
        : `<div class="ds--avatar-stub">
            <p class="ds--avatar-stub-paragraph">
              ${stubText.toUpperCase().slice(0,2)}
            </p>
          </div>`
        }
    </div>
  `
}

export interface Props {
  size: AvatarSize
  isBorder: boolean
  img?: string
  isShowImg?: boolean
  stubText?: string
}