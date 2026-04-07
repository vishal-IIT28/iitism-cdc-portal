interface StatusBadgeProps {
  tone?: 'success' | 'warning' | 'info'
  children: string
}

export function StatusBadge({ tone = 'info', children }: StatusBadgeProps) {
  return <span className={`status-badge status-badge-${tone}`}>{children}</span>
}
