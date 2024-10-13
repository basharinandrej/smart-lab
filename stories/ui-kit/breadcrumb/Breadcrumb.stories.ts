import {createBreadcrumb, Props} from './Breadcrumb';
import type {Meta, StoryObj} from '@storybook/html';
import { BreadcrumbState } from './enums/enums';
import {convertMapToControl} from '../../tools/convert-map-to-control'

type Story = StoryObj<{}>;

const meta: Meta<Omit<{}, 'icon'>> = {
  title: 'UI-KIT/Breadcrumb',
  render: (props: Props) => {
    return createBreadcrumb(props)
  },
  args: {
    length: 5,
    state: BreadcrumbState.Default
  },
  argTypes: {
    state: {
      description: 'Состояние хлебных крошек',
      ...convertMapToControl(BreadcrumbState)
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Ряд ссылок, указывающих местоположение текущей страницы в навигационной иерархии сайта.'
      },
    },
  },
}

export default meta;

export const Primary: Story = {
  args: {},
};

