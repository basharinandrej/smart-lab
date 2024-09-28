import cl from 'classnames'
import './badge.css'

export const badge = ({
  text,
  type = BadgeType.Solid,
  size = BadgeSize.Default,
  color = BadgeColor.Primary
}: BadgeProps) => {

  try {
    console.log('>>>>> cl(type, size, color)', cl(type, size, color))
  } catch (error) {
    console.log('>>>> error', error)
  }
  return `
      <div class="ds-badge">${text}</div>
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
