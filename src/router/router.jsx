import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import AddAPet from "../pages/Dashboard/AddAPet";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyAddedPets from "../pages/Dashboard/MyAddedPets";
import CreateDonation from "../pages/Dashboard/CreateDonationCamp";
import MyDonationCamp from "../pages/Dashboard/MyDonationCamp";
import UpdateDonationCamp from "../pages/Dashboard/DonationCamp/UpdateDonationCamp";
// import MyAddedPets from '../pages/Dashboard/MyAddedPets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
      },
      {
        path: "/pets",
        element: <h2>All pet</h2>,
      },
      {
        path: "/contact",
        element: <h2>contact</h2>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addAPet",
        element: <AddAPet />,
      },
      {
        path: "/dashboard/myAddedPets",
        Component: MyAddedPets,
      },
      {
        path: "/dashboard/adoption",
        element: <h1>adoption</h1>,
      },
      {
        path: "/dashboard/createDonation",
        element: <CreateDonation />,
      },

      {
        path: "/dashboard/myDonationCamp",
        element: <MyDonationCamp />,
      },
      {
        path: "/dashboard/updateMyDonation/:id",
        element: <UpdateDonationCamp />,
      },
      {
        path: "/dashboard/myDonation",
        element: <h2>my donation</h2>,
      },
    ],
  },
]);

export default router;
