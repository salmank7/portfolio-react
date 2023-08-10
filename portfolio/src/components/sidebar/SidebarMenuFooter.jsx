import { Link } from "react-router-dom";
import { sidebarFooterIcons } from "./sidebarConstants";

const SidebarMenuFooter = () => {
  return (
    <div className="sidebar__menu__footer">
      <div className="sidebar__menu__footer_icons">
        {sidebarFooterIcons.map((item) => (
          <Link
            className="sidebar__menu__footer_icon"
            key={item.id}
            to={item.route}
          >
            <item.icon size={20} />
          </Link>
        ))}
      </div>
      <div className="sidebar__menu__copyright">
        <p>2023 © Salman-Themes.</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default SidebarMenuFooter;
