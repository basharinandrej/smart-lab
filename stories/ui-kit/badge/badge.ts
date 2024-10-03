import cl from 'classnames'
import './badge.css'

export const badge = ({
  text,
  type = BadgeType.Solid,
  size = BadgeSize.Default,
  color = BadgeColor.Primary
}: BadgeProps) => {
  return `
      <div class="ds-badge ${cl(type, size, color)}">
        ${text}
        <svg viewBox="0 0 24 24" width="24" height="24">
          <use href="#star" />
        </svg>
      </div>
    `
}

export interface BadgeProps {
  text: string
  type?: BadgeType
  size?: BadgeSize
  color?: BadgeColor
}

export enum BadgeType {
  Solid = 'ds-badge-type-solid',
  Soft = 'ds-badge-type-soft'
}

export enum BadgeSize {
  Default = 'ds-badge-size-default',
  Small = 'ds-badge-size-small',
  Big = 'ds-badge-size-big'
}

export enum BadgeColor {
  Primary = 'ds-badge-color-primary',
  Gray = 'ds-badge-color-gray'
}
