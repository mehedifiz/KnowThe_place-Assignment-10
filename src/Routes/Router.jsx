import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main_layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "./MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import PrivateRoute from "./Privateroute";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyLists from "../pages/MyLists";
import SpotDetails from "../pages/SpotDetails";
import UpdateDeatils from "../pages/UpdateDeatils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://knowtheplace-server.vercel.app/tourist-spot"),
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            {" "}
            <MyProfile></MyProfile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("https://knowtheplace-server.vercel.app/tourist-spot"),
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyLists></MyLists>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://knowtheplace-server.vercel.app/singleSpot/${params.id}`),
        element: <UpdateDeatils></UpdateDeatils>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
