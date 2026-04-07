export const recruiterQuickActions = [
  {
    title: 'Create new JNF',
    detail: 'Open the placement hiring workflow for full-time job roles.',
    href: '/company/forms/jnf',
  },
  {
    title: 'Create new INF',
    detail: 'Open the internship workflow with stipend and PPO fields.',
    href: '/company/forms/inf',
  },
  {
    title: 'Review drafts',
    detail: 'Resume saved forms and check what still needs completion.',
    href: '/company/dashboard',
  },
]

export const recruiterActivity = [
  {
    title: 'JNF draft updated',
    detail: 'Graduate engineer trainee role autosaved with compensation changes.',
    stamp: '5 minutes ago',
  },
  {
    title: 'CDC clarification received',
    detail: 'Admin requested confirmation for branch-wise eligibility rules.',
    stamp: 'Today, 10:40 AM',
  },
  {
    title: 'Company profile approved',
    detail: 'CDC verified registration and enabled recruiter access.',
    stamp: 'Yesterday, 05:30 PM',
  },
]

export const recruiterSubmissions = [
  {
    company: 'Tata Steel',
    formType: 'JNF',
    role: 'Graduate Engineer Trainee',
    status: 'Under review',
    updatedAt: '07 Apr 2026, 10:30 AM',
  },
  {
    company: 'Tata Steel',
    formType: 'INF',
    role: 'Summer Operations Intern',
    status: 'Draft',
    updatedAt: '07 Apr 2026, 09:10 AM',
  },
]

export const adminStats = [
  { label: 'New registrations', value: '18' },
  { label: 'Pending JNF reviews', value: '12' },
  { label: 'Pending INF reviews', value: '7' },
  { label: 'Approved this week', value: '31' },
]

export const adminQueue = [
  {
    company: 'Google',
    formType: 'INF',
    role: 'Summer Software Engineering Intern',
    submittedAt: '07 Apr 2026, 09:15 AM',
    reviewer: 'Awaiting assignment',
    status: 'New',
  },
  {
    company: 'Vedanta',
    formType: 'JNF',
    role: 'Mining Operations Analyst',
    submittedAt: '06 Apr 2026, 04:20 PM',
    reviewer: 'Ananya Singh',
    status: 'Approved',
  },
  {
    company: 'Accenture',
    formType: 'JNF',
    role: 'Associate Software Engineer',
    submittedAt: '06 Apr 2026, 02:05 PM',
    reviewer: 'Rahul Kumar',
    status: 'Clarification requested',
  },
]

export const adminCapabilities = [
  'View complete company profile and section-wise form preview',
  'Assign a CDC reviewer and add internal processing notes',
  'Accept, reject, or send the submission back for changes',
  'Trigger notification emails to recruiters after every status change',
  'Filter queue by form type, review status, and submission date',
]
