import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home.jsx";
import ErorrPage from "../Pages/ErorrPage";
import LogIng from "../Pages/Loging/LogIng";
import Register from "../Pages/Register/Register";
import ShowDetails from "../Pages/ShowDetails";
import AllToy from "../Pages/All_Toy/AllToy";
import Blog from "../Pages/Blog";
import MyAddedToy from "../Pages/MyAddedToy";
import AddToy from "../Pages/AddToy";
import PrivateRoutes from "../Private/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/showDetails/:id",
        element: <PrivateRoutes><ShowDetails /></PrivateRoutes>,
        loader:({params})=> fetch(`https://b7a11-toy-marketplace-server-side-mh-miyad-mh-miyad.vercel.app/allmytoy/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIng />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allToy",
        element: <AllToy />,
      },{
          path: "/addToy",
          element:<PrivateRoutes><AddToy/></PrivateRoutes> 
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myToy",
        element: <PrivateRoutes> <MyAddedToy />  </PrivateRoutes>,
      },
      {
        path: "*",
        element: <ErorrPage />,
      },
    ],
  },
]);

export default router;
