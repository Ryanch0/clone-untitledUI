import type { ReactNode } from 'react'
import { cn } from '@/styles/utils.ts'

type Props = {
  id: string
  placeholder?: string
  value?: string
  type?: string
  required?: boolean
  label?: ReactNode
  className?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  hideLabelOnPc?: boolean
}
const CustomInput = ({
  id,
  placeholder,
  value, // THIS VALUE IS ONLY FOR UI
  type = 'text',
  required,
  label,
  className = '',
  rightIcon,
  leftIcon,
  hideLabelOnPc
}: Props) => {
  const hasRightIcon = !!rightIcon
  const hasLeftIcon = !!leftIcon

  return (
    <div className={cn('flex flex-col gap-1.5 md:flex-row md:items-center')}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'typo-label text-secondary md:w-1/3 md:max-w-xs',
            hideLabelOnPc && 'md:hidden'
          )}
        >
          {label}
          {required && <span className={cn('text-accent pl-0.5')}>*</span>}
        </label>
      )}
      <div className={cn('w-full md:max-w-lg relative')}>
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
    </div>
  )
}

export default CustomInput
