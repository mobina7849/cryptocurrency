 import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import CurrentPrice from "../pages/CurrentPrice/CurrentPrice";
import Home from "../pages/Home/Home";
// import AddContact from "../pages/addContact/addContact";
// import InfoContact from "../pages/infoContact/infoContact";
// import Home from "../pages/Home/Home";
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
          path:'CurrentPrice',
          element:<CurrentPrice/>
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