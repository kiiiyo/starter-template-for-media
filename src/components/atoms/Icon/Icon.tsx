import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core'
//
import { IconName, IconSize, IconStyle } from '@/types/fortawesome'
import { iconStyles } from './style'

library.add(fab, fas)

type IconProps = {
  size?: IconSize
  name: IconName
}

export const IconPresenter = (props: IconProps) => {
  const { name, size } = props
  const iconStyle = iconStyles.find((style) => style.name === name) as IconStyle

  return (
    <FontAwesomeIcon
      icon={findIconDefinition({
        prefix: iconStyle?.prefix,
        iconName: iconStyle?.name,
      })}
      size={size || 'sm'}
    />
  )
}

export const Icon: React.FC<IconProps> = ({ ...props }) => {
  return <IconPresenter {...props} />
}
