import React, {
  FC,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
//
import { Env } from '../features'

/**
 * Interface
 */

export type MobileGlobalMenuDisplayConditionType = 'SHOW' | 'HIDE'

export type State = {
  screenSize: {
    width: Number
    height: Number
  }
  isMobile: Boolean
  mobileGlobalMenuDisplayCondition: MobileGlobalMenuDisplayConditionType
}

export type Actions = {
  handleMobileGlobalMenuDisplayCondition: (
    condition: MobileGlobalMenuDisplayConditionType
  ) => void
}

export type AppContextValueType = {
  state: State
  actions: Actions
}

/**
 * Context
 */

const initContextValue: AppContextValueType = {
  state: {
    mobileGlobalMenuDisplayCondition: 'HIDE',
    screenSize: {
      width: 0,
      height: 0,
    },
    isMobile: false,
  },
  actions: {
    handleMobileGlobalMenuDisplayCondition: () => {},
  },
}

export const AppContext = createContext<AppContextValueType>(initContextValue)

/**
 * Hooks
 */

export const useAppContext = (): AppContextValueType => {
  // State
  const [
    mobileGlobalMenuDisplayCondition,
    setMobileGlobalMenuDisplayCondition,
  ] = useState<MobileGlobalMenuDisplayConditionType>('HIDE')

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  })

  // Actions
  const handleMobileGlobalMenuDisplayCondition = useCallback(
    (condition) => {
      setMobileGlobalMenuDisplayCondition(condition)
    },
    [setMobileGlobalMenuDisplayCondition]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return {
    state: {
      screenSize,
      isMobile: screenSize.width <= Env.MOBILE_BREAK_POINT_SIZE,
      mobileGlobalMenuDisplayCondition,
    },
    actions: { handleMobileGlobalMenuDisplayCondition },
  }
}

/**
 * Provider
 */

export const AppContextProvider: FC = ({ children }) => {
  const { state, actions } = useAppContext()
  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  )
}

export const AppContextContextConsumer = AppContext.Consumer

export default AppContext
