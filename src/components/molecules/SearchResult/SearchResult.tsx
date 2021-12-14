import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useState } from 'react'
import { Hit } from 'react-instantsearch-core'
import { connectSearchBox, Hits, PoweredBy } from 'react-instantsearch-dom'
//
import { minQueryLength } from '@/libs/algolia'

type HitItem = {
  slug: {
    ja: string
  }
  title: { ja: string }
  description?: { ja: string }
  objectID: string
}

export type State = {
  currentRefinement: string
}

export type Action = {
  handleResetSearchWords: () => void
  handleGoToPost: (slug: string) => void
}

export type SearchResultPresenterProps = {
  state: State
  action: Action
}

export const SearchResultPresenter: FC<SearchResultPresenterProps> = (
  props
) => {
  const {
    state: { currentRefinement },
    action: { handleResetSearchWords, handleGoToPost },
  } = props
  return (
    <div className="bg-white rounded-sm">
      <Hits
        hitComponent={({ hit }: { hit: Hit<HitItem> }) => {
          console.log('hit', hit.title)
          return (
            <p
              onClick={() => {
                handleGoToPost(hit.slug.ja)
              }}
            >
              {hit.title.ja}
            </p>
          )
        }}
      />

      {currentRefinement.length >= minQueryLength && (
        <div className="flex justify-end p-2 dark:text-gray-800">
          <PoweredBy />
        </div>
      )}
    </div>
  )
}

export const SearchResult = connectSearchBox((props) => {
  const { refine, currentRefinement } = props
  const router = useRouter()
  const [isDisplayCondition, setDisplayCondition] = useState(false)

  useEffect(() => {
    setDisplayCondition(!!currentRefinement)
  }, [currentRefinement, setDisplayCondition])

  const handleResetSearchWords = useCallback(() => {
    refine('')
  }, [refine])

  const handleGoToPost = useCallback((slug: string) => {
    router.push(`/posts/${slug}`)
  }, [])

  if (!isDisplayCondition) return null

  return (
    <SearchResultPresenter
      state={{ currentRefinement }}
      action={{ handleResetSearchWords, handleGoToPost }}
    />
  )
})

export default SearchResult
