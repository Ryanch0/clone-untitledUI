import { useState } from 'react'
import { cn } from '@/styles/utils.ts'
import NavMenuList from '../NavMenuList.tsx'
import { Menu } from 'lucide-react'
import Logo from '@/components/shared/Logo.tsx'

const NavForMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <header className={cn('md:hidden border-secondary border-b p-4')}>
        <div className={cn('flex')}>
          <Logo />
          <button
            className={cn('ml-auto md:hidden text-secondary cursor-pointer')}
            onClick={() => {
              setToggleMenu(!toggleMenu)
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      {toggleMenu && <NavMenuList classname={cn('md:hidden py-2 px-1')} />}
    </>
  )
}
export default NavForMobile
