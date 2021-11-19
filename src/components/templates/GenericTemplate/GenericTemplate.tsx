import { FC } from 'react'
//

/**
 * Interface
 */

export interface GenericTemplateProps {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  children?: React.ReactNode
}

/**
 * Template component
 */

export const GenericTemplate: FC<GenericTemplateProps> = ({
  globalHeader,
  globalFooter,
  children,
}) => {
  return (
    <>
      <div>{globalHeader}</div>
      <div className="bg-gray-100">
        <main className="container p-4 mx-auto ">{children}</main>
      </div>
      <div>{globalFooter}</div>
    </>
  )
}
