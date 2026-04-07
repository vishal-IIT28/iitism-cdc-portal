import { branchOptions, departmentOptions, programmeOptions } from './catalog'
import type { FieldOption, FormDefinition, FormSection } from '../types/forms'

const toOptions = (items: string[]): FieldOption[] =>
  items.map((item) => ({ label: item, value: item }))

const workModeOptions = toOptions(['On-site', 'Remote', 'Hybrid'])
const currencyOptions = toOptions(['INR', 'USD', 'EUR'])
const genderOptions = toOptions(['All', 'Male', 'Female', 'Others'])
const yesNoOptions = toOptions(['Yes', 'No'])

const companyProfileSection: FormSection = {
  id: 'company-profile',
  title: 'Company profile',
  description:
    'Capture core organisation identity once and reuse it across all recruiter submissions.',
  fields: [
    { id: 'companyName', label: 'Company name', type: 'text', required: true },
    { id: 'website', label: 'Official website', type: 'url', required: true },
    {
      id: 'address',
      label: 'Postal address',
      type: 'textarea',
      placeholder: 'Registered office / branch office address',
    },
    {
      id: 'employeeCount',
      label: 'Number of employees',
      type: 'number',
      placeholder: 'Approximate employee count',
    },
    {
      id: 'sector',
      label: 'Sector',
      type: 'text',
      placeholder: 'Energy, consulting, software, manufacturing',
    },
    {
      id: 'orgType',
      label: 'Category / organisation type',
      type: 'select',
      options: toOptions(['Indian corporate', 'MNC', 'Startup', 'PSU', 'Research lab']),
    },
    { id: 'establishedOn', label: 'Date of establishment', type: 'date' },
    {
      id: 'turnover',
      label: 'Annual turnover (NIRF)',
      type: 'text',
      placeholder: 'Example: INR 1,200 Cr',
    },
    {
      id: 'socialLink',
      label: 'LinkedIn / social media URL',
      type: 'url',
      placeholder: 'https://linkedin.com/company/your-company',
    },
    {
      id: 'industryTags',
      label: 'Industry tags',
      type: 'tags',
      placeholder: 'Mining, AI, analytics, manufacturing',
      helperText: 'Tag-style input for searchable recruiter classification',
    },
    {
      id: 'hqLocation',
      label: 'Parent HQ country / city',
      type: 'text',
      placeholder: 'Required for MNCs',
    },
    {
      id: 'businessNature',
      label: 'Nature of business',
      type: 'textarea',
      placeholder: 'Describe the core products, services, and operations',
    },
  ],
}

const hrSection: FormSection = {
  id: 'hr-contacts',
  title: 'HR and contact details',
  description:
    'Collect the main HR contact and supporting points of contact for CDC coordination.',
  fields: [
    {
      id: 'headHrName',
      label: 'Head HR / Talent acquisition name',
      type: 'text',
      required: true,
    },
    {
      id: 'headHrDesignation',
      label: 'Head HR designation',
      type: 'text',
      required: true,
    },
    { id: 'headHrEmail', label: 'Head HR email', type: 'email', required: true },
    { id: 'headHrPhone', label: 'Head HR mobile', type: 'tel', required: true },
    { id: 'primaryName', label: 'Primary contact name', type: 'text', required: true },
    {
      id: 'primaryDesignation',
      label: 'Primary contact designation',
      type: 'text',
      required: true,
    },
    { id: 'primaryEmail', label: 'Primary contact email', type: 'email', required: true },
    { id: 'primaryPhone', label: 'Primary contact mobile', type: 'tel', required: true },
    { id: 'secondaryName', label: 'Secondary contact name', type: 'text' },
    { id: 'secondaryDesignation', label: 'Secondary contact designation', type: 'text' },
    { id: 'secondaryEmail', label: 'Secondary contact email', type: 'email' },
    { id: 'secondaryPhone', label: 'Secondary contact mobile', type: 'tel' },
  ],
}

const eligibilitySection: FormSection = {
  id: 'eligibility',
  title: 'Eligibility and programmes',
  description:
    'Set global cutoffs and allow the recruiter to target programmes, branches, and departments dynamically.',
  fields: [
    {
      id: 'programmes',
      label: 'Eligible programmes',
      type: 'checkbox-group',
      options: toOptions(programmeOptions),
      required: true,
    },
    {
      id: 'branches',
      label: 'Eligible branches',
      type: 'checkbox-group',
      options: toOptions(branchOptions),
    },
    {
      id: 'departments',
      label: 'Research departments',
      type: 'checkbox-group',
      options: toOptions(departmentOptions),
    },
    {
      id: 'minimumCgpa',
      label: 'Global minimum CGPA / CPI',
      type: 'number',
      placeholder: 'Example: 7.5',
    },
    {
      id: 'allowBacklogs',
      label: 'Backlogs allowed',
      type: 'radio-group',
      options: yesNoOptions,
    },
    {
      id: 'genderFilter',
      label: 'Gender filter',
      type: 'radio-group',
      options: genderOptions,
    },
    {
      id: 'highSchoolCriteria',
      label: 'High school percentage criterion',
      type: 'text',
      placeholder: 'Optional class 10 / 12 cutoff',
    },
    {
      id: 'slpRequirement',
      label: 'Specific SLP requirement',
      type: 'textarea',
      placeholder: 'Any specific instruction related to SLP or internal academic criteria',
    },
  ],
}

