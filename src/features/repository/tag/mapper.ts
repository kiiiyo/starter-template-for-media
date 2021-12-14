import { Domain } from '@/features'

export const tagsMapping = (
  tags: Domain.Tag.EntryCollection
): Domain.Tag.Collection => {
  if (!tags) return []
  return tags.items.map((tag) => tagMapping(tag))
}

export const tagMapping = (tag: Domain.Tag.Entry): Domain.Tag.Entity => {
  const {
    fields: { displayName, slug, description },
    sys: { createdAt, updatedAt },
  } = tag

  return {
    displayName,
    slug,
    description: description || '',
    createdAt,
    updatedAt,
  }
}
