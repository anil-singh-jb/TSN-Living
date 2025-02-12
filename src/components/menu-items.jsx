import { Icon } from "@iconify/react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: <Icon icon="ri:dashboard-3-line" width="24" height="24" />,
    showTo: ["admin", "center", "user"],
  },

  {
    title: "My Profile",
    icon: (<Icon icon="lets-icons:user-circle" width="25"  height="25" />),
    showTo: ["admin", "center", "user"],
    subMenu: [
      { title: "Profile", url: "/profile", icon: <Icon icon="lets-icons:user-circle" width="25"  height="25" /> },
      { title: "Account Setting", url: "/account-setting", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
      { title: "Change Password", url: "/change-password", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
    ],
  },

  {
    title: "Buy Packages",
    icon: <Icon icon="material-symbols:logout-rounded" width="25" height="25" />,
    showTo: ["admin", "center", "user"],
    subMenu: [
      { title: "New Package", url: "/buy-package", icon: <Icon icon="lets-icons:user-circle" width="25"  height="25" /> },
      { title: "Package History", url: "/package-history", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
    ],
  },

  {
    title: "Withdrawal",
    icon: <Icon icon="material-symbols:logout-rounded" width="25" height="25" />,
    showTo: ["admin", "center"],
    subMenu: [
      { title: "Withdrawal", url: "/settings/profile", icon: <Icon icon="lets-icons:user-circle" width="25"  height="25" /> },
      { title: "Withdrawal History", url: "/settings/security", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
    ],
  },

  {
    title: "Transaction Report",
    url: "/parents-list",
    icon: <Icon icon="material-symbols:logout-rounded" width="25" height="25" />,
    showTo: ["admin", "center"],
  },

  {
    title: "Income Report",
    icon: <Icon icon="material-symbols:logout-rounded" width="25" height="25" />,
    showTo: ["admin", "center", "user"],
    subMenu: [
      { title: "Matching Income", url: "/settings/security", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
      { title: "Salary Income", url: "/settings/security", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
      { title: "Level & Reward Income", url: "/settings/security", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
      { title: "Insurance Income", url: "/settings/security", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
    ],
  },


  
  {
    title: "My Team",
    icon: (
      <Icon
        icon="lets-icons:user-box-duotone"
        width="29"
        height="29"
        style={{ marginLeft: "-5px" }}
      />
    ),
    subMenu: [
      // { title: "My Direct", url: "/settings/security", icon: <Icon icon="lets-icons:lock" width="25"  height="25" /> },
      { title: "Tree View", url: "/tree-view", icon: <Icon icon="lets-icons:user-circle" width="25"  height="25" /> },
      // { title: "Lavel Wise Report", url: "/settings/profile", icon: <Icon icon="lets-icons:user-circle" width="25"  height="25" /> },
    ],
    showTo: ["admin"],
  },

];

export default menuItems;