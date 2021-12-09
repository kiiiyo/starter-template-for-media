import { NextPage, GetStaticProps } from 'next'
//
import { Domain, Usecase } from '@/features'
import { Screens } from '@/components'

export type State = {
  postCollection: Domain.Post.Collection
}

export type HomePageProps = {
  state: State
}

export const getStaticProps: GetStaticProps = async () => {
  const postCollection = await Usecase.Post.postCollection()

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

  return <Screens.HomeScreen state={{ postCollection }} />
}

export default HomePage
