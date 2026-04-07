import type { FormSection } from '../../types/forms'
import { FormFieldRenderer } from './FormFieldRenderer'

interface FormSectionCardProps {
  section: FormSection
}

export function FormSectionCard({ section }: FormSectionCardProps) {
  return (
    <section className="content-card">
      <div className="content-card-head">
        <div>
          <p className="eyebrow">{section.id.replace('-', ' ')}</p>
          <h3>{section.title}</h3>
        </div>
        <p className="section-copy">{section.description}</p>
      </div>

      <div className="form-grid">
        {section.fields.map((field) => (
          <FormFieldRenderer field={field} key={field.id} />
        ))}
      </div>
    </section>
  )
}
