import { Link } from "react-router-dom";
import { sidebarMenuLinks } from "./constansts";
import useSidebar from "../../hooks/useSidebar";
import useActiveLink from "../../hooks/useActiveLink";

const SidebarMenu = () => {
  const activeLink = useActiveLink();
  const sidebar = useSidebar();

  return (
    <div className="sidebar__menu">
      {sidebarMenuLinks.map((item) => (
        <Link
          onClick={() => {
            activeLink.setActiveLink(item.id);
            sidebar.onToggle();
          }}
          className={`sidebar__menu__link ${
            item.id === activeLink.activeLink ? "active" : ""
          }`}
          key={item.id}
          to={item.route}
        >
          <div className="sidebar__menu__link__icon">
            <item.icon size={20} />
          </div>
          <div className="sidebar__menu__link__label">{item.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
