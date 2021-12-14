import {
  Entry as ContentfulEntry,
  EntryCollection as ContentfulEntryCollection,
} from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { IPostFields } from '@/types/contentful'
//
import { Domain } from '@/features'

export type ContentType = 'post'

export type Fields = IPostFields
export type Entry = ContentfulEntry<Fields>
export type EntryCollection = ContentfulEntryCollection<Fields>

export type CollectionQuery = {
  limit: number
  offset: number
}

export type Image = {
  title: string
  url: string
}

export type Entity = {
  title: string
  slug: string
  description?: string | null
  content?: Document | null
  image?: Image | null
  author: Domain.Author.Entity
  category: Domain.Category.Entity
  tags: Domain.Tag.Collection | []
  createdAt: string
  updatedAt: string
}

export type Collection = {
  total: number
  items: Array<Entity>
}
