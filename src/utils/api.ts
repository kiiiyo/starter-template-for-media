import { createClient } from 'contentful'

export const apiContentfulClient = createClient({
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || '',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN || '',
})
