import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import AuthLayout from '../layouts/AuthLayout';
import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';
import AddAPet from '../pages/Dashboard/AddAPet';
import PrivateRoute from '../routes/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import MyAddedPets from '../pages/Dashboard/MyAddedPets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path:'/',
        index: true,
      },
      {
        path:'/pets',
        element: <h2>All pet</h2>
      },
      {
        path:'/contact',
        element: <h2>contact</h2>
      }
      
    ]
  },
  {
    path:'/',
    element: <AuthLayout />,
    children: [
      {
        path:'signIn',
        Component: SignIn 
      },
      {
        path:'signUp',
        Component:SignUp 
      }
    ]
  },
  {
    path:'/dashboard',
    element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
    children:[
      {
        path:'/dashboard/addAPet',
        element:<AddAPet />
      },
      {
        path:'/dashboard/myAddedPets',
        element: <MyAddedPets />
      },
      {
        path:'/dashboard/addAPet',
        element:<h2>add a pet</h2>
      },
      {
        path:'/dashboard/myDonationCamp',
        element:<h2>my don camp</h2>
      },
      {
        path:'/dashboard/myDonation',
        element:<h2>my donation</h2>
      },
    ]
  }
])

export default router;