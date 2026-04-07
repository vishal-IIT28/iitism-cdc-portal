import type { ReactNode } from 'react'
import { type AppRoute } from '../../app/routeConfig'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface AppShellProps {
  children: ReactNode
  pathname: AppRoute
  navigate: (path: AppRoute) => void
}

export function AppShell({ children, pathname, navigate }: AppShellProps) {
  return (
    <div className="app-shell">
      <Header pathname={pathname} navigate={navigate} />
      <div className="app-layout">
        <Sidebar pathname={pathname} navigate={navigate} />
        <main className="page-shell">{children}</main>
      </div>
    </div>
  )
}
