import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'text'
  onClick?: () => void
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const className =
    variant === 'primary'
      ? 'ui-button ui-button-primary'
      : variant === 'ghost'
        ? 'ui-button ui-button-ghost'
        : 'ui-button ui-button-text'

  return (
    <button className={`${className}${fullWidth ? ' ui-button-full' : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
