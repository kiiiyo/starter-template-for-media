import { FC } from 'react'
//
import { MobileGlobalMenuDisplayConditionType } from '../../../contexts/AppContext'
import { Hooks, Env } from '../../../features'
//
import { Atoms } from '../../'

/**
 * Interface
 */

export type CurrentMenuType = 'HOME' | 'ABOUT' | 'SEARCH'

export type MenuItemType = {
  name: string
  label: string
  path: string
}

export type State = {
  isMobile: Boolean
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
    state: { isMobile, mobileGlobalMenuDisplayCondition },
    actions: { handleMobileGlobalMenuDisplayCondition },
  } = props

  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="lg:container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Brand
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
          </div>
          {/* TODO: リファクタリングする */}
          {!isMobile && (
            <div className="ml-auto">
              <div className="flex flex-row mx-6">
                {Env.GLOBAL_MENU_LIST.map(
                  (menuItem: MenuItemType, index: number) => {
                    return (
                      <a
                        key={index}
                        className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                        href={menuItem.path}
                      >
                        {menuItem.label}
                      </a>
                    )
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* TODO: リファクタリングする */}
      {isMobile && mobileGlobalMenuDisplayCondition === 'SHOW' && (
        <div className="relative">
          <div className="absolute left-0 z-20 w-full bg-white rounded-md shadow-xl dark:bg-gray-800">
            <hr className="border-gray-200 dark:border-gray-700" />
            {Env.GLOBAL_MENU_LIST.map(
              (menuItem: MenuItemType, index: number) => {
                return (
                  <>
                    <a key={index} className="block p-5" href={menuItem.path}>
                      {menuItem.label}
                    </a>
                    <hr className="border-gray-200 dark:border-gray-700" />
                  </>
                )
              }
            )}
          </div>
        </div>
      )}
    </>
  )
}

export const GlobalHeader: FC = () => {
  const {
    state: { mobileGlobalMenuDisplayCondition, isMobile },
    actions: { handleMobileGlobalMenuDisplayCondition },
  } = Hooks.App.useAppContext()

  return (
    <GlobalHeaderPresenter
      state={{ mobileGlobalMenuDisplayCondition, isMobile }}
      actions={{ handleMobileGlobalMenuDisplayCondition }}
    />
  )
}

export default GlobalHeader
