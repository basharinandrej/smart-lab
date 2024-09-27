import type {ArgTypes, Meta, StoryObj} from '@storybook/html';
import { badge, BadgeColor, BadgeProps, BadgeSize, BadgeType } from './badge';
import { createElement } from '../../renderer/create-element';


type Controls = Partial<ArgTypes<BadgeProps>>
type Story = StoryObj;

const controls: Controls = {
  text: {
    description: 'Текст в бейдже',
    control: { type: 'text' },
  },
  type: {
    description: 'Тип бейджа',
    control: { type: 'select'},
    options: [BadgeType.Solid, BadgeType.Soft],
  },
  size: {
    description: 'Размер бейджа',
    control: { type: 'select'},
    options: [BadgeSize.Default, BadgeSize.Big, BadgeSize.Small],
  },
  color: {
    description: 'Цвет бейджа',
    control: { type: 'select'},
    options: [BadgeColor.Primary, BadgeColor.Gray],
  },
}

const BadgeMeta: Meta = {
  title: 'UI-KIT/Badge',
  render: (props: BadgeProps) => {
    return badge(props)
  },
  args: {
    text: 'badge',
    type: BadgeType.Solid,
    size: BadgeSize.Default,
    color: BadgeColor.Primary,
  },
  argTypes: controls,
}

export default BadgeMeta;

export const Badge: Story = {};

