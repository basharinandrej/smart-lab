import { Decorator } from '@storybook/html';
import spriteSVG from '../assets/sprite.svg'

export const svgSpriteDecorator: Decorator = (MyStory ) => {
  const hasSprite = window.document.getElementById('sprite')
  !hasSprite && window.document.body.insertAdjacentHTML('afterbegin', spriteSVG)

  return MyStory()
}
