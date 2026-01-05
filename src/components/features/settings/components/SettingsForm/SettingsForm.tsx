import { cn } from '@/styles/utils.ts'
import CustomButton from '@/components/shared/CustomButton.tsx'
import CustomInput from '@/components/shared/CustomInput.tsx'
import { Info, Mail } from 'lucide-react'
import PersonalInfoSection from '@/components/features/settings/components/SettingsForm/PersonalInfoSection.tsx'
import Avatar from '@/components/shared/Avatar.tsx'
import {
  COUNTRY_OPTIONS,
  DUMMY_PROFILE_IMAGE,
  TIMEZONE_OPTIONS
} from '@/constant/constants.tsx'
import Toolbar from '@/components/shared/Toolbar.tsx'
import CustomSelect from '@/components/shared/CustomSelect.tsx'
import FileUploader from '@/components/shared/FileUploader.tsx'
import FormItemWrapper from '@/components/features/settings/components/SettingsForm/FormItemWrapper.tsx'
import Label from '@/components/shared/Label.tsx'
import FileUploadItem from '@/components/shared/FileUploadItem.tsx'

const SettingsForm = () => {
  return (
    <form className={cn('space-y-5')} onSubmit={() => {}}>
      <PersonalInfoSection />

      <FormItemWrapper
        labelSection={
          <Label id={'name'} required hideLabelOnMobile>
            Name
          </Label>
        }
        formItem={
          <div className={cn('flex md:gap-6 flex-col md:flex-row gap-5')}>
            <div>
              <Label id={'first-name'} required hideLabelOnPc>
                First name
              </Label>
              <CustomInput id={'first-name'} required value={'Ryan'} />
            </div>
            <div>
              <Label id={'last-name'} required hideLabelOnPc>
                Last name
              </Label>
              <CustomInput id={'last-name'} required value={'Cho'} />
            </div>
          </div>
        }
      />

      <FormItemWrapper
        labelSection={
          <Label id={'email'} required>
            Email address
          </Label>
        }
        formItem={
          <CustomInput
            id={'email'}
            value={'ryan@ryanch0.dev'}
            leftIcon={<Mail size={20} />}
            className={'!pl-10'}
            required
          />
        }
      />

      <FormItemWrapper
        classname={cn('flex-wrap gap-5 md:gap-1.5 md:space-y-5')}
        labelSection={
          <Label
            id={'files'}
            required
            description={'This will be displayed on your profile.'}
          >
            Your photo
          </Label>
        }
        formItem={
          <div
            className={cn('flex flex-col md:flex-row gap-5 w-full md:max-w-lg')}
          >
            <Avatar src={DUMMY_PROFILE_IMAGE} size={'md'} />
            <FileUploader />
          </div>
        }
      />

      <FormItemWrapper
        labelSection={<Label id={'role'}>Role</Label>}
        formItem={<CustomInput id={'role'} value={'Frontend Engineer'} />}
      />

      <FormItemWrapper
        labelSection={<Label id={'country'}>Country</Label>}
        formItem={
          <CustomSelect
            options={COUNTRY_OPTIONS}
            defaultValue={COUNTRY_OPTIONS[0].value}
          />
        }
      />

      <FormItemWrapper
        labelSection={
          <Label id={'time-zone'}>
            <label className={cn('flex gap-0.5 items-center')}>
              <span>Timezone</span>
              <Info size={16} />
            </label>
          </Label>
        }
        formItem={
          <CustomSelect
            options={TIMEZONE_OPTIONS}
            defaultValue={TIMEZONE_OPTIONS[0].value}
          />
        }
      />

      <FormItemWrapper
        classname={cn('flex-wrap gap-5 md:gap-1.5 md:space-y-5')}
        labelSection={
          <Label
            id={'bio'}
            required
            description={'Write a short introduction.'}
          >
            Bio
          </Label>
        }
        formItem={
          <div className={cn('space-y-2')}>
            <Toolbar />
            <textarea
              className={cn('input-base h-40')}
              value={
                "I'm a Frontend Engineer based in Seoul, South Korea, specialising in React, TypeScript, and modern web product development for the Canadian market."
              }
            />
            <p className={cn('typo-description text-tertiary')}>
              964 characters left
            </p>
          </div>
        }
      />

      <FormItemWrapper
        classname={cn('flex-wrap gap-5 md:gap-1.5 md:space-y-5')}
        labelSection={
          <Label
            id={'projects'}
            description={'Share a few snippets of your work.'}
          >
            Portfolio projects
          </Label>
        }
        formItem={
          <div className={cn('w-full space-y-4')}>
            <FileUploader />
            <ul>
              <FileUploadItem
                name={'Tech design requirements.pdf'}
                sizeDescription={'200 KB of 200 KB'}
                status={'success'}
                ext={'pdf'}
                percent={100}
              />
              <FileUploadItem
                name={'Dashboard recording.mp4'}
                sizeDescription={'6.4 MB of 16 MB'}
                status={'loading'}
                ext={'mp4'}
                percent={40}
              />
              <FileUploadItem
                name={'Dashboard prototype FINAL.fig'}
                sizeDescription={'3.4 MB of 4.2 MB'}
                status={'loading'}
                ext={'fig'}
                percent={80}
              />
            </ul>
          </div>
        }
      />

      <div className={cn('flex gap-3 justify-end')}>
        <CustomButton label="Cancel" />
        <CustomButton label="Save" type="submit" theme="brand" />
      </div>
    </form>
  )
}

export default SettingsForm
