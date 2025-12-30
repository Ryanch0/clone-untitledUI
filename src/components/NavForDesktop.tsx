import SearchBar from './shared/SearchBar.tsx'

type Props = {
  className?: string
}
const NavForDesktop = ({ className }: Props) => {
  return (
    <aside
      className={`py-6 px-4 h-screen border-secondary border-r md:block hidden ${className}`}
    >
      <section className={'space-y-4'}>
        <header className={'space-y-5'}>
          <h2>LOGO</h2>
          <SearchBar />
        </header>

        <nav className={'flex flex-col gap-26'}>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Projects</li>
            <li>Tasks</li>
            <li>Reporting</li>
            <li>Users</li>
          </ul>

          <ul>
            <li>Settings</li>
            <li>Support</li>
            <li>Open in browser</li>
          </ul>
        </nav>

        <div className={'h-52 bg-secondary'}>Card area</div>

        <div>Profile</div>
      </section>
    </aside>
  )
}

export default NavForDesktop
