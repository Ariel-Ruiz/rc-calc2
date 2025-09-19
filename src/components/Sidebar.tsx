import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'
import { useI18n } from '../contexts/I18nProvider'

export default function Sidebar() {
  const { isVisible, isCollapsed, closeSidebar } = useSidebar()
  const { t } = useI18n()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const className = `sidebar ${isVisible ? 'visible' : ''} ${isCollapsed ? 'show' : ''}`

  return (
    <aside className={className} id="sidebar" onClick={() => { /* click outside handling can be added */ }}>
      <div className="sidebar-content">
        <div className="dropdown">
          <div
            className="dropdown-btn"
            id="menuCalculadoras"
            onClick={(e) => { e.stopPropagation(); setDropdownOpen(v => !v) }}
          >
            {t?.sidebar?.calculadoras || 'Calculadoras'}
          </div>

          {dropdownOpen && (
            <div className="dropdown-content" id="calculadorasDropdown">
              <div className="dropdown-item">
                <Link to="/" id="menuProfit" onClick={closeSidebar}>{t?.sidebar?.profit || 'Profit'}</Link>
              </div>
              <div className="dropdown-item disabled-link">
                <span id="menuRollertap">{t?.sidebar?.rollertap || 'Rollertap'}</span>
                <div id="menuRollertapSoon">{t?.sidebar?.proximamente || 'Próximamente'}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
