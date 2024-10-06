import type {Meta, StoryObj} from '@storybook/html';
import { layout } from '../../ui-kit/layout/layout';

type Story = StoryObj;

const LayoutMeta: Meta = {
  title: 'UI-KIT/Layout',
  render: () => {
    return layout(
      'header',
      `left`,
      `main`,
      `right`
    )
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default LayoutMeta;

export const Layout: Story = {};
