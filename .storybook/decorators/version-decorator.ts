import { Decorator } from '@storybook/html';
import json from '../../package.json'

export const versionDecorator: Decorator = (MyStory ) => {

  console.log('Version::', json.version)
  return MyStory()
}
