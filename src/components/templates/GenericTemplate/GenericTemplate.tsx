import { FC } from 'react'
//

/**
 * Interface
 */

export interface GenericTemplateProps {
  headerBar?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}

/**
 * Template component
 */

export const GenericTemplate: FC<GenericTemplateProps> = ({
  headerBar,
  footer,
  children,
}) => {
  return (
    <>
      <div>{headerBar}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </>
  )
}
