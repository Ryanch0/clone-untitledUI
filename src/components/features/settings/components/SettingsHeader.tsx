import { cn } from '@/styles/utils.ts'
import SearchBar from '@/components/shared/SearchBar.tsx'
import CustomSelect from '@/components/shared/CustomSelect.tsx'
import { TAB_OPTIONS } from '@/constant/constants.tsx'
import TabList from '@/components/shared/TabList.tsx'

const SettingsHeader = () => {
  return (
    <header className={cn('space-y-5')}>
      <div
        className={cn(
          'flex flex-col md:flex-row md:justify-between md:items-center gap-5'
        )}
      >
        <h2 className={cn('typo-page-title')}>Settings TEST</h2>
        <SearchBar />
      </div>
      <div className={'md:hidden'}>
        <CustomSelect
          options={TAB_OPTIONS}
          defaultValue={TAB_OPTIONS[0].value}
          placeholder={TAB_OPTIONS[0].label}
        />
      </div>
      <TabList options={TAB_OPTIONS} rootClassname={cn('hidden md:block')} />
    </header>
  )
}

export default SettingsHeader
