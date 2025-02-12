import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { Icon } from "@iconify/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import "../assets/css/NavbarDrorpdown.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Awatar from "../assets/images/avatar_9.jpg";
const DashboardNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  useEffect(() => {
    const isMobileScreen = window.innerWidth <= 768;
    setShowSidebar(!isMobileScreen);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logout = async () => {
    console.log("logout");
    await localStorage.clear("userData");
    toast.success("Logout Successfully!");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="dashnavbar">
        <div className={`main-navbar ${showSidebar ? "show" : ""}`}>
          <div className="dash-top-nav">
            <div>
              <button className="sidebar-close-btn" onClick={toggleSidebar}>
                {showSidebar ? (
                  <Icon icon="solar:alt-arrow-left-linear" />
                ) : (
                  <Icon icon="solar:alt-arrow-right-linear" />
                )}
              </button>

              <button className="sidebar-close-btn2" onClick={toggleSidebar}>
                {showSidebar ? (
                  <Icon icon="gg:menu-left" />
                ) : (
                  <Icon icon="gg:menu-left" />
                )}
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", height: "50px" }}>
              <p className="login-time">Last Login: 22-Jan-2025 05:37:42</p>
              <span className="topnavbar-name"> Hi.! {user?.fullName}</span>
              <img
                src={Awatar}
                alt="User Avatar"
                style={{ cursor: "pointer", borderRadius: "50%", width: "40px", height: "40px" }}
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="dropdown-content" ref={dropdownRef}>
                  <div className="dropdown-content-profile">

                    <div className="dropdown-content-profile-avatar">
                      <img src={Awatar} alt="User Avatar" />
                    </div>

                    <div>
                      <div className="dropdown-content-profile-name">{user?.fullName}</div>
                      <div className="dropdown-content-profile-email">{user?.email}</div>
                      <div className="dropdown-content-profile-email">
                        {user?.sponser_code}
                        <span style={{ marginLeft: "0px" }}>
                          <button className="share-ref-btn">
                            <Icon
                              style={{ fontSize: "16px", color: "var(--text-color-white)", cursor: "pointer", marginRight: "5px" }}
                              icon="material-symbols:share"
                            /> Share Referral ID
                          </button>

                        </span>
                      </div>
                    </div>

                  </div>
                  <ul>
                    <li> <Icon icon="lets-icons:user-circle" width={"22"} height={"22"} /> Profile</li>
                    <li style={{ borderRadius: "0 0 10px 10px" }} onClick={logout} > <Icon icon="material-symbols:logout-rounded" width={"22"} height={"22"} /> Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
