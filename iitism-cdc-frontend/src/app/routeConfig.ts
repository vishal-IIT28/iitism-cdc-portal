export type AppRoute =
  | '/'
  | '/auth'
  | '/company/dashboard'
  | '/company/forms/jnf'
  | '/company/forms/inf'
  | '/admin'

export const routes: { path: AppRoute; label: string }[] = [
  { path: '/', label: 'Home' },
  { path: '/auth', label: 'Auth' },
  { path: '/company/dashboard', label: 'Recruiter Dashboard' },
  { path: '/company/forms/jnf', label: 'JNF Form' },
  { path: '/company/forms/inf', label: 'INF Form' },
  { path: '/admin', label: 'Admin Portal' },
]

export function isAppRoute(pathname: string): pathname is AppRoute {
  return routes.some((route) => route.path === pathname)
}
