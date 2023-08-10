import { Outlet } from 'react-router'
import Sidebar from "./sidebar/Sidebar"
import MobileHeader from './MobileHeader'


const BasicOutlet = () => {
  return (
    <>
    <Sidebar />
    <div className='basic-outlet'>
    <div className='mobile-outlet'>
    <MobileHeader />
    <Outlet />
      </div>
    </div>
    </>
  )
}

export default BasicOutlet