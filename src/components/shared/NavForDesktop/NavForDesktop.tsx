import SearchBar from '../SearchBar.tsx'
import { cn } from '@/styles/utils.ts'
import { X } from 'lucide-react'
import ProgressCircle from '@/components/shared/ProgressCircle.tsx'
import Profile from '@/components/shared/Profile.tsx'
import NavMenuList from '@/components/shared/NavForDesktop/NavMenuList.tsx'

type Props = {
  className?: string
}
const NavForDesktop = ({ className }: Props) => {
  return (
    <aside
      className={cn(
        'py-6 px-4 h-screen border-secondary border-r md:block hidden overflow-y-auto',
        className
      )}
    >
      <section className={cn('space-y-4 h-full flex flex-col')}>
        <header className={cn('space-y-5')}>
          <h2 className={cn('typo-page-title')}>Untitled UI</h2>
          <SearchBar />
        </header>
        <NavMenuList />
        <div className={cn('h-52 bg-secondary p-4 space-y-3')}>
          <div className={cn('flex justify-between')}>
            <ProgressCircle value={80} />
            <X size={20} className={cn('text-quaternary cursor-pointer')} />
          </div>

          <div className={'space-y-4'}>
            <div>
              <h2 className={cn('typo-label')}>Used space</h2>
              <p className={cn('typo-description text-tertiary')}>
                Your team has used 80% of your available space. Need more?
              </p>
            </div>
            <div className={cn('flex gap-3 items-center typo-label ')}>
              <button className={cn('text-tertiary cursor-pointer')}>
                Dismiss
              </button>
              <button className={'text-accent cursor-pointer'}>
                Upgrade plan
              </button>
            </div>
          </div>
        </div>
        <Profile />
      </section>
    </aside>
  )
}

export default NavForDesktop
