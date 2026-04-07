import type { FormField } from '../../types/forms'

interface FormFieldRendererProps {
  field: FormField
}

export function FormFieldRenderer({ field }: FormFieldRendererProps) {
  const labelText = field.required ? `${field.label} *` : field.label

  if (field.type === 'textarea') {
    return (
      <label className="field-shell">
        <span>{labelText}</span>
        <textarea rows={5} placeholder={field.placeholder} />
        {field.helperText ? <small>{field.helperText}</small> : null}
      </label>
    )
  }

  if (field.type === 'select') {
    return (
      <label className="field-shell">
        <span>{labelText}</span>
        <select defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {field.helperText ? <small>{field.helperText}</small> : null}
      </label>
    )
  }

  if (field.type === 'checkbox-group' || field.type === 'radio-group') {
    const type = field.type === 'checkbox-group' ? 'checkbox' : 'radio'

    return (
      <div className="field-shell field-shell-group">
        <span>{labelText}</span>
        <div className="option-grid">
          {field.options?.map((option) => (
            <label className="option-card" key={option.value}>
              <input name={field.id} type={type} value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {field.helperText ? <small>{field.helperText}</small> : null}
      </div>
    )
  }

  return (
    <label className="field-shell">
      <span>{labelText}</span>
      <input
        type={
          field.type === 'tags'
            ? 'text'
            : field.type === 'number'
              ? 'number'
              : field.type
        }
        placeholder={field.placeholder}
      />
      {field.helperText ? <small>{field.helperText}</small> : null}
    </label>
  )
}
