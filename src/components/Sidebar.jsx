import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import menuItems from "./menu-items";
import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/logo.png";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useSelector } from "react-redux";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const { sidebarTheme } = useContext(ThemeContext);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [expandedSubMenu, setExpandedSubMenu] = useState(null); // Track expanded submenu
  const useType = useSelector((item) => item?.user?.user?.user_type);

  useEffect(() => {
    setActiveMenu("Dashboard");
  }, []);

  const handleCloseSidebar = () => {
    toggleSidebar();
  };

  const handleMenuClick = (title) => {
    setActiveMenu(title);
  };

  const handleSubMenuToggle = (menuTitle) => {
    setExpandedSubMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  const filterMenuItems = menuItems.filter((item) =>
    item.showTo.includes(useType)
  );

  return (
    <div
      className={`sidebar ${showSidebar ? "show" : ""}`}
      style={{
        backgroundColor: "var(--background-color)",
        color: sidebarTheme.textColor,
      }}
    >
      {showSidebar ? (
        <>
          <div className="side-logo">
            <img src={Logo} alt="Jeevan Income" />
          </div>
          <button onClick={handleCloseSidebar} className="toggle-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {filterMenuItems?.map((nav, index) => (
            <div className="side-menu" key={index}>
              <Link
                className={`side-link ${activeMenu === nav.title ? "active" : ""}`}
                to={nav.url || "#"}
                onClick={() => {
                  handleMenuClick(nav.title);
                  if (nav.subMenu) handleSubMenuToggle(nav.title);
                }}
              >
                <span className="side-menu-icon">{nav.icon}</span>
                <span className="side-menu-name">{nav.title}</span>
                {nav.subMenu && (
                  <FontAwesomeIcon
                    icon={expandedSubMenu === nav.title ? faChevronUp : faChevronDown}
                    className="submenu-toggle-icon"
                  />
                )}
              </Link>
              {nav.subMenu && expandedSubMenu === nav.title && (
                <div className={`submenu ${expandedSubMenu === nav.title ? "show" : ""}`}>
                  {nav.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      className={`submenu-link ${activeMenu === subItem.title ? "active" : ""
                        }`}
                      to={subItem.url}
                      onClick={() => handleMenuClick(subItem.title)}
                    >
                      <span className="side-menu-icon">{subItem.icon}</span>
                      <span className="submenu-name">{subItem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="hide-this-sidebar">
            <div className="side-logo">
            <img src={Logo2} alt="Jeevan Income" />
            </div>
            <ul className="sidebar-menu">
              {filterMenuItems?.map((nav, index) => (
                <div className="side-menu" key={index}>
                  <Link
                    className={`side-link ${activeMenu === nav.title ? "active" : ""}`}
                    to={nav.url || "#"}
                    onClick={() => {
                      handleMenuClick(nav.title);
                      if (nav.subMenu) handleSubMenuToggle(nav.title);
                    }}
                  >
                    <span className="side-menu-icon">{nav.icon}</span>
                    {nav.subMenu && (
                      <FontAwesomeIcon
                        icon={expandedSubMenu === nav.title ? faChevronUp : faChevronDown}
                        className="submenu-toggle-icon"
                      />
                    )}
                  </Link>

                  {nav.subMenu && expandedSubMenu === nav.title && (
                    <div className={`submenu ${expandedSubMenu === nav.title ? "show" : ""}`}>
                      {nav.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          className={`submenu-link ${activeMenu === subItem.title ? "active" : ""
                            }`}
                          to={subItem.url}
                          onClick={() => handleMenuClick(subItem.title)}
                        >
                         <span className="side-menu-icon">{subItem.icon}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
