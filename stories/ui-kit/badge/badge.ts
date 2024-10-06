import cl from 'classnames'
import './badge.css'

export const badge = ({
  text,
  type = BadgeType.Solid,
  size = BadgeSize.Default,
  color = BadgeColor.Primary
}: BadgeProps) => {
  return `
      <div class="ds--badge ${cl(type, size, color)}">${text}</div>
    `
}

export interface BadgeProps {
  text: string
  type?: BadgeType
  size?: BadgeSize
  color?: BadgeColor
}

export enum BadgeType {
  Solid = 'ds--badge--solid',
  Soft = 'ds--badge--soft'
}

export enum BadgeSize {
  Default = 'ds--badge--default',
  Small = 'ds--badge--small',
  Big = 'ds--badge--big'
}

export enum BadgeColor {
  Primary = 'ds--badge--primary',
  Secondary = 'ds--badge--secondary'
}
