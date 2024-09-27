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
  tags: ['!autodocs']
}

export default blogPage;

export const BlogPageMock: Story = {};

const renderPage = () => {
  const root = document.createElement('div')

  return append(
    root,
    layout(
      `<span>left</span>`,
      `<span>main</span>`,
      `<span>right${badge('badge')}</span>`
    )
  )
}
