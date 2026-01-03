import Layout from '../layout/Layout.tsx'
import { cn } from '@/styles/utils.ts'
import SettingsHeader from '@/components/features/settings/components/SettingsHeader.tsx'
import SettingsForm from '@/components/features/settings/components/SettingsForm/SettingsForm.tsx'

const SettingsPage = () => {
  return (
    <Layout>
      <main className={cn('bg-primary px-4 pb-12 pt-8 md:px-8')}>
        <section className={cn('space-y-8')}>
          <SettingsHeader />
          <SettingsForm />
        </section>
      </main>
    </Layout>
  )
}

export default SettingsPage
