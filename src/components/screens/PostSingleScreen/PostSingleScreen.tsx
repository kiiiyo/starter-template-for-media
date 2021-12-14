import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

export type State = {
  page: Domain.Post.Entity
}

export type PostSingleScreenPresenterProps = {
  state: State
}

export type PostSingleScreenProps = {
  state: State
}

export const PostSingleScreenPresenter: FC<PostSingleScreenPresenterProps> = (
  props
) => {
  const {
    state: { page },
  } = props
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      {/* TODO: layout page */}
      {page.title}
    </Templates.GenericTemplate>
  )
}

export const PostSingleScreen: FC<PostSingleScreenProps> = (props) => {
  const {
    state: { page },
  } = props

  return <PostSingleScreenPresenter state={{ page }} />
}

export default PostSingleScreen
