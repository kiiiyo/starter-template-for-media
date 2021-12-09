import { Domain, Repository } from '../index'

export const postCollection: () => Promise<Domain.Post.Collection> =
  async () => {
    return await Repository.Post.postCollection()
  }
