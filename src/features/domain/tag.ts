import {
  Entry as ContentfulEntry,
  EntryCollection as ContentfulEntryCollection,
} from 'contentful'

import { ITagFields, ITag } from '@/types/contentful'

export type ContentType = 'tag'
export type Fields = ITagFields
export type Entry = ContentfulEntry<Fields>
export type EntryCollection = ContentfulEntryCollection<Fields>
export type ReferenceTag = ITag
//
export type Entity = {
  name: string
  slug: string
  description: string | null
  createdAt: string
  updatedAt: string
}
export type Collection = Array<Entity>
