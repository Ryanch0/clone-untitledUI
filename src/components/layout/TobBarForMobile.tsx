import { useState } from 'react'
import { cn } from '@/styles/utils.ts'

const TobBarForMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className={cn('md:hidden border-secondary border-b p-4')}>
      <div className={cn('flex')}>
        <h2 className={cn('typo-page-title')}>Untitled UI</h2>
        <div
          className={cn('ml-auto md:hidden text-2xl')}
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        >
          ☰
        </div>
      </div>
      {toggleMenu && (
        <nav className={cn('md:hidden')}>
          <ul>
            <li>mobile-menu</li>
            <li>mobile-menu</li>
            <li>mobile-menu</li>
          </ul>
        </nav>
      )}
    </header>
  )
}
export default TobBarForMobile
