import { useState } from 'react'

const TobBarForMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className={'md:hidden border-secondary border-b p-4'}>
      <div className={'flex'}>
        <h2>LOGO</h2>
        <div
          className={'ml-auto md:hidden text-2xl'}
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        >
          ☰
        </div>
      </div>
      {toggleMenu && (
        <nav className={'md:hidden'}>
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
