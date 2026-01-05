import CustomInput from './CustomInput.tsx'
import { Command, Search } from 'lucide-react'
import { cn } from '@/styles/utils.ts'

const SearchBar = () => {
  return (
    <div className={cn('md:max-w-xs')}>
      <CustomInput
        id={'search'}
        placeholder={'Search'}
        leftIcon={<Search size={20} />}
        className={'!py-2'}
        rightIcon={
          <span
            className={cn(
              'typo-badge text-placeholder flex items-center px-1 py-[1px] border-secondary border rounded-sm pointer-events-none'
            )}
          >
            <Command size={11} />
            <span>K</span>
          </span>
        }
      />
    </div>
  )
}

export default SearchBar
