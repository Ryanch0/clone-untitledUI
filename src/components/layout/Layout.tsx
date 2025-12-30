import type { FC, PropsWithChildren } from 'react'
import NavForDesktop from '../NavForDesktop.tsx'
import TobBarForMobile from '../TobBarForMobile.tsx'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'min-h-screen w-full '}>
      <div className={'flex flex-col md:flex-row'}>
        <NavForDesktop className={'md:w-1/3 md:max-w-2xs fixed'} />
        <TobBarForMobile />
        <div className={'w-full md:ml-[min(33%,288px)]'}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
