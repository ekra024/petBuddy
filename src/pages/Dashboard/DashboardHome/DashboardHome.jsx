import React from "react";
import useAdmin from "../../../hooks/useAdmin";
import LoaddingPage from "../../../Loading/LoaddingPage";
import UserDashboardHome from "./UserDashbardHome/UserDashboardHome";
import AdminDashboard from "./AdminDashboardHome/AdminDashboardHome";
import Forbidden from "../../Forbidden/Forbidden"

const DashboardHome = () => {
  const [role, isLoading] = useAdmin();
  console.log(role);
  if (isLoading) return <LoaddingPage />;
  if (role === "user") return <UserDashboardHome />;
  else if(role === 'admin') return <AdminDashboard />
  else return <Forbidden />
};

export default DashboardHome;
