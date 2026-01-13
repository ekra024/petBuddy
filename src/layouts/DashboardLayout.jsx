import { useState } from "react";
import { motion } from "framer-motion";
import PetLogo from "../pages/Shared/PetLogo";
import {
  PlusCircleIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  MegaphoneIcon,
  FolderOpenIcon,
  BanknotesIcon,
  Bars3Icon,
  ArrowRightOnRectangleIcon,
  Squares2X2Icon,
  GiftIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useAdmin from "../hooks/useAdmin";
import LoaddingPage from "../Loading/LoaddingPage";
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const { user, loading, logoutUser } = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  const [role, isLoading] = useAdmin();
  

  const menuItems = [
    {
      name: "Add a Pet",
      router: "/dashboard/addAPet",
      icon: <PlusCircleIcon className="w-6 h-6" />,
    },
    {
      name: "My Added Pets",
      router: "/dashboard/myAddedPets",
      icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    },
    {
      name: "Adoption Request",
      router: "/dashboard/adoptionRequest",
      icon: <HeartIcon className="w-6 h-6" />,
    },
    {
      name: "Create Donation Campaign",
      router: "/dashboard/createDonation",
      icon: <MegaphoneIcon className="w-6 h-6" />,
    },
    {
      name: "My Donation Campaigns",
      router: "/dashboard/myDonationCamp",
      icon: <FolderOpenIcon className="w-6 h-6" />,
    },
    {
      name: "My Donations",
      router: "/dashboard/myDonation",
      icon: <BanknotesIcon className="w-6 h-6" />,
    },
  ];

  const adminMenus = [
     {
      name: "All Users",
      router: "/dashboard/admin/allUsers",
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      name: "All Pets",
      router: "/dashboard/admin/allPets",
      icon: <Squares2X2Icon className="w-6 h-6" />,
    },
    {
      name: "All Campaigns",
      router: "/dashboard/admin/allCampaigns",
      icon: <MegaphoneIcon className="w-6 h-6" />,
    },
   
  ];

  const handleUserLogout = async () => {
    await logoutUser()
      .then(() => {
        toast.success("Logout Sucessfully");
       
      })
      .catch(() => {
        toast.error("Error Occured");
      });
  };

  if (loading || isLoading) return <LoaddingPage />;
  else
    return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <motion.aside
          animate={{ width: open ? 245 : 70 }}
          className="bg-white shadow-xl border-r border-gray-200 relative"
        >
          <div className="flex items-center justify-center gap-2">
            {open && <PetLogo />}
            <Bars3Icon
              className="w-6 h-6 cursor-pointer text-gray-700"
              onClick={() => setOpen(!open)}
            />
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            <NavLink to="/dashboard" className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl mx-2 text-gray-700 hover:bg-indigo-50 transition font-semibold">
              <FaHome className="w-6 h-6" />
              {open && <span>Home</span>}
            </NavLink>
            {role==="admin" && (
              <>
                {adminMenus.map((item, i) => (
                  <NavLink key={i} to={item.router} className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl mx-2 text-gray-700 hover:bg-indigo-50 transition font-semibold">
                    {item.icon}
                    {open && <span>{item.name}</span>}
                  </NavLink>
                ))}
              </>
            )}

            {menuItems.map((item, i) => (
              <NavLink key={i} to={item.router} className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-xl mx-2 text-gray-700 hover:bg-indigo-50 transition font-semibold">
                {item.icon}
                {open && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>
        </motion.aside>

        {/* Main content */}
        <div className="flex-1">
          {/* Top Navbar */}
          <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>

            {/* Profile */}
            <div
              onClick={() => setShowLogout(!showLogout)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full border"
              />
            </div>
            {showLogout && (
              <div className="absolute top-14 right-0">
                <div className="bg-blue-200">
                  <button
                    onClick={handleUserLogout}
                    className="ml-2 flex items-center gap-1 px-4 py-2"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 text-red-500" />
                    <span className="text-sm text-red-500 hover:text-red-600 font-medium">
                      Logout
                    </span>
                  </button>
                </div>
              </div>
            )}
          </header>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    );
};

export default DashboardLayout;
