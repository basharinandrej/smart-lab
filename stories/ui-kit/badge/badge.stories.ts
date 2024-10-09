import type { ArgTypes, Meta, StoryObj} from '@storybook/html';
import { badge, BadgeColor, BadgeProps, BadgeSize, BadgeType } from './badge';
import { convertMapToControl } from '../../tools/convert-map-to-control';

const controls: ArgTypes<BadgeProps> = {
  text: {
    defaultValue: { summary: 'badge' },
    description: 'Текст в бейдже',
    control: { type: 'text' },
  },
  type: {
    description: 'Тип бейджа',
    ...convertMapToControl(BadgeType),
  },
  size: {
    description: 'Размер бейджа',
    ...convertMapToControl(BadgeSize),
  },
  color: {
    description: 'Цвет бейджа',
    ...convertMapToControl(BadgeColor),
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

export const Badge: StoryObj = {};
