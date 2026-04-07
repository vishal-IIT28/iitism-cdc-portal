import { recruiterSidebarLinks } from '../../data/navigation'
import { type AppRoute } from '../../app/routeConfig'

interface SidebarProps {
  pathname: AppRoute
  navigate: (path: AppRoute) => void
}

export function Sidebar({ pathname, navigate }: SidebarProps) {
  return (
    <aside className="sidebar-shell">
      <div className="sidebar-panel">
        <p className="eyebrow">Workspace</p>
        <h2 className="sidebar-title">Recruiter operations</h2>
        <p className="sidebar-copy">
          Move between dashboard, JNF, INF, and admin review areas page by page.
        </p>
      </div>

      <div className="sidebar-panel">
        <p className="eyebrow">Navigation</p>
        <div className="sidebar-links">
          {recruiterSidebarLinks.map((item) => (
            <button
              key={item.href}
              className={
                pathname === item.href
                  ? 'sidebar-link sidebar-link-active'
                  : 'sidebar-link'
              }
              onClick={() => navigate(item.href as AppRoute)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
