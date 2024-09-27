import type {Meta, StoryObj} from '@storybook/html';
import { badge } from './badge';
import { createElement } from '../../renderer/create-element';

type Story = StoryObj;

const BadgeMeta: Meta = {
  title: 'UI-KIT/Badge',
  render: () => {
    return createElement(
        'div',
        badge('badge')
    )
  },
}

export default BadgeMeta;

export const Badge: Story = {};
