import { FC } from 'react'
//
import { MobileGlobalMenuDisplayConditionType } from '../../../contexts/AppContext'
import { Hooks } from '../../../features'
//
import { Atoms } from '../../'

/**
 * Interface
 */

export type State = {
  mobileGlobalMenuDisplayCondition: MobileGlobalMenuDisplayConditionType
}

export type Actions = {
  handleMobileGlobalMenuDisplayCondition: (
    condition: MobileGlobalMenuDisplayConditionType
  ) => void
}

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
    state: { mobileGlobalMenuDisplayCondition },
    actions: { handleMobileGlobalMenuDisplayCondition },
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
              Brand : {mobileGlobalMenuDisplayCondition}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            {mobileGlobalMenuDisplayCondition === 'SHOW' && (
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={() => handleMobileGlobalMenuDisplayCondition('HIDE')}
              >
                <Atoms.Icon size="2x" prefix="fas" name="times" />
              </button>
            )}

            {mobileGlobalMenuDisplayCondition === 'HIDE' && (
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={() => handleMobileGlobalMenuDisplayCondition('SHOW')}
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
    state: { mobileGlobalMenuDisplayCondition },
    actions: { handleMobileGlobalMenuDisplayCondition },
  } = Hooks.App.useAppContext()

  return (
    <GlobalHeaderPresenter
      state={{ mobileGlobalMenuDisplayCondition }}
      actions={{ handleMobileGlobalMenuDisplayCondition }}
    />
  )
}

export default GlobalHeader
