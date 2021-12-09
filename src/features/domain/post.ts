import { Entry, EntryCollection } from 'contentful'
import { IPostFields } from '@/types/contentful'

export type ContentType = 'post'

export type Fields = IPostFields

export type Entity = Entry<Fields>

export type Collection = EntryCollection<Fields>
