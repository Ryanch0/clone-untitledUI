import type { ReactNode } from 'react'

type Props = {
  id: string
  placeholder?: string
  type?: string
  required?: boolean
  label?: ReactNode
  className?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
}
const CustomInput = ({
  id,
  placeholder,
  type = 'text',
  required,
  label,
  className = '',
  rightIcon,
  leftIcon
}: Props) => {
  const hasRightIcon = !!rightIcon
  const hasLeftIcon = !!leftIcon

  return (
    <div className="flex flex-col gap-1.5 md:flex-row md:items-center">
      {label && (
        <label
          htmlFor={id}
          className="typo-label text-secondary md:w-1/3 md:max-w-xs"
        >
          {label}
          {required && <span className="text-accent pl-0.5">*</span>}
        </label>
      )}
      <div className="w-full md:max-w-lg relative">
        {leftIcon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
            {leftIcon}
          </span>
        )}
        <input
          className={`input-base ${hasLeftIcon && '!pl-9'} ${hasRightIcon && '!pr-12'} ${className}`}
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          aria-required={required}
        />
        {rightIcon && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  )
}

export default CustomInput
