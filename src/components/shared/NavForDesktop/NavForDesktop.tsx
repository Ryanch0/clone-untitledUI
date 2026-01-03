import SearchBar from '../SearchBar.tsx'
import { cn } from '@/styles/utils.ts'
import ToggleNavItem from '@/components/shared/NavForDesktop/ToggleNavItem.tsx'
import {
  ChartBar,
  ChartPie,
  ExternalLink,
  House,
  LayoutTemplate,
  MessageCircle,
  Rows2,
  Settings,
  SquareCheckBig,
  Users,
  X
} from 'lucide-react'
import RedirectNavItem from '@/components/shared/NavForDesktop/RedirectNavItem.tsx'
import ProgressCircle from '@/components/shared/ProgressCircle.tsx'
import Profile from '@/components/shared/Profile.tsx'

type Props = {
  className?: string
}
const NavForDesktop = ({ className }: Props) => {
  const IS_ONLINE_STATUS = true

  return (
    <aside
      className={cn(
        'py-6 px-4 h-screen border-secondary border-r md:block hidden overflow-y-auto',
        className
      )}
    >
      <section className={cn('space-y-4')}>
        <header className={cn('space-y-5')}>
          <h2 className={cn('typo-page-title')}>Untitled UI</h2>
          <SearchBar />
        </header>

        <nav className={cn('flex flex-col gap-26 typo-nav')}>
          <ul>
            <li>
              <ToggleNavItem label={'Home'} icon={<House size={20} />} />
            </li>
            <li>
              <ToggleNavItem
                label={'Dashboard'}
                icon={<ChartBar size={20} />}
              />
            </li>
            <li>
              <ToggleNavItem label={'Projects'} icon={<Rows2 size={20} />} />
            </li>
            <li>
              <ToggleNavItem
                label={'Tasks'}
                icon={<SquareCheckBig size={20} />}
                notifications={8}
              />
            </li>
            <li>
              <ToggleNavItem
                label={'Reporting'}
                icon={<ChartPie size={20} />}
              />
            </li>
            <li>
              <ToggleNavItem label={'Users'} icon={<Users size={20} />} />
            </li>
          </ul>

          <ul>
            <li>
              <RedirectNavItem
                label={'Settings'}
                leftIcon={<Settings size={20} />}
              />
            </li>

            <li>
              <RedirectNavItem
                label={'Support'}
                leftIcon={<MessageCircle size={20} />}
                rightIcon={
                  <label
                    className={cn(
                      'bg-primary border-primary border flex gap-1 items-center py-0.5 px-1.5 rounded-md'
                    )}
                  >
                    <div
                      className={cn(
                        'size-1.5 rounded-[50%]',
                        IS_ONLINE_STATUS && 'bg-success '
                      )}
                    ></div>
                    <span className={cn('typo-badge')}>
                      {IS_ONLINE_STATUS ? 'Online' : 'Offline'}
                    </span>
                  </label>
                }
              />
            </li>

            <li>
              <RedirectNavItem
                label={'Open in browser'}
                leftIcon={<LayoutTemplate size={20} />}
                rightIcon={<ExternalLink size={16} />}
              />
            </li>
          </ul>
        </nav>

        <div className={cn('h-52 bg-secondary p-4 space-y-3')}>
          <div className={cn('flex justify-between')}>
            <ProgressCircle value={100} />
            <X size={20} className={cn('text-muted cursor-pointer')} />
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
