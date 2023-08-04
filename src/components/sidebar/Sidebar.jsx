import Hero from "../../assets/images/hero.jpg"
import useSidebar from "../../hooks/useSidebar"
import SidebarMenu from "./SidebarMenu"
import SidebarMenuFooter from "./SidebarMenuFooter"


const Sidebar = () => {
  const sidebar = useSidebar();
  return (
    <div className={`sidebar ${sidebar.isOpen? "" : "hide"}`}>
      <div className="sidebar__grid">
        {/* SidebarLogoSection */}
        <div className="sidebar__hero">
            <img className="sidebar__hero__image" src={Hero} alt="Hero" />
            <h3 className="sidebar__hero__name">Jordan Smith</h3>
        </div>
        {/* SidebarMenuSection */}
        <SidebarMenu />
        {/* SidebarMenuFooter */}
        <SidebarMenuFooter />
      </div>
    </div>
  )
}

export default Sidebar