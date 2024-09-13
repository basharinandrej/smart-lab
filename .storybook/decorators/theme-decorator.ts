import { Decorator } from '@storybook/html';
import {Themes} from "../enums/themes";

export const themeDecorator: Decorator = (MyStory, props ) => {
  const mapThemes = {
    '#333333': Themes.Dark,
    '#F8F8F8': Themes.Light
  }
  const theme = props?.globals?.backgrounds?.value

  window.document.body.setAttribute('data-theme', mapThemes[theme] || Themes.Light)
  return MyStory()
}
