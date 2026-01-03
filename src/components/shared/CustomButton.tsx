import type { ReactNode } from 'react'
import { cn } from '@/styles/utils.ts'

type Props = {
  label: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  theme?: 'primary' | 'brand'
}
const CustomButton = ({
  onClick,
  theme = 'primary',
  label,
  type = 'button'
}: Props) => {
  const themes = {
    primary: 'bg-primary border-primary border',
    brand: 'bg-brand text-white'
  }

  const getStyle = cn(
    themes[theme],
    'cursor-pointer typo-label py-[10px] px-[14px] rounded-md button-shadow'
  )

  return (
    <button className={getStyle} type={type} onClick={onClick}>
      {label}
    </button>
  )
}

export default CustomButton
