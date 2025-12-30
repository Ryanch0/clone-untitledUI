import CustomInput from './CustomInput.tsx'
import { Command, Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <CustomInput
      id={'search'}
      placeholder={'Search'}
      leftIcon={<Search size={20} />}
      rightIcon={
        <span
          className={
            'flex items-center px-1 py-[1px] border-secondary border rounded-sm pointer-events-none'
          }
        >
          <Command size={12} />K
        </span>
      }
    />
  )
}

export default SearchBar
