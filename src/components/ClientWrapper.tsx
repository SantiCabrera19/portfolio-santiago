'use client'

import { useActiveSection } from '@/hooks/useActiveSection'
import NavigationArrows from './NavigationArrows'

const ClientWrapper = () => {
  const activeSection = useActiveSection()
  return <NavigationArrows currentSection={activeSection} />
}

export default ClientWrapper 