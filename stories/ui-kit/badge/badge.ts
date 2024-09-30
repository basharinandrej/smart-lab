import cl from 'classnames'
import './badge.css'
import { ValueOf } from '../../tools/types'

export const badge = ({
  text,
  type = BadgeType.Solid,
  size = BadgeSize.Default,
  color = BadgeColor.Primary
}: BadgeProps) => {
  return `
      <div class="ds-badge ${cl(type, size, color)}">${text}</div>
    `
}

export interface BadgeProps {
  text: string
  type?: ValueOf<typeof BadgeType>
  size?: ValueOf<typeof BadgeSize>
  color?: ValueOf<typeof BadgeColor>
}

export const BadgeType = {
  Solid: 'ds-badge-type-solid',
  Soft: 'ds-badge-type-soft'
} as const

export const BadgeSize = {
  Default: 'ds-badge-size-default',
  Small: 'ds-badge-size-small',
  Big: 'ds-badge-size-big'
} as const

export const BadgeColor = {
  Primary: 'ds-badge-color-primary',
  Gray: 'ds-badge-color-gray'
} as const
