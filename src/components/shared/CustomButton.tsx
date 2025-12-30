import type { ReactNode } from 'react'

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
    primary: 'bg-primary border-primary',
    brand: 'bg-brand text-white'
  }

  const getStyle = `${themes[theme]} cursor-pointer border-2 typo-label py-[10px] px-[14px] rounded-md`

  return (
    <button className={getStyle} type={type} onClick={onClick}>
      {label}
    </button>
  )
}

export default CustomButton
