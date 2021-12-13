import { Domain } from '@/features'

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
    description: description || null,
    content: content || null,
    image: image
      ? {
          title: image?.fields.title,
          url: image?.fields.file.url,
        }
      : null,
    author: authors
      ? {
          name: authors.fields.name || '',
        }
      : null,
    category: categories
      ? {
          name: categories.fields.name,
          slug: categories.fields.slug,
          createdAt: categories.sys.createdAt,
          updatedAt: categories.sys.updatedAt,
        }
      : null,
    tags: tags ? tagsMapping(tags) : [],
    createdAt,
    updatedAt,
  }
}

export const tagsMapping = (
  tags: Domain.Tag.ReferenceTag[] | undefined
): Domain.Tag.Collection => {
  if (!tags) return []
  return tags.map((tag) => tagMapping(tag))
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
