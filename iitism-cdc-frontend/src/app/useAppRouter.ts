import { useEffect, useState } from 'react'
import { type AppRoute, isAppRoute } from './routeConfig'

function getCurrentPath(): AppRoute {
  const current = window.location.pathname
  return isAppRoute(current) ? current : '/'
}

export function useAppRouter() {
  const [pathname, setPathname] = useState<AppRoute>(getCurrentPath)

  useEffect(() => {
    const handleChange = () => setPathname(getCurrentPath())

    window.addEventListener('popstate', handleChange)
    return () => window.removeEventListener('popstate', handleChange)
  }, [])

  const navigate = (nextPath: AppRoute) => {
    if (window.location.pathname === nextPath) {
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
  }

  return { pathname, navigate }
}
