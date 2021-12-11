import { Domain } from '@/features'
import { contentfulClient } from '@/libs/contentful'

export const postCollection: () => Promise<Domain.Post.Collection> =
  async () => {
    const collection = await contentfulClient.getEntries<Domain.Post.Fields>({
      content_type: 'post',
    })
    return await collection
  }
