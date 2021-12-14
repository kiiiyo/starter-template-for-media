import { Domain, Repository } from '../index'

export const postCollection: (
  query: Domain.Post.CollectionQuery
) => Promise<Domain.Post.Collection> = async (query) => {
  return await Repository.Post.postCollection(query)
}

export const postTotalCount: () => Promise<number> = async () => {
  return await Repository.Post.postTotalCount()
}

export const postDetail: (slug: string) => Promise<Domain.Post.Entity | null> =
  async (slug) => {
    return await Repository.Post.postDetail(slug)
  }
