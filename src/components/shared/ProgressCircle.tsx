import { cn } from '@/styles/utils.ts'

interface ProgressCircleProps {
  value: number
}

const ProgressCircle = ({ value }: ProgressCircleProps) => {
  const percent = Math.min(100, value / 100)

  return (
    <div className={cn('relative')}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx="32"
          cy="32"
          r="26"
          strokeWidth="6"
          className="stroke-[#E9EAEB]"
          fill="none"
          strokeLinecap="round"
        />

        <circle
          cx="32"
          cy="32"
          r="26"
          strokeWidth="6"
          className="stroke-[#7f56d9]"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${percent} 100`}
          strokeDashoffset="0"
          pathLength="1"
        />
      </svg>
      <label
        className={cn(
          'typo-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
      >{`${value}%`}</label>
    </div>
  )
}

export default ProgressCircle
