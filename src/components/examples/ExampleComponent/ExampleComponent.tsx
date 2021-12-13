import { FC } from 'react'

export type State = {}

export type Action = {}

export type ExampleComponentPresenterProps = {
  state: State
  action: Action
}

export type ExampleComponentProps = {
  state: State
  action: Action
}

export const ExampleComponentPresenter: FC<ExampleComponentPresenterProps> = (
  props
) => {
  const { state, action } = props
  return <div></div>
}

export const ExampleComponent: FC<ExampleComponentProps> = (props) => {
  const { state, action } = props

  return <ExampleComponentPresenter state={{}} action={{}} />
}

export default ExampleComponent
