import { FC } from 'react'
//
import { Templates, Organisms } from '@/components'

export const SearchScreenPresenter: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      <div className="mt-6">
        <Organisms.SearchForm />
      </div>
    </Templates.GenericTemplate>
  )
}

export const SearchScreen: FC = () => {
  return <SearchScreenPresenter />
}

export default SearchScreen
