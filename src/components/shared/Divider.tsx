import { cn } from '@/styles/utils.ts'

const Divider = () => {
  return (
    <div
      className={cn('w-full h-[1px] bg-border-secondary')}
      aria-hidden="true"
    ></div>
  )
}

export default Divider
