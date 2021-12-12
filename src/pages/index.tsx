import { NextPage, GetStaticProps } from 'next'
import React, { useCallback } from 'react'
import Router, { useRouter } from 'next/router'
//
import { COLLECTION_LIMIT } from '@/constants'
import { Domain, Usecase } from '@/features'
import { Screens } from '@/components'

export type State = {
  postCollection: Domain.Post.Collection
}

export type Action = {
  handleChangePage: (selectedItem: { selected: number }) => void
}

export type HomePageProps = {
  state: State
  action: Action
}

export const getStaticProps: GetStaticProps = async () => {
  const postCollection = await Usecase.Post.postCollection({
    offset: 1,
    limit: COLLECTION_LIMIT,
  })
  return {
    props: {
      state: { postCollection },
    },
  }
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const {
    state: { postCollection },
  } = props
  const router = useRouter()
  const offset = 1

  const handleChangePage = useCallback(
    (selectedItem: { selected: number }) => {
      if (selectedItem.selected === 0) {
        Router.push('/')
      } else {
        Router.push(`/posts/page/${selectedItem.selected + 1}`)
      }
    },
    [router]
  )

  return (
    <Screens.HomeScreen
      state={{ postCollection, pageOffset: offset }}
      action={{ handleChangePage }}
    />
  )
}

export default HomePage
