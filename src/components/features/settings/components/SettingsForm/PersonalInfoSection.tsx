import { cn } from '@/styles/utils.ts'
import CustomButton from '@/components/shared/CustomButton.tsx'
import Divider from '@/components/shared/Divider.tsx'

const PersonalInfoSection = () => {
  return (
    <>
      <div
        className={cn(
          'flex flex-col justify-between md:flex-row md:items-center'
        )}
      >
        <div>
          <h3 className={cn('typo-section-title')}>Personal info</h3>
          <p className={cn('typo-description text-tertiary')}>
            Update your photo and personal details here.
          </p>
        </div>
        <div className={cn('flex gap-3 pt-4')}>
          <CustomButton label="Cancel" />
          <CustomButton label="Save" type="submit" theme="brand" />
        </div>
      </div>
      <Divider />
    </>
  )
}

export default PersonalInfoSection
