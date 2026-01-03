import { cn } from '@/styles/utils.ts'
import CustomButton from '@/components/shared/CustomButton.tsx'
import CustomInput from '@/components/shared/CustomInput.tsx'
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
      <div className={cn('w-full')}>
        <div className={'flex flex-col md:flex-row md:items-center gap-1.5'}>
          <label
            className={cn(
              'typo-label text-secondary md:w-1/3 md:max-w-xs hidden md:block'
            )}
          >
            Name
            <span className={cn('text-accent pl-0.5')}>*</span>
          </label>

          <div className={'flex flex-col md:flex-row gap-5'}>
            <CustomInput
              id={'first-name'}
              label={'First name'}
              value={'Ryan'}
              hideLabelOnPc
              required
            />
            <CustomInput
              id={'last-name'}
              label={'Last name'}
              value={'Cho'}
              hideLabelOnPc
              required
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfoSection
