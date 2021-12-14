import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export type State = {}

export type Action = {}

export type SearchScreenPresenterProps = {
  state: State
  action: Action
}

export type SearchScreenProps = {
  state: State
  action: Action
}

export const SearchScreenPresenter: FC<SearchScreenPresenterProps> = (
  props
) => {
  const { state, action } = props
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      <div className="mt-6">search</div>
    </Templates.GenericTemplate>
  )
}

export const SearchScreen: FC<SearchScreenProps> = (props) => {
  const { state, action } = props

  return <SearchScreenPresenter state={{}} action={{}} />
}

export default SearchScreen
