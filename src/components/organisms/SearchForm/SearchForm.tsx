import { FC } from 'react'
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom'
//
import { searchClient, indexName } from '@/libs/algolia'
import { Molecules } from '@/components'

export const SearchFormPresenter: FC = () => {
  return (
    <div>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <Configure hitsPerPage={50} />
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-1/4">
            <SearchBox translations={{ placeholder: 'Search' }} />
          </div>
        </div>
        <div className="mt-1">
          <Molecules.SearchResult />
        </div>
      </InstantSearch>
    </div>
  )
}

export const SearchForm: FC = () => {
  return <SearchFormPresenter />
}

export default SearchForm
