import { Decorator } from '@storybook/html';
import json from '../../package.json'

export const versionDecorator: Decorator = (MyStory ) => {

  console.log(`%c Version:: ${json.version}`, 'background: #222; color: #bada55')
  return MyStory()
}
