import { type ReactNode, useCallback, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/styles/utils.ts'
import BaseNavItem from '@/components/shared/NavForDesktop/BaseNavItem.tsx'

type Props = {
  defaultOpen?: boolean
  onToggle?: (open: boolean) => void
  label: ReactNode
  icon?: ReactNode
  className?: string
  notifications?: number
}

const ToggleNavItem = ({
  defaultOpen = false,
  onToggle,
  label,
  icon,
  notifications
}: Props) => {
  const [open, setOpen] = useState(defaultOpen)

  const toggle = useCallback(() => {
    const newOpen = !open
    setOpen(newOpen)
    onToggle?.(newOpen)
  }, [open, onToggle])

  return (
    <BaseNavItem
      label={label}
      onClick={toggle}
      leftIcon={icon}
      rightIcon={
        <>
          {notifications && (
            <div
              className={cn(
                'absolute top-1/2 right-7 -translate-y-1/2 size-6 rounded-full border border-secondary bg-secondary flex items-center justify-center'
              )}
            >
              <span className={cn('typo-badge text-secondary')}>
                {notifications}
              </span>
            </div>
          )}
          <ChevronDown
            size={16}
            className={cn(
              'absolute top-1/2 right-0 -translate-y-1/2 text-muted transition-transform',
              open && 'rotate-x-180'
            )}
          />
        </>
      }
    />
  )
}

export default ToggleNavItem
