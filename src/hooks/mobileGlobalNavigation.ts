import { useContext } from 'react'
//
import { MobileGlobalNavigationContext } from '../contexts/MobileGlobalNavigationContext'

export const useMobileGlobalNavigation = () => {
  const mobileGlobalNavigation = useContext(MobileGlobalNavigationContext)
  return mobileGlobalNavigation
}
