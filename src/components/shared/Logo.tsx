import { cn } from '@/styles/utils.ts'

const Logo = () => {
  return (
    <div className={cn('flex gap-1.5')}>
      <img
        src={'./logo.png'}
        alt="logo"
        width={32}
        height={32}
        className={cn('object-contain')}
      />
      <h2 className={cn('typo-page-title')}>Untitled UI</h2>
    </div>
  )
}

export default Logo
