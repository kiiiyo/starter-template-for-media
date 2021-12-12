import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

export type State = {
  postCollection: Domain.Post.Collection
  pageOffset: number
}

export type Action = {
  handleChangePage: (selectedItem: { selected: number }) => void
}

export type HomeScreenProps = {
  state: State
  action: Action
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
  const {
    state: { postCollection, pageOffset },
    action: { handleChangePage },
  } = props
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      {postCollection.items.length > 0 &&
        postCollection.items.map((post: Domain.Post.Entity, index: number) => {
          const {
            fields: { title },
          } = post
          return <h1 key={index}>{title}</h1>
        })}
      <Organisms.Pagination
        state={{
          totalCount: postCollection.total,
          pageOffset,
        }}
        action={{ handleChangePage }}
      />
    </Templates.GenericTemplate>
  )
}
