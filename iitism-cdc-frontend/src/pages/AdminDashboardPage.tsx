import { adminCapabilities, adminQueue, adminStats } from '../data/dashboardData'
import { DataTable } from '../components/ui/DataTable'
import { StatGrid } from '../components/ui/StatGrid'
import { StatusBadge } from '../components/ui/StatusBadge'

export function AdminDashboardPage() {
  return (
    <div className="page-stack">
      <section className="page-hero">
        <div>
          <p className="eyebrow">CDC admin portal</p>
          <h2>Review, edit, accept, reject, and monitor recruiter submissions</h2>
          <p className="section-copy">
            This page is structured for CDC users to control the full queue and later connect to
            admin APIs cleanly.
          </p>
        </div>
        <StatusBadge tone="warning">Review workflow</StatusBadge>
      </section>

      <StatGrid items={adminStats} />

      <section className="content-card">
        <div className="content-card-head">
          <div>
            <p className="eyebrow">Review queue</p>
            <h3>All recruiter submissions</h3>
          </div>
        </div>
        <DataTable
          columns={['Company', 'Form', 'Role', 'Submitted', 'Reviewer', 'Status']}
          rows={adminQueue.map((item) => [
            item.company,
            item.formType,
            item.role,
            item.submittedAt,
            item.reviewer,
            item.status,
          ])}
        />
      </section>

      <section className="content-card">
        <div className="content-card-head">
          <div>
            <p className="eyebrow">Admin actions</p>
            <h3>Frontend-ready capabilities</h3>
          </div>
        </div>
        <div className="stack-list">
          {adminCapabilities.map((capability) => (
            <article className="list-card" key={capability}>
              <div>
                <strong>{capability}</strong>
              </div>
              <span>Enabled in UI</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
