import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import AddAPet from "../pages/Dashboard/AddAPet/AddAPet";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyAddedPets from "../pages/Dashboard/MyAddedPet/MyAddedPets";
import CreateDonation from "../pages/Dashboard/CreateDonationCamp/CreateDonationCamp";
import MyDonationCamp from "../pages/Dashboard/MyDonationCamp/MyDonationCamp";
import UpdateDonationCamp from "../pages/Dashboard/MyDonationCamp/UpdateDonationCamp";
import Home from "../pages/Home/Home";
import PetListing from "../pages/PetListing/PetListing";
import PetDetail from "../pages/PetListing/PetDetailPage/PetDetail";
import Campaigns from "../pages/CamaignsPage/Campaigns/Campaigns";
import CampaignDetails from "../pages/CamaignsPage/CampaignDetails/CampaignDetails";
import DonationPage from "../pages/DonationPage/DonationPage";
import StripePaymentPage from "../pages/CamaignsPage/StripePaymentPage.jsx/StripePaymentPage";
import MyDonationPage from "../pages/Dashboard/MyDonation/MyDonationPage";
import MyAdoptionRequest from "../pages/Dashboard/MyAdoptionRequest/MyAdoptionRequest";
import UpdatePet from "../pages/Dashboard/AddAPet/UpdatePet";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "../routes/AdminRoute";
import Forbidden from "../pages/Forbidden/Forbidden"
import AllPets from "../pages/Dashboard/Admin/AllPets";
import AllCampaigns from "../pages/Dashboard/Admin/AllCampaigns";
import AllDonations from "../pages/Dashboard/Admin/AllDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/pets",
        element: <PetListing />,
      },
      {
        path: "/petDetail/:id",
        element: (
          <PrivateRoute>
            <PetDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
      },
      {
        path: "/campaigns/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/donate/:id",
        element: (
          <PrivateRoute>
            {" "}
            <DonationPage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/stripe-payment",
        element: (
          <PrivateRoute>
            {" "}
            <StripePaymentPage />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <h2>contact</h2>,
      },
      {
        path:"/forbidden",
        Component: Forbidden
      }
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
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index:true,
        Component: DashboardHome
      },
      {
        path: "addAPet",
        element: <AddAPet />,
      },
      {
        path: "myAddedPets",
        Component: MyAddedPets,
      },
      {
        path: "update-pet/:id",
        element: <UpdatePet />
      },
      {
        path: "adoptionRequest",
        element: <MyAdoptionRequest />,
      },
      {
        path: "createDonation",
        element: <CreateDonation />,
      },

      {
        path: "myDonationCamp",
        element: <MyDonationCamp />,
      },
      {
        path: "updateMyDonation/:id",
        element: <UpdateDonationCamp />,
      },
      {
        path: "myDonation",
        element: <MyDonationPage />,
      },
      {
        path:"admin/allPets",
        element:<AdminRoute> <AllPets /> </AdminRoute>
      },
      {
        path:"admin/allCampaigns",
        element:<AdminRoute> <AllCampaigns /> </AdminRoute>
      },
      {
        path:"admin/allDonations",
        element:<AdminRoute> <AllDonations /> </AdminRoute>
      },
    ],
  },
]);

export default router;
