import { cn } from '@/styles/utils.ts'
import { CloudUpload } from 'lucide-react'

const FileUploader = () => {
  return (
    <div className={cn('py-4 px-6 border border-secondary rounded-xl flex-1')}>
      <div className={cn('flex flex-col gap-4 items-center justify-center')}>
        <div className={cn('border border-primary p-2.5 rounded-lg')}>
          <CloudUpload size={20} />
        </div>
        <p className={cn('text-center text-tertiary typo-file-meta')}>
          <span className={cn('text-accent typo-label')}>Click to upload</span>{' '}
          or drag and drop
          <br />
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>
    </div>
  )
}

export default FileUploader
