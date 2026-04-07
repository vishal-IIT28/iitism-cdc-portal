import type { FormDefinition } from '../../types/forms'
import { StatusBadge } from '../ui/StatusBadge'

interface FormProgressSidebarProps {
  form: FormDefinition
}

export function FormProgressSidebar({ form }: FormProgressSidebarProps) {
  return (
    <aside className="form-progress-card">
      <div className="content-card-head">
        <div>
          <p className="eyebrow">{form.formType.toUpperCase()}</p>
          <h3>{form.title}</h3>
        </div>
        <StatusBadge tone="info">Dynamic schema</StatusBadge>
      </div>
      <p className="section-copy">{form.subtitle}</p>
      <ol className="progress-list">
        {form.sections.map((section, index) => (
          <li key={section.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{section.title}</strong>
              <p>{section.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}
