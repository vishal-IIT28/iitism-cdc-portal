import type { AppRoute } from '../app/routeConfig'
import { portalStats, recruiterHighlights, registrationSteps } from '../data/catalog'
import { Button } from '../components/ui/Button'
import { StatGrid } from '../components/ui/StatGrid'

interface LandingPageProps {
  navigate: (path: AppRoute) => void
}

export function LandingPage({ navigate }: LandingPageProps) {
  return (
    <div className="landing-shell">
      <header className="landing-header">
        <div>
          <p className="eyebrow">Career Development Centre</p>
          <h1 className="landing-title">IIT (ISM) Dhanbad recruiter onboarding portal</h1>
          <p className="landing-copy">
            A page-based frontend for company registration, JNF and INF submissions,
            recruiter tracking, and CDC administration.
          </p>
        </div>
        <div className="landing-actions">
          <Button onClick={() => navigate('/auth')}>Recruiter Login</Button>
          <Button variant="ghost" onClick={() => navigate('/company/dashboard')}>
            Explore Recruiter Workspace
          </Button>
        </div>
      </header>

      <section className="hero-card">
        <div className="hero-main">
          <p className="eyebrow">Why this portal</p>
          <h2>Designed like a structured institute portal, not a single long demo page</h2>
          <p className="landing-copy">
            Each major experience now lives in its own page with separate files, shared layout,
            and reusable components so the frontend can scale when the Laravel backend is connected.
          </p>
          <div className="highlight-list">
            {recruiterHighlights.map((item) => (
              <article className="highlight-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="hero-side">
          <StatGrid items={portalStats} />
        </div>
      </section>

      <section className="content-card">
        <div className="content-card-head">
          <div>
            <p className="eyebrow">Registration flow</p>
            <h2>Step-by-step recruiter onboarding</h2>
          </div>
          <p className="section-copy">
            This mirrors the structured experience you asked for, with clear page boundaries and
            future-ready backend hooks.
          </p>
        </div>

        <div className="step-grid">
          {registrationSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
