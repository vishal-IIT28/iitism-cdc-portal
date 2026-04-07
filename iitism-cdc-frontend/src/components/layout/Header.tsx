import { primaryNavigation } from '../../data/navigation'
import { type AppRoute } from '../../app/routeConfig'
import { Button } from '../ui/Button'

interface HeaderProps {
  pathname: AppRoute
  navigate: (path: AppRoute) => void
}

export function Header({ pathname, navigate }: HeaderProps) {
  return (
    <header className="header-shell">
      <div className="brand-block">
        <p className="eyebrow">IIT (ISM) Dhanbad</p>
        <h1 className="brand-title">Career Development Centre Portal</h1>
      </div>

      <nav className="top-nav" aria-label="Primary">
        {primaryNavigation.map((item) => (
          <button
            key={item.href}
            className={pathname === item.href ? 'nav-link nav-link-active' : 'nav-link'}
            onClick={() => navigate(item.href as AppRoute)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <Button variant="ghost" onClick={() => navigate('/auth')}>
          Recruiter Login
        </Button>
        <Button onClick={() => navigate('/company/dashboard')}>Open Workspace</Button>
      </div>
    </header>
  )
}