const selectionSection: FormSection = {
  id: 'selection-process',
  title: 'Selection process',
  description:
    'Build multi-round evaluation with support for mode, duration, and CDC logistics.',
  fields: [
    {
      id: 'selectionRounds',
      label: 'Selection rounds',
      type: 'checkbox-group',
      options: toOptions([
        'Pre-placement talk',
        'Resume shortlisting',
        'Online / written test',
        'Group discussion',
        'Personal interview',
        'Technical interview',
        'Psychometric test',
        'Medical test',
      ]),
    },
    {
      id: 'selectionMode',
      label: 'Preferred mode',
      type: 'radio-group',
      options: toOptions(['Online', 'Offline', 'Hybrid']),
    },
    {
      id: 'testTypes',
      label: 'Test types',
      type: 'checkbox-group',
      options: toOptions(['Aptitude', 'Technical', 'Written', 'Coding']),
    },
    {
      id: 'duration',
      label: 'Indicative round duration',
      type: 'text',
      placeholder: 'Example: 45 min aptitude + 30 min interview',
    },
    {
      id: 'infrastructure',
      label: 'On-campus infrastructure requirement',
      type: 'textarea',
      placeholder: 'Rooms, panels, internet, labs, or special arrangements',
    },
    {
      id: 'otherScreening',
      label: 'Other screening notes',
      type: 'textarea',
      placeholder: 'Add any company-specific process requirement',
    },
  ],
}

const declarationSection: FormSection = {
  id: 'declaration',
  title: 'Declaration and submit',
  description:
    'Provide recruiter confirmations, typed signatory details, and final submission readiness.',
  fields: [
    {
      id: 'declarations',
      label: 'Mandatory declarations',
      type: 'checkbox-group',
      options: toOptions([
        'AIPC guidelines have been read and will be followed.',
        'Shortlisting criteria will be shared with CDC in time.',
        'Offered compensation and job details are correct and final.',
        'CDC may use approved company details for institutional reporting.',
        'Results will be shared with CDC and not directly with students.',
      ]),
      required: true,
    },
    {
      id: 'signatoryName',
      label: 'Authorised signatory name',
      type: 'text',
      required: true,
    },
    {
      id: 'signatoryDesignation',
      label: 'Authorised signatory designation',
      type: 'text',
      required: true,
    },
    { id: 'signatoryDate', label: 'Declaration date', type: 'date', required: true },
    {
      id: 'typedSignature',
      label: 'Typed signature',
      type: 'text',
      required: true,
      placeholder: 'Type full name as digital acknowledgement',
    },
  ],
}

const jnfRoleSection: FormSection = {
  id: 'job-profile',
  title: 'Job profile',
  description:
    'Define job title, work mode, expected hires, skills, and formal job description.',
  fields: [
    { id: 'jobTitle', label: 'Profile name / job title', type: 'text', required: true },
    { id: 'designation', label: 'Formal designation', type: 'text', required: true },
    { id: 'location', label: 'Place of posting', type: 'text', required: true },
    { id: 'workMode', label: 'Work location mode', type: 'radio-group', options: workModeOptions },
    { id: 'expectedHires', label: 'Expected hires', type: 'number', required: true },
    { id: 'minimumHires', label: 'Minimum hires', type: 'number' },
    { id: 'joiningMonth', label: 'Tentative joining month', type: 'date' },
    {
      id: 'skills',
      label: 'Required skills',
      type: 'tags',
      placeholder: 'Java, analytics, geoscience, operations',
    },
    {
      id: 'jobDescription',
      label: 'Job description',
      type: 'textarea',
      placeholder: 'Detailed responsibilities, business context, and expectations',
      required: true,
    },
    { id: 'jdLink', label: 'JD PDF / document link', type: 'url' },
    {
      id: 'bondDetails',
      label: 'Bond details',
      type: 'textarea',
      placeholder: 'Mention amount, duration, and conditions if applicable',
    },
    { id: 'registrationLink', label: 'Company registration link', type: 'url' },
  ],
}

