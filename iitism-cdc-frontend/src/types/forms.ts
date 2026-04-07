export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'url'
  | 'number'
  | 'date'
  | 'password'
  | 'textarea'
  | 'select'
  | 'tags'
  | 'checkbox-group'
  | 'radio-group'

export interface FieldOption {
  label: string
  value: string
}

export interface FormField {
  id: string
  label: string
  type: FieldType
  placeholder?: string
  helperText?: string
  required?: boolean
  options?: FieldOption[]
}

export interface FormSection {
  id: string
  title: string
  description: string
  fields: FormField[]
}

export interface FormDefinition {
  formType: 'jnf' | 'inf'
  title: string
  subtitle: string
  sections: FormSection[]
}
