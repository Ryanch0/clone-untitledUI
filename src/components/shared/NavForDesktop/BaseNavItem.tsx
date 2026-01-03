import { cn } from '@/styles/utils.ts'
import type { ReactNode } from 'react'

type Props = {
  onClick?: () => void
  leftIcon?: ReactNode
  label: ReactNode
  rightIcon?: ReactNode
}
const BaseNavItem = ({ onClick, label, leftIcon, rightIcon }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'py-2 w-full relative cursor-pointer hover:bg-secondary rounded-md'
      )}
    >
      {leftIcon && (
        <span
          className={cn('absolute top-1/2 left-3 -translate-y-1/2 text-muted ')}
        >
          {leftIcon}
        </span>
      )}
      <label className={cn('pl-10 text-secondary select-none cursor-pointer')}>
        {label}
      </label>
      {rightIcon && (
        <span
          className={cn(
            'absolute top-1/2 right-3 -translate-y-1/2 text-muted transition-transform'
          )}
        >
          {rightIcon}
        </span>
      )}
    </div>
  )
}

export default BaseNavItem
