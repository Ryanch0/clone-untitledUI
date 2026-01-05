import type { ReactNode } from 'react'
import { cn } from '@/styles/utils.ts'

type Props = {
  id: string
  placeholder?: string
  value?: string
  type?: string
  required?: boolean
  className?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}
const CustomInput = ({
  id,
  placeholder,
  value, // THIS VALUE IS ONLY FOR UI
  type = 'text',
  required,
  className = '',
  rightIcon,
  leftIcon
}: Props) => {
  const hasRightIcon = !!rightIcon
  const hasLeftIcon = !!leftIcon

  return (
    <div className={cn('w-full relative')}>
      {leftIcon && (
        <span
          className={cn(
            'absolute left-3.5 top-1/2 -translate-y-1/2 text-muted'
          )}
        >
          {leftIcon}
        </span>
      )}
      <input
        className={cn(
          'input-base',
          hasLeftIcon && '!pl-9',
          hasRightIcon && '!pr-12',
          className
        )}
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
        aria-required={required}
        value={value}
      />
      {rightIcon && (
        <span
          className={cn(
            'absolute right-3.5 top-1/2 -translate-y-1/2 text-muted'
          )}
        >
          {rightIcon}
        </span>
      )}
    </div>
  )
}

export default CustomInput
