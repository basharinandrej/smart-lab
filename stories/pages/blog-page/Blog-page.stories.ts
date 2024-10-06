import type {Meta, StoryObj} from '@storybook/html';
import { layout } from '../../ui-kit/layout/layout';
import { badge } from '../../ui-kit/badge/badge';

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

  return layout(
    badge({text: 'header'}),
    `<span>${badge({text: 'left'})}</span>`,
    `<span>${badge({text: 'main'})}</span>`,
    `<span>${badge({text: 'right'})}</span>`
  )
}