const jnfCompensationSection: FormSection = {
  id: 'compensation',
  title: 'Compensation details',
  description:
    'Configure programme-wise salary structure and additional CTC components.',
  fields: [
    {
      id: 'currency',
      label: 'Currency',
      type: 'select',
      options: currencyOptions,
      required: true,
    },
    {
      id: 'ctcSummary',
      label: 'Programme-wise CTC summary',
      type: 'textarea',
      placeholder:
        'Example: B.Tech 18 LPA, M.Tech 16 LPA, MBA 17 LPA, M.Sc 14 LPA',
    },
    {
      id: 'fixedCompensation',
      label: 'Base / fixed compensation',
      type: 'textarea',
      placeholder: 'Mention base, fixed, and in-hand details by programme',
    },
    {
      id: 'salaryComponents',
      label: 'Additional salary components',
      type: 'checkbox-group',
      options: toOptions([
        'Joining bonus',
        'Retention bonus',
        'Variable pay',
        'ESOPs',
        'Relocation allowance',
        'Medical allowance',
        'Deductions',
        'Bond amount and duration',
      ]),
    },
    {
      id: 'ctcBreakup',
      label: 'CTC breakup notes',
      type: 'textarea',
      placeholder: 'Explain CTC assumptions, stocks, allowances, or deductions',
    },
  ],
}

const infRoleSection: FormSection = {
  id: 'intern-profile',
  title: 'Internship profile',
  description:
    'Capture internship title, role description, PPO policy, and duration in a structured flow.',
  fields: [
    {
      id: 'internshipTitle',
      label: 'Internship title',
      type: 'text',
      required: true,
    },
    { id: 'designation', label: 'Formal designation', type: 'text', required: true },
    { id: 'location', label: 'Place of posting', type: 'text', required: true },
    { id: 'workMode', label: 'Work location mode', type: 'radio-group', options: workModeOptions },
    { id: 'expectedHires', label: 'Expected hires', type: 'number', required: true },
    { id: 'minimumHires', label: 'Minimum hires', type: 'number' },
    { id: 'joiningMonth', label: 'Tentative joining month', type: 'date' },
    {
      id: 'duration',
      label: 'Expected internship duration',
      type: 'text',
      placeholder: 'Example: 8 weeks / 6 months',
      required: true,
    },
    {
      id: 'skills',
      label: 'Required skills',
      type: 'tags',
      placeholder: 'Data analysis, field work, frontend, CAD',
    },
    {
      id: 'internshipDescription',
      label: 'Internship description',
      type: 'textarea',
      placeholder: 'Responsibilities, learning goals, and project scope',
      required: true,
    },
    { id: 'jdLink', label: 'JD PDF / document link', type: 'url' },
    {
      id: 'ppoProvision',
      label: 'PPO provision on performance',
      type: 'radio-group',
      options: yesNoOptions,
    },
    { id: 'registrationLink', label: 'Company registration link', type: 'url' },
  ],
}

const infStipendSection: FormSection = {
  id: 'stipend',
  title: 'Stipend details',
  description:
    'Capture programme-wise stipend, housing support, perks, and total compensation.',
  fields: [
    {
      id: 'currency',
      label: 'Currency',
      type: 'select',
      options: currencyOptions,
      required: true,
    },
    {
      id: 'stipendSummary',
      label: 'Programme-wise stipend summary',
      type: 'textarea',
      placeholder:
        'Example: B.Tech INR 60,000/month, M.Tech INR 70,000/month',
    },
    {
      id: 'housingAllowance',
      label: 'Housing / HRA support',
      type: 'textarea',
      placeholder: 'Mention accommodation, HRA, travel, or meal support',
    },
    {
      id: 'perkComponents',
      label: 'Additional compensation / perks',
      type: 'checkbox-group',
      options: toOptions([
        'Housing allowance',
        'Travel support',
        'Joining bonus',
        'Performance bonus',
        'Medical benefits',
        'Laptop / equipment support',
      ]),
    },
    {
      id: 'stipendNotes',
      label: 'Stipend notes',
      type: 'textarea',
      placeholder: 'Add details for gross, net, and any exceptional allowances',
    },
  ],
}

export const formDefinitions: Record<'jnf' | 'inf', FormDefinition> = {
  jnf: {
    formType: 'jnf',
    title: 'Job Notification Form',
    subtitle:
      'Placement hiring workflow for full-time recruitment with compensation matrix and onboarding details.',
    sections: [
      companyProfileSection,
      hrSection,
      jnfRoleSection,
      eligibilitySection,
      jnfCompensationSection,
      selectionSection,
      declarationSection,
    ],
  },
  inf: {
    formType: 'inf',
    title: 'Internship Notification Form',
    subtitle:
      'Internship hiring workflow with stipend structure, PPO details, and expected duration.',
    sections: [
      companyProfileSection,
      hrSection,
      infRoleSection,
      eligibilitySection,
      infStipendSection,
      selectionSection,
      declarationSection,
    ],
  },
}
