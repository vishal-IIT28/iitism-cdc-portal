import type { AppRoute } from '../app/routeConfig'
import {
  recruiterActivity,
  recruiterQuickActions,
  recruiterSubmissions,
} from '../data/dashboardData'
import { Button } from '../components/ui/Button'
import { DataTable } from '../components/ui/DataTable'
import { StatGrid } from '../components/ui/StatGrid'

interface RecruiterDashboardPageProps {
  navigate: (path: AppRoute) => void
}

export function RecruiterDashboardPage({ navigate }: RecruiterDashboardPageProps) {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Recruiter dashboard</p>
          <h2>Manage drafts, submissions, and CDC responses</h2>
          <p className="section-copy">
            This page acts as the recruiter home after authentication, with clear entry points for
            JNF, INF, and status tracking.
          </p>
        </div>
      </section>

      <StatGrid
        items={[
          { value: '2', label: 'active drafts' },
          { value: '1', label: 'submissions under review' },
          { value: '3', label: 'comments resolved' },
          { value: '100%', label: 'profile completion visible' },
        ]}
      />

      <section className="card-grid">
        {recruiterQuickActions.map((item) => (
          <article className="content-card" key={item.title}>
            <div className="content-card-head">
              <div>
                <p className="eyebrow">Quick action</p>
                <h3>{item.title}</h3>
              </div>
            </div>
            <p className="section-copy">{item.detail}</p>
            <div className="action-row">
              <Button onClick={() => navigate(item.href as AppRoute)}>Open</Button>
            </div>
          </article>
        ))}
      </section>

      <section className="content-card">
        <div className="content-card-head">
          <div>
            <p className="eyebrow">Current submissions</p>
            <h3>Drafts and live review status</h3>
          </div>
        </div>
        <DataTable
          columns={['Company', 'Form', 'Role', 'Status', 'Updated']}
          rows={recruiterSubmissions.map((item) => [
            item.company,
            item.formType,
            item.role,
            item.status,
            item.updatedAt,
          ])}
        />
      </section>

      <section className="content-card">
        <div className="content-card-head">
          <div>
            <p className="eyebrow">Recent activity</p>
            <h3>Portal updates and admin feedback</h3>
          </div>
        </div>
        <div className="stack-list">
          {recruiterActivity.map((item) => (
            <article className="list-card" key={item.title}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
              <span>{item.stamp}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
