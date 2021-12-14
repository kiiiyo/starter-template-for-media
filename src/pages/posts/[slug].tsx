import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next'
import ErrorPage from 'next/error'
//
import { Usecase } from '@/features'
import { Screens } from '@/components'

type PostSinglePageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  const slug = String(params?.slug)

  const page = await Usecase.Post.postDetail(slug)

  return {
    props: {
      page,
    },
  }
}

const PostSinglePage: NextPage<PostSinglePageProps> = (props) => {
  const { page } = props
  if (!page) {
    return <ErrorPage statusCode={404} />
  }
  return <Screens.PostSingleScreen state={{ page }} />
}

export default PostSinglePage
