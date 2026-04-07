import { AppShell } from '../components/layout/AppShell'
import { AdminDashboardPage } from '../pages/AdminDashboardPage'
import { AuthPage } from '../pages/AuthPage'
import { CompanyFormPage } from '../pages/CompanyFormPage'
import { LandingPage } from '../pages/LandingPage'
import { RecruiterDashboardPage } from '../pages/RecruiterDashboardPage'
import { useAppRouter } from './useAppRouter'

export function AppRouter() {
  const { pathname, navigate } = useAppRouter()

  if (pathname === '/auth') {
    return <AuthPage navigate={navigate} />
  }

  if (pathname === '/company/dashboard') {
    return (
      <AppShell pathname={pathname} navigate={navigate}>
        <RecruiterDashboardPage navigate={navigate} />
      </AppShell>
    )
  }

  if (pathname === '/company/forms/jnf') {
    return (
      <AppShell pathname={pathname} navigate={navigate}>
        <CompanyFormPage formType="jnf" />
      </AppShell>
    )
  }

  if (pathname === '/company/forms/inf') {
    return (
      <AppShell pathname={pathname} navigate={navigate}>
        <CompanyFormPage formType="inf" />
      </AppShell>
    )
  }

  if (pathname === '/admin') {
    return (
      <AppShell pathname={pathname} navigate={navigate}>
        <AdminDashboardPage />
      </AppShell>
    )
  }

  return <LandingPage navigate={navigate} />
}
