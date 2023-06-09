import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
            //   loader: () => fetch('https://videoscript-server-site-new.vercel.app/reviewsLimit'),
              element: <Home></Home>
            },
            // {
            //   path: "/review",
            //   element: <ReviewsPage></ReviewsPage>
            // },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/register",
              element: <Signup></Signup>
            }
          ]
    }
])

export default router;