 import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import Home from "../pages/Home/Home";
import React, { Suspense } from "react";
const CurrentPrice = React.lazy(() => import("../pages/CurrentPrice/CurrentPrice"));
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/CurrentPrice',
          element:(
            <Suspense fallback={<div>Loading...</div>}>
              <CurrentPrice />
            </Suspense>
          ),
        }
      ]
    },
//     {
//       path: "add-contact",
//      element: <AddContact />,
//     },
//     {
//       path: "info/:infoID",
//       element: <InfoContact  />,
//     },{
//     path: "update/:updateID",
//     element: <AddContact  />,
//    },
  ]);
  
  export default router;