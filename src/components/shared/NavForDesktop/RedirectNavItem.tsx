import type { ReactNode } from 'react'
import BaseNavItem from '@/components/shared/NavForDesktop/BaseNavItem.tsx'

type Props = {
  to?: string
  replace?: boolean
  label: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
}

const RedirectNavItem = ({ to = '#', label, leftIcon, rightIcon }: Props) => {
  const navigate = (to: string) => {
    console.log('redirect to:', to)
  }

  const handleClick = () => {
    navigate(to)
  }

  return (
    <BaseNavItem
      label={label}
      onClick={handleClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    />
  )
}

export default RedirectNavItem
