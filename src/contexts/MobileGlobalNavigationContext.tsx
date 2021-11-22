import React, { FC, createContext, useState, useCallback } from 'react'

/**
 * Interface
 */

export type MobileGlobalNavigationDisplayConditionType = 'OPEN' | 'CLOSE'

export type State = {
  displayCondition: MobileGlobalNavigationDisplayConditionType
}

export type Actions = {
  handleDisplayCondition: (
    condition: MobileGlobalNavigationDisplayConditionType
  ) => void
}

export type MobileGlobalNavigationContextValueType = {
  state: State
  actions: Actions
}

/**
 * Context
 */

const initContextValue: MobileGlobalNavigationContextValueType = {
  state: {
    displayCondition: 'OPEN',
  },
  actions: {
    handleDisplayCondition: () => {},
  },
}

export const MobileGlobalNavigationContext =
  createContext<MobileGlobalNavigationContextValueType>(initContextValue)

/**
 * Hooks
 */

export const useMobileGlobalNavigation =
  (): MobileGlobalNavigationContextValueType => {
    // State
    const [displayCondition, setDisplayCondition] =
      useState<MobileGlobalNavigationDisplayConditionType>('OPEN')
    // Actions
    const handleDisplayCondition = useCallback(
      (condition) => {
        setDisplayCondition(condition)
      },
      [setDisplayCondition]
    )

    return {
      state: { displayCondition },
      actions: { handleDisplayCondition },
    }
  }

/**
 * Provider
 */

export const MobileGlobalNavigationProvider: FC = ({ children }) => {
  const { state, actions } = useMobileGlobalNavigation()
  return (
    <MobileGlobalNavigationContext.Provider value={{ state, actions }}>
      {children}
    </MobileGlobalNavigationContext.Provider>
  )
}

export const MobileGlobalNavigationContextContextConsumer =
  MobileGlobalNavigationContext.Consumer

export default MobileGlobalNavigationContext
