import type {Meta, StoryObj} from '@storybook/html';
import { layout } from '../../ui-kit/layout/layout';
import { badge } from '../../ui-kit/badge/badge';
import { append } from '../../renderer/append';

type Story = StoryObj;


const blogPage: Meta = {
  title: 'Pages/Blog',
  render: () => {
    return renderPage()
  },
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default blogPage;

export const BlogPageMock: Story = {};

const renderPage = () => {
  const root = document.createElement('div')

  return append(
    root,
    layout(
      badge('header'),
      `<span>${badge('left')}</span>`,
      `<span>${badge('main')}</span>`,
      `<span>${badge('right')}</span>`
    )
  )
}
