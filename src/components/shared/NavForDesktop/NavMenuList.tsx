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
  Users
} from 'lucide-react'
import RedirectNavItem from '@/components/shared/NavForDesktop/RedirectNavItem.tsx'

const NavMenuList = ({ classname }: { classname?: string }) => {
  const IS_ONLINE_STATUS = true
  return (
    <nav className={cn('flex flex-col h-full typo-nav', classname)}>
      <ul>
        <li>
          <ToggleNavItem label={'Home'} icon={<House size={20} />} />
        </li>
        <li>
          <ToggleNavItem label={'Dashboard'} icon={<ChartBar size={20} />} />
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
          <ToggleNavItem label={'Reporting'} icon={<ChartPie size={20} />} />
        </li>
        <li>
          <ToggleNavItem label={'Users'} icon={<Users size={20} />} />
        </li>
      </ul>
      <div className={'flex-1'}></div>

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
                <span className={cn('typo-badge text-muted')}>
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
  )
}

export default NavMenuList
