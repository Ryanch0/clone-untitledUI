import { cn } from '@/styles/utils.ts'
import ProgressBar from '@/components/shared/ProgressBar.tsx'
import { CircleCheck, CloudUpload, Trash2, File } from 'lucide-react'

type LabelProps = 'success' | 'error' | 'loading'

type Props = {
  name: string
  status: LabelProps
  sizeDescription: string
  percent: number
  ext: string
}
const FileUploadItem = ({
  name,
  status,
  percent,
  sizeDescription,
  ext
}: Props) => {
  return (
    <li className={cn('p-4 border border-secondary rounded-xl')}>
      <article className={cn('flex gap-3 w-full relative')}>
        <FileIcon ext={ext} />

        <div className={cn('flex flex-col gap-2.5 flex-1')}>
          <header className={cn('flex items-center')}>
            <div className={cn('flex justify-between w-full')}>
              <div className={cn('typo-file-meta')}>
                <h3 className={cn('font-medium')}>{name}</h3>
                <p className={cn('text-tertiary flex items-center gap-2')}>
                  <span>{sizeDescription}</span>
                  <span className={cn('w-[1px] h-3 border-l border-primary')} />
                  <UploadStatusLabel status={status} />
                </p>
              </div>

              <button
                type="button"
                className={cn('text-tertiary self-baseline cursor-pointer')}
                aria-label={`${name} delete`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </header>

          <div className={cn('flex items-center gap-3')}>
            <ProgressBar percent={percent} />
            <span>{percent}%</span>
          </div>
        </div>
      </article>
    </li>
  )
}

const UploadStatusLabel = ({ status }: { status: LabelProps }) => {
  const baseStyle = 'flex gap-1 items-center font-medium'
  if (status === 'success') {
    return (
      <label className={cn('text-success', baseStyle)}>
        <CircleCheck size={16} />
        <span>Complete</span>
      </label>
    )
  }
  if (status === 'loading') {
    return (
      <label className={cn(baseStyle, 'text-placeholder')}>
        <CloudUpload size={16} />
        <span>Uploading...</span>
      </label>
    )
  }
  return null
}

const FileIcon = ({ ext }: { ext: string }) => {
  const getStyles = (ext: string) => {
    if (ext === 'pdf') return 'bg-[#D92D20]'
    if (ext === 'mp4') return 'bg-[#155EEF]'
    return 'bg-[#7F56D9]'
  }
  return (
    <div className={cn('relative')}>
      <File size={40} className={cn('text-[#D5D7DA]')} />
      <label
        className={cn(
          getStyles(ext),
          'text-white font-bold text-[10px] leading-3 py-0.5 px-[3px] rounded-[2px] absolute top-4 -left-1'
        )}
      >
        {ext.toUpperCase()}
      </label>
    </div>
  )
}

export default FileUploadItem
