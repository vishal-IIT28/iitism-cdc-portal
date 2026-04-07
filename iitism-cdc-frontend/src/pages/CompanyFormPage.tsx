import { FormProgressSidebar } from '../components/forms/FormProgressSidebar'
import { FormSectionCard } from '../components/forms/FormSectionCard'
import { Button } from '../components/ui/Button'
import { StatusBadge } from '../components/ui/StatusBadge'
import { formDefinitions } from '../data/formSchemas'

interface CompanyFormPageProps {
  formType: 'jnf' | 'inf'
}

export function CompanyFormPage({ formType }: CompanyFormPageProps) {
  const form = formDefinitions[formType]

  return (
    <div className="form-page-grid">
      <div className="page-stack">
        <section className="page-hero">
          <div>
            <p className="eyebrow">{form.formType.toUpperCase()} submission</p>
            <h2>{form.title}</h2>
            <p className="section-copy">{form.subtitle}</p>
          </div>
          <StatusBadge tone="info">Schema-driven page</StatusBadge>
        </section>

        {form.sections.map((section) => (
          <FormSectionCard key={section.id} section={section} />
        ))}

        <section className="content-card">
          <div className="content-card-head">
            <div>
              <p className="eyebrow">Submission controls</p>
              <h3>Save, preview, and send to CDC</h3>
            </div>
          </div>
          <p className="section-copy">
            The final backend can autosave these sections, store drafts, and notify both recruiter
            and CDC after submission.
          </p>
          <div className="action-row">
            <Button variant="ghost">Save draft</Button>
            <Button variant="ghost">Preview submission</Button>
            <Button>Submit to CDC</Button>
          </div>
        </section>
      </div>

      <FormProgressSidebar form={form} />
    </div>
  )
}
