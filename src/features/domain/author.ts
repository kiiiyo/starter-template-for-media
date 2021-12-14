import {
  Entry as ContentfulEntry,
  EntryCollection as ContentfulEntryCollection,
} from 'contentful'

import { IAuthorFields, IAuthor } from '@/types/contentful'

export type ContentType = 'author'
export type Fields = IAuthorFields
export type Entry = ContentfulEntry<Fields>
export type EntryCollection = ContentfulEntryCollection<Fields>
export type ReferenceAuthor = IAuthor

export type Entity = {
  displayName: string
  avatarImage: {
    name: string
    url: string
  } | null
}
