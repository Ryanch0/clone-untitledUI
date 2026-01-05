import { cn } from '@/styles/utils.ts'
import CustomButton from '@/components/shared/CustomButton.tsx'
import Divider from '@/components/shared/Divider.tsx'
import CustomInput from '@/components/shared/CustomInput.tsx'
import { CloudUpload, Info, Mail } from 'lucide-react'
import PersonalInfoSection from '@/components/features/settings/components/SettingsForm/PersonalInfoSection.tsx'
import Avatar from '@/components/shared/Avatar.tsx'
import {
  COUNTRY_OPTIONS,
  DUMMY_PROFILE_IMAGE,
  TIMEZONE_OPTIONS
} from '@/constant/constants.tsx'
import Toolbar from '@/components/shared/Toolbar.tsx'
import CustomSelect from '@/components/shared/CustomSelect.tsx'

const SettingsForm = () => {
  return (
    <form className={cn('space-y-5')} onSubmit={() => {}}>
      <PersonalInfoSection />
      <Divider />
      <CustomInput
        id={'email'}
        label={'Email address'}
        value={'ryan@ryanch0.dev'}
        leftIcon={<Mail size={20} />}
        className={'!pl-10'}
        required
      />
      <Divider />

      <fieldset
        className={cn('flex flex-col md:flex-row gap-1.5 space-y-5 flex-wrap')}
      >
        <div className={cn('md:w-1/3 md:max-w-xs')}>
          <label className={cn('flex items-center gap-0.5')}>
            <span className={cn('typo-label text-secondary')}>Your photo</span>
            <strong className={cn('text-accent')}>*</strong>
            <Info size={16} className={cn('text-tertiary')} />
          </label>
          <p className={cn('typo-description text-tertiary')}>
            This will be displayed on your profile.
          </p>
        </div>

        <div
          className={cn('flex flex-col md:flex-row gap-5 w-full md:max-w-lg')}
        >
          <Avatar src={DUMMY_PROFILE_IMAGE} size={'md'} />
          <div
            className={cn(
              'py-4 px-6 border border-secondary rounded-xl flex-1'
            )}
          >
            <div
              className={cn('flex flex-col gap-4 items-center justify-center')}
            >
              <div className={cn('border border-primary p-2.5 rounded-lg')}>
                <CloudUpload size={20} />
              </div>
              <p className={cn('text-center text-tertiary typo-file-meta')}>
                <span className={cn('text-accent typo-label')}>
                  Click to upload
                </span>{' '}
                or drag and drop
                <br />
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          </div>
        </div>
      </fieldset>
      <Divider />
      <CustomInput id={'role'} label={'Role'} value={'Product Designer'} />
      <Divider />

      <CustomSelect
        label={'Country'}
        options={COUNTRY_OPTIONS}
        defaultValue={COUNTRY_OPTIONS[0].value}
      />
      <Divider />
      <CustomSelect
        label={
          <label className={cn('flex gap-0.5 items-center')}>
            <span>Timezone</span>
            <Info size={16} />
          </label>
        }
        options={TIMEZONE_OPTIONS}
        defaultValue={TIMEZONE_OPTIONS[0].value}
      />

      <Divider />

      <fieldset
        className={cn('space-y-5 flex flex-wrap flex-col md:flex-row gap-1.5')}
      >
        <div className={cn('md:w-1/3 md:max-w-xs')}>
          <label className={cn('flex items-center gap-0.5')}>
            <span className={cn('typo-label text-secondary')}>Bio</span>
            <strong className={cn('text-accent')}>*</strong>
          </label>
          <p className={cn('typo-description text-tertiary')}>
            Write a short introduction.
          </p>
        </div>
        <div className={cn('space-y-2 w-full md:max-w-lg')}>
          <Toolbar />
          <textarea
            className={cn('input-base h-40')}
            value={
              "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            }
          />
          <p className={cn('typo-description text-tertiary')}>
            964 characters left
          </p>
        </div>
        <Divider />
      </fieldset>

      <label className={cn('inline-block')}>
        <span className={cn('typo-label text-secondary')}>
          Portfolio projects
        </span>
        <p className={cn('typo-description text-tertiary')}>
          Share a few snippets of your work.
        </p>
      </label>

      <div className={cn('space-y-4')}>
        <div className={cn('w-full h-40 bg-zinc-600')}>FileUploader</div>
        <ul className={cn('space-y-3')}>
          <li className={cn('bg-red-300')}>File1</li>
          <li className={cn('bg-red-400')}>File2</li>
          <li className={cn('bg-red-600')}>File3</li>
        </ul>
      </div>
      <Divider />

      <div className={cn('flex gap-3 justify-end')}>
        <CustomButton label="Cancel" />
        <CustomButton label="Save" type="submit" theme="brand" />
      </div>
    </form>
  )
}

export default SettingsForm
