interface ProgressCircleProps {
  value: number // 0 ~ 100
}

const ProgressCircle = ({ value }: ProgressCircleProps) => {
  const percent = Math.max(0, Math.min(100, value))
  const rotation = percent * 3.6 // 360deg / 100 * percent

  return (
    <div className="w-[58px] h-[58px] border-primary border-[6px] rounded-[50%] relative overflow-visible">
      {/* 프로그레스 오버레이 arc */}
      <div
        className="absolute top-0 left-1/2 w-[6px] h-[6px] bg-[#7f56d9] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translateX(-50%) translateY(-50%) rotate(${rotation}deg)`,
          transformOrigin: '50% 24px' // 원 중심에서 바깥쪽
        }}
      />
    </div>
  )
}

export default ProgressCircle
