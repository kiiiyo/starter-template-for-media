import { FC } from 'react'
//
import { Domain } from '@/features'
import { Templates, Organisms } from '@/components'

export type State = {
  postCollection: Domain.Post.Collection
}

export type HomeScreenProps = {
  state: State
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
  const {
    state: { postCollection },
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
      aaaaaaa
    </Templates.GenericTemplate>
  )
}
