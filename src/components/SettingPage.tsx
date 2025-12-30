import CustomInput from './shared/CustomInput.tsx'
import Layout from './layout/Layout.tsx'
import SearchBar from './shared/SearchBar.tsx'
import CustomButton from './shared/CustomButton.tsx'
import Divider from './shared/Divider.tsx'
import { Info } from 'lucide-react'

const SettingPage = () => {
  return (
    <Layout>
      <main className="bg-primary px-4 pb-12 pt-8 md:px-8">
        <section className="space-y-8">
          <header className="space-y-5">
            <div
              className={
                'flex flex-col md:flex-row md:justify-between md:items-center gap-5'
              }
            >
              <h2 className="typo-page-title">Settings</h2>
              <SearchBar />
            </div>
            <CustomInput
              id="test"
              placeholder="Details"
              className={'md:hidden'}
            />
          </header>

          <form className={'space-y-5'}>
            <div
              className={
                'flex flex-col justify-between md:flex-row md:items-center'
              }
            >
              <div>
                <h3 className="typo-section-title">Personal info</h3>
                <p className="typo-description text-tertiary">
                  Update your photo and personal details here.
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <CustomButton label="Cancel" />
                <CustomButton label="Save" type="submit" theme="brand" />
              </div>
            </div>
            <Divider />

            <CustomInput
              id="first-name"
              label={'First name'}
              placeholder="Ryan"
              required
            />
            <CustomInput
              id="last-name"
              label={'Last name'}
              placeholder={'Cho'}
              required
            />
            <Divider />

            <CustomInput
              id={'email'}
              label={'Email address'}
              placeholder={'ryan@ryanch0.dev'}
              required
            />
            <Divider />

            <fieldset className={'space-y-5'}>
              <div>
                <label className={'flex items-center gap-0.5'}>
                  <span className={'typo-label text-secondary'}>
                    Your photo
                  </span>
                  <strong className={'text-accent'}>*</strong>
                  <Info size={16} />
                </label>
                <p className={'typo-description text-tertiary'}>
                  This will be displayed on your profile.
                </p>
              </div>
              <img src={'#'} alt={'profile-image'} className={'rounded-md'} />
              <div>File upload</div>
            </fieldset>
            <Divider />
            <CustomInput
              id={'role'}
              label={'Role'}
              placeholder={'Product Designer'}
            />
            <Divider />
            <CustomInput
              id={'country'}
              label={'Country'}
              placeholder={'Canada'}
            />
            <Divider />
            <CustomInput
              id={'time-zone'}
              label={
                <label className={'flex gap-0.5 items-center'}>
                  <span>Timezone</span>
                  <Info size={16} />
                </label>
              }
              placeholder={'UTC−08:00'}
            />
            <Divider />

            <fieldset className={'space-y-5'}>
              <div>
                <label className={'flex items-center gap-0.5'}>
                  <span className={'typo-label text-secondary'}>Bio</span>
                  <strong className={'text-accent'}>*</strong>
                </label>
                <p className={'typo-description text-tertiary'}>
                  Write a short introduction.
                </p>
              </div>
              <div>
                <textarea className={'input-base h-40'} />
                <p className={'typo-description text-tertiary'}>
                  964 characters left
                </p>
              </div>
              <Divider />
            </fieldset>

            <label className={'inline-block'}>
              <span className={'typo-label text-secondary'}>
                Portfolio projects
              </span>
              <p className={'typo-description text-tertiary'}>
                Share a few snippets of your work.
              </p>
            </label>

            <div className={'space-y-4'}>
              <div className={'w-full h-40 bg-zinc-600'}>FileUploader</div>
              <ul className={'space-y-3'}>
                <li className={'bg-red-300'}>File1</li>
                <li className={'bg-red-400'}>File2</li>
                <li className={'bg-red-600'}>File3</li>
              </ul>
            </div>
            <Divider />

            <div className="flex gap-3 justify-end">
              <CustomButton label="Cancel" />
              <CustomButton label="Save" type="submit" theme="brand" />
            </div>
          </form>
        </section>
      </main>
    </Layout>
  )
}

export default SettingPage
