import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/users";

// Icon Imports
import { MdHome, MdPerson } from "react-icons/md";
import SignIn from "views/auth/SignIn";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Users",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "users",
    component: <DataTables />,
  },
];
export default routes;
