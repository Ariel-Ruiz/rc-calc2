import React, { createContext, useContext, useState } from 'react'

type SidebarContextType = {
  isVisible: boolean
  isCollapsed: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState<boolean>(false) // mobile overlay
  const [isCollapsed, setCollapsed] = useState<boolean>(false) // desktop collapsed

  const toggleSidebar = () => {
    if (window.innerWidth >= 900) {
      // desktop -> collapse/uncollapse
      setCollapsed(prev => {
        // ensure we don't leave mobile visible
        setVisible(false)
        return !prev
      })
    } else {
      // mobile -> overlay visible
      setVisible(prev => {
        // ensure collapsed false on mobile open
        if (!prev) setCollapsed(false)
        return !prev
      })
    }
  }

  const closeSidebar = () => {
    setVisible(false)
  }

  return (
    <SidebarContext.Provider value={{ isVisible, isCollapsed, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used inside SidebarProvider')
  return ctx
}
