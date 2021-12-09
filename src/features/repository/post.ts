import { Domain } from '@/features'
import { apiContentfulClient } from '@/utils/api'

export const postCollection: () => Promise<Domain.Post.Collection> =
  async () => {
    const collection = await apiContentfulClient.getEntries<Domain.Post.Fields>(
      {
        content_type: 'post',
      }
    )
    return await collection
  }
