import { Domain } from '@/features'

export const tagsMapping = (
  tags: Domain.Tag.EntryCollection
): Domain.Tag.Collection => {
  if (!tags) return []
  return tags.items.map((tag) => tagMapping(tag))
}

export const tagMapping = (tag: Domain.Tag.Entry): Domain.Tag.Entity => {
  const {
    fields: { name, slug, description },
    sys: { createdAt, updatedAt },
  } = tag

  return {
    name,
    slug,
    description: description || null,
    createdAt,
    updatedAt,
  }
}
