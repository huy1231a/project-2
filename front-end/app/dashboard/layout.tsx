import Nav from '../Layout/nav/nav'
import Sidebar from '../Layout/sideBar/sidebar'
import './style.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='full'>
      <div className='nav'>
        <Nav />
      </div>
      <div className='layout'>
        <div className='side_bar'>
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  )
}
