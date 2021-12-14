import { FC } from 'react'

/**
 * Interface
 */

export type State = {
  globalHeader?: React.ReactNode
  globalFooter?: React.ReactNode
  children?: React.ReactNode
}

export type SingleTemplateProps = {
  state: State
}

/**
 * Presenter
 */

export const SingleTemplate: FC<SingleTemplateProps> = (props) => {
  const {
    state: { globalHeader, globalFooter, children },
  } = props

  return (
    <>
      <div>{globalHeader}</div>
      <div className="bg-gray-100">
        <main className="lg:container p-6 mx-auto ">{children}</main>
      </div>
      <div>{globalFooter}</div>
    </>
  )
}

export default SingleTemplate
