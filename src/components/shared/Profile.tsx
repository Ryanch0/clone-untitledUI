import { ChevronsUpDown } from 'lucide-react'
import { cn } from '@/styles/utils.ts'
import Avatar from '@/components/shared/Avatar.tsx'
import { DUMMY_PROFILE_IMAGE } from '@/constant/constants.tsx'

const Profile = () => {
  return (
    <div className={cn('border border-secondary rounded-xl p-3')}>
      <div className={cn('flex gap-2')}>
        <Avatar src={DUMMY_PROFILE_IMAGE} size={'sm'} showIcon isActive />

        <div className={cn('flex flex-col flex-1')}>
          <label className={cn('flex items-center')}>
            <span className={cn('typo-label')}>Olivia Rhye</span>
            <ChevronsUpDown
              size={16}
              className={cn('text-quaternary ml-auto')}
            />
          </label>
          <p className={cn('typo-description text-tertiary')}>
            ryan@ryanch0.dev
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
