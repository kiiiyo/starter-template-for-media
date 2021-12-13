import {
  NextPage,
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import React, { useCallback } from 'react'
import Router, { useRouter } from 'next/router'
//
import { COLLECTION_LIMIT } from '@/constants'
import { Usecase } from '@/features'
import { Screens } from '@/components'

export const getStaticPaths: GetStaticPaths = async () => {
  const totalCount = await Usecase.Post.postTotalCount()

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(totalCount / COLLECTION_LIMIT)).map(
    (offset) => `/posts/page/${offset}`
  )

  return {
    paths,
    fallback: false,
  }
}

type DynamicPageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  const offset = parseInt(String(params?.offset)) || 1

  const postCollection = await Usecase.Post.postCollection({
    offset: offset,
    limit: COLLECTION_LIMIT,
  })

  return {
    props: {
      state: { postCollection },
    },
  }
}

const DynamicPage: NextPage<DynamicPageProps> = (props) => {
  const {
    state: { postCollection },
  } = props
  const router = useRouter()
  const handleChangePage = useCallback(
    (selectedItem: { selected: number }) => {
      Router.push(`/posts/page/${selectedItem.selected + 1}`)
    },
    [router]
  )

  return (
    <Screens.HomeScreen
      state={{ postCollection }}
      action={{ handleChangePage }}
    />
  )
}

export default DynamicPage
