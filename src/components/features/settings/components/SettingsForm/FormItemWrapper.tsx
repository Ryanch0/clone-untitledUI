import { cn } from '@/styles/utils.ts'
import Divider from '@/components/shared/Divider.tsx'
import type { ReactNode } from 'react'

type Props = {
  labelSection: ReactNode
  formItem: ReactNode
  classname?: string
}
const FormItemWrapper = ({ labelSection, formItem, classname }: Props) => {
  return (
    <>
      <fieldset className={cn('flex flex-col md:flex-row gap-1.5', classname)}>
        {labelSection}
        <div className={cn('space-y-2 w-full md:max-w-lg')}>{formItem}</div>
      </fieldset>
      <Divider />
    </>
  )
}

export default FormItemWrapper
