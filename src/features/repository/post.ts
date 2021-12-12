import { Domain } from '@/features'
import { contentfulClient } from '@/libs/contentful'

export const postCollection: (
  query: Domain.Post.CollectionQuery
) => Promise<Domain.Post.Collection> = async (query) => {
  const { limit, offset } = query

  const data = await contentfulClient.getEntries<Domain.Post.Fields>({
    content_type: 'post',
    order: 'sys.createdAt',
    limit,
    skip: limit * (offset - 1),
  })
  return await data
}

export const postTotalCount: () => Promise<number> = async () => {
  const { total } = await contentfulClient.getEntries<Domain.Post.Fields>({
    content_type: 'post',
  })
  return await total
}
