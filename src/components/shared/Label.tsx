import { cn } from '@/styles/utils.ts'
import type { ReactNode } from 'react'

type Props = {
  id: string
  hideLabelOnPc?: boolean
  hideLabelOnMobile?: boolean
  required?: boolean
  children: ReactNode
  classname?: string
  description?: string
}
const Label = ({
  id,
  hideLabelOnPc,
  hideLabelOnMobile,
  required,
  children,
  description,
  classname
}: Props) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        'typo-label text-secondary md:w-1/3 md:max-w-xs',
        hideLabelOnPc && 'md:hidden inline-block',
        hideLabelOnMobile && 'hidden md:inline-block',
        classname
      )}
    >
      {children}
      {required && <span className={cn('text-accent pl-0.5')}>*</span>}
      {description && (
        <p className={cn('typo-description text-tertiary')}>{description}</p>
      )}
    </label>
  )
}

export default Label
