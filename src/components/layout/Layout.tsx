import type { FC, PropsWithChildren } from 'react'
import NavForDesktop from '../NavForDesktop.tsx'
import TobBarForMobile from '../TobBarForMobile.tsx'
import { cn } from '@/styles/utils.ts'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn('min-h-screen w-full ')}>
      <div className={cn('flex flex-col md:flex-row')}>
        <NavForDesktop className={cn('md:w-1/3 md:max-w-2xs fixed')} />
        <TobBarForMobile />
        <div className={cn('w-full md:ml-[min(33%,288px)]')}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
