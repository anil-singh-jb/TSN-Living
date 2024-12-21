import { Icon } from "@iconify/react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: <Icon icon="ri:dashboard-3-line" width="24" height="24" />,
    showTo: ["admin", "center", "user"],
  },

  // {
  //   title: "Application",
  //   url: "/application",
  //   icon: <Icon icon="ri:dashboard-3-line" width="24" height="24" />,
  //   showTo: ["user"],
  // },
  // {
  //   title: "Parent Declaration",
  //   url: "/declration-form",
  //   icon: <Icon icon="ri:dashboard-3-line" width="24" height="24" />,
  //   showTo: ["user"],
  // },
  // {
  //   title: "Center",
  //   url: "/center",
  //   icon: (
  //     <Icon
  //       icon="fa6-solid:building-user"
  //       width="24"
  //       height="24"
  //       style={{ marginLeft: "2px" }}
  //     />
  //   ),
  //   showTo: ["admin"],
  // },

  {
    title: "Customer List",
    url: "/parents-list",
    icon: (
      <Icon
        icon="lets-icons:user-box-duotone"
        width="29"
        height="29"
        style={{ marginLeft: "-5px" }}
      />
    ),
    showTo: ["admin"],
  },


  {
    title: "Event Management",
    url: "/testimonial-list",
    icon: <Icon icon="bi:chat-left-heart-fill" width="22" height="22" />,
    showTo: ["admin", "center"],
  },


];

export default menuItems;
