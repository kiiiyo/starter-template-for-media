import { FC } from 'react'
//
import {
  MobileGlobalNavigationDisplayConditionType,
  Actions as MobileGlobalNavigationActions,
} from '../../../contexts/MobileGlobalNavigationContext'
import { MobileGlobalNavigation } from '../../../hooks'
//
import { Atoms } from '../../'

/**
 * Interface
 */

export type State = {
  displayCondition: MobileGlobalNavigationDisplayConditionType
}

export type Actions = MobileGlobalNavigationActions

export type GlobalHeaderPresenterProps = {
  state: State
  actions: Actions
}

/**
 * Component
 */

export const GlobalHeaderPresenter: FC<GlobalHeaderPresenterProps> = (
  props
) => {
  const {
    state: { displayCondition },
    actions: { handleDisplayCondition },
  } = props

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Brand : {displayCondition}
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            {displayCondition === 'CLOSE' && (
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={() => handleDisplayCondition('OPEN')}
              >
                <Atoms.Icon size="2x" prefix="fas" name="times" />
              </button>
            )}

            {displayCondition === 'OPEN' && (
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={() => handleDisplayCondition('CLOSE')}
              >
                <Atoms.Icon size="2x" prefix="fas" name="bars" />
              </button>
            )}
          </div>
          {/* --- */}
        </div>
      </div>
    </nav>
  )
}

export const GlobalHeader: FC = () => {
  const {
    state: { displayCondition },
    actions: { handleDisplayCondition },
  } = MobileGlobalNavigation.useMobileGlobalNavigation()

  return (
    <GlobalHeaderPresenter
      state={{ displayCondition }}
      actions={{ handleDisplayCondition }}
    />
  )
}

export default GlobalHeader
