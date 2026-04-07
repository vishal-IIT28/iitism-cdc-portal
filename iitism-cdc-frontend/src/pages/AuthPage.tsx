import type { AppRoute } from '../app/routeConfig'
import { Button } from '../components/ui/Button'
import { StatusBadge } from '../components/ui/StatusBadge'

interface AuthPageProps {
  navigate: (path: AppRoute) => void
}

export function AuthPage({ navigate }: AuthPageProps) {
  return (
    <div className="auth-shell">
      <section className="auth-hero">
        <div>
          <p className="eyebrow">Recruiter access</p>
          <h1>Sign in or register with your official company email</h1>
          <p className="landing-copy">
            First-time recruiters verify email, create their profile, and receive credentials and
            onboarding notifications.
          </p>
          <div className="landing-actions">
            <Button onClick={() => navigate('/company/dashboard')}>Login to dashboard</Button>
            <Button variant="ghost" onClick={() => navigate('/')}>
              Back to home
            </Button>
          </div>
        </div>
        <StatusBadge tone="warning">Email OTP + admin notification</StatusBadge>
      </section>

      <div className="auth-grid">
        <section className="content-card">
          <div className="content-card-head">
            <div>
              <p className="eyebrow">Existing recruiter</p>
              <h2>Login</h2>
            </div>
          </div>
          <div className="form-grid">
            <label className="field-shell">
              <span>Company email</span>
              <input type="email" placeholder="hr@company.com" />
            </label>
            <label className="field-shell">
              <span>Password</span>
              <input type="password" placeholder="Enter your password" />
            </label>
          </div>
          <div className="action-row">
            <Button onClick={() => navigate('/company/dashboard')}>Login</Button>
            <Button variant="text">Forgot password?</Button>
          </div>
        </section>

        <section className="content-card">
          <div className="content-card-head">
            <div>
              <p className="eyebrow">New company</p>
              <h2>Registration setup</h2>
            </div>
          </div>
          <div className="form-grid">
            <label className="field-shell">
              <span>Company email</span>
              <input type="email" placeholder="official email for OTP" />
            </label>
            <label className="field-shell">
              <span>Recruiter name</span>
              <input type="text" placeholder="Full name of recruiter" />
            </label>
            <label className="field-shell">
              <span>Designation</span>
              <input type="text" placeholder="Talent Acquisition Manager" />
            </label>
            <label className="field-shell">
              <span>Contact number</span>
              <input type="tel" placeholder="+91 98XXXXXXXX" />
            </label>
          </div>
          <div className="action-row">
            <Button onClick={() => navigate('/company/dashboard')}>Verify and continue</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
