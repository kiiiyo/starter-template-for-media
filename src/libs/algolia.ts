import algoliasearch, { SearchClient } from 'algoliasearch/lite'
import { MultipleQueriesQuery } from '@algolia/client-search'

const algoliaClient: SearchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_ACCESS_TOKEN || ''
)

export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME || ''
export const minQueryLength = 3

export const searchClient = {
  search(requests: MultipleQueriesQuery[]) {
    // 検索文字がminQueryLength未満の場合は実行しないように設定
    // https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/
    if (
      requests.every(({ params }: MultipleQueriesQuery) => {
        return !params?.query || params.query.length < minQueryLength
      })
    ) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      })
    }

    return algoliaClient.search(requests)
  },
}
