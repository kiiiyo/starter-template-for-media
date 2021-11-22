import { FC } from 'react'
//
import { Templates, Organisms, Atoms } from '../..'

export const HomeScreen: FC = () => {
  return (
    <Templates.GenericTemplate
      globalHeader={<Organisms.GlobalHeader />}
      globalFooter={<Organisms.GlobalFooter />}
    >
      aaaaaaa
    </Templates.GenericTemplate>
  )
}
