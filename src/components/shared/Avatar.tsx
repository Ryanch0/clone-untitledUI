import { cn } from '@/styles/utils.ts'

type Props = {
  src: string
  alt?: string
  size: 'sm' | 'md'
  showIcon?: boolean
  isActive?: boolean
}
const Avatar = ({ src, alt, size, showIcon, isActive }: Props) => {
  return (
    <div className={'relative'}>
      <img
        className={cn(
          'rounded-full object-cover object-center border border-black/8',
          size === 'sm' ? 'size-10' : 'size-16'
        )}
        alt={alt}
        src={src}
      />
      {showIcon && (
        <div
          className={cn(
            'size-2.5 box-content border-[1.5px] border-[var(--bg-primary)] rounded-full absolute top-[27px] left-[27px]',
            isActive ? 'bg-success' : 'bg-[#eee]'
          )}
        ></div>
      )}
    </div>
  )
}

export default Avatar
