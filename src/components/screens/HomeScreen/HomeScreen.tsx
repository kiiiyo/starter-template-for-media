import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

export type State = {
  postCollection: Domain.Post.Collection
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
    state: { postCollection },
    action: { handleChangePage },
  } = props
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      {postCollection.items.length > 0 && (
        <Organisms.PostCollection state={{ postCollection }} />
      )}
      <div className="mt-6">
        <Organisms.Pagination
          state={{
            totalCount: postCollection.total,
          }}
          action={{ handleChangePage }}
        />
      </div>
    </Templates.GenericTemplate>
  )
}
