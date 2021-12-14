import { Domain } from '@/features'
import { formatUtcDay } from '@/libs/date'

export const postsMapping = (
  posts: Domain.Post.EntryCollection
): Domain.Post.Collection => {
  return {
    total: posts.total,
    items: posts.items.map((post) => postMapping(post)),
  }
}

export const postMapping = (post: Domain.Post.Entry): Domain.Post.Entity => {
  const {
    fields: {
      title,
      slug,
      description,
      content,
      image,
      authors,
      categories,
      tags,
    },
    sys: { createdAt, updatedAt },
  } = post

  return {
    title,
    slug,
    description: description || '',
    content: content || null,
    image: image
      ? {
          title: image?.fields.title,
          url: image?.fields.file.url,
        }
      : null,
    author: {
      displayName: authors.fields.displayName || '',
      avatarImage: authors.fields.avatarImage
        ? {
            name: authors.fields.avatarImage.fields.title,
            url: authors.fields.avatarImage.fields.file.url,
          }
        : null,
    },
    category: {
      displayName: categories.fields.displayName,
      description: categories.fields.description || '',
      slug: categories.fields.slug,
      createdAt: formatUtcDay(categories.sys.createdAt),
      updatedAt: formatUtcDay(categories.sys.updatedAt),
    },
    tags: tags ? tagsMapping(tags) : [],
    createdAt: formatUtcDay(createdAt),
    updatedAt: formatUtcDay(updatedAt),
  }
}

export const tagsMapping = (
  tags: Domain.Tag.ReferenceTag[] | []
): Domain.Tag.Collection => {
  if (!tags) return []
  return tags.map((tag) => tagMapping(tag))
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
    createdAt: formatUtcDay(createdAt),
    updatedAt: formatUtcDay(updatedAt),
  }
}
