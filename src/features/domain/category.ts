import {
  Entry as ContentfulEntry,
  EntryCollection as ContentfulEntryCollection,
} from 'contentful'

import { ICategoryFields, ICategory } from '@/types/contentful'

export type ContentType = 'category'
export type Fields = ICategoryFields
export type Entry = ContentfulEntry<Fields>
export type EntryCollection = ContentfulEntryCollection<Fields>
export type ReferenceCategory = ICategory

export type Entity = {
  displayName: string
  slug: string
  description: string | null
  createdAt: string
  updatedAt: string
}
