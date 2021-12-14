import {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next'

import { Usecase } from '@/features'

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

  console.log('page', page)

  return {
    props: {},
  }
}

const PostSinglePage: NextPage<PostSinglePageProps> = (props) => {
  // if (!page) {
  //   return <ErrorPage statusCode={404} />
  // }
  return <div>aaa</div>
}

export default PostSinglePage
