import { Link } from "react-router-dom"
import {AiOutlineMenu} from 'react-icons/ai'
import useSidebar from "../hooks/useSidebar"

const MobileHeader = () => {
  const sidebar = useSidebar()
  return (
    <div className="mobile__header">
      <div className="mobile__header__container">
        <div></div>
      <Link className="mobile__header__container__logo" to="/">Jordan Smith</Link>
      <div
      onClick={()=> sidebar.onToggle()}
      className="mobile__header__container__toggle">
      <AiOutlineMenu size={28}/>
      </div>
      </div>
    </div>
  )
}

export default MobileHeader