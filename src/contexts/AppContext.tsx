import React, { FC, createContext, useState, useCallback } from 'react'

/**
 * Interface
 */

export type MobileGlobalMenuDisplayConditionType = 'SHOW' | 'HIDE'

export type State = {
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
  // Actions
  const handleMobileGlobalMenuDisplayCondition = useCallback(
    (condition) => {
      setMobileGlobalMenuDisplayCondition(condition)
    },
    [setMobileGlobalMenuDisplayCondition]
  )

  return {
    state: { mobileGlobalMenuDisplayCondition },
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
