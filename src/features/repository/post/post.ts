import { Domain } from '@/features'
import { contentfulClient } from '@/libs/contentful'
//
import { postsMapping, postMapping } from './mapper'

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

  return await postsMapping(data)
}

export const postTotalCount: () => Promise<number> = async () => {
  const { total } = await contentfulClient.getEntries<Domain.Post.Fields>({
    content_type: 'post',
  })
  return await total
}

export const postDetail: (slug: string) => Promise<Domain.Post.Entity | null> =
  async (slug) => {
    const { total, items } =
      await contentfulClient.getEntries<Domain.Post.Fields>({
        content_type: 'post',
        limit: 1,
        'fields.slug': slug,
      })

    return total > 0 ? postMapping(items[0]) : null
  }
