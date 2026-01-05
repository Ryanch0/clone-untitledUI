type Props = {
  percent: number
}
const ProgressBar = ({ percent }: Props) => {
  return (
    <svg width={'100%'} height={6} viewBox={`0 0 100% 6`}>
      <rect
        x="0"
        y="0"
        width={'100%'}
        height={6}
        rx={3}
        ry={3}
        className="fill-[#E9EAEB]"
      />

      <rect
        x="0"
        y="0"
        width={`${percent}%`}
        height={6}
        rx={3}
        ry={3}
        className="fill-[#7f56d9]"
      />
    </svg>
  )
}

export default ProgressBar
