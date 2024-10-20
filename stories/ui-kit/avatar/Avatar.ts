import { AvatarSize } from './enums/enums'
import { getClassNamesBySize } from './helpers/get-class-names-by-size'

import './avatar.css'


export const createAvatar = ({
  size,
  src,
  isBorder = false,
  stubText,
  isShowImg,
  isHeaderPremium
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
        (isShowImg && src.length) 
        ? `<img class="ds--avatar-img" src="${src}" alt="avatar">`
        : `<div class="ds--avatar-stub">
            <p class="ds--avatar-stub-paragraph">
              ${stubText.toUpperCase().slice(0,2)}
            </p>
          </div>`
        }
        ${
          isHeaderPremium 
            ? `<div class="ds--avatar-icon-premium">
                <svg viewBox="0 0 15 14">
                  <use href="#diamond"></use>
                </svg>
              </div>` 
            : ''
        }
    </div>
  `
}

export interface Props {
  size: AvatarSize
  isBorder: boolean
  isHeaderPremium: boolean
  src?: string
  isShowImg?: boolean
  stubText?: string
}