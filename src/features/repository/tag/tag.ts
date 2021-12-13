import { Domain } from '@/features'
import { contentfulClient } from '@/libs/contentful'

export const tagCollection: () => Promise<Domain.Tag.Collection> = async () => {
  const data = await contentfulClient.getEntries<Domain.Tag.Fields>({
    content_type: 'tag',
    order: 'sys.createdAt',
  })

  return await data
}
