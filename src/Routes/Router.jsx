import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main_layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/EditProfile";
import PropertyItem from "../components/PropertyItem";
import About from "../pages/About";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyLists from "../pages/MyLists";
import SpotDetails from "../pages/SpotDetails";
import UpdateDeatils from "../pages/UpdateDeatils";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5010/tourist-spot')
            } 
            
        ]
    }
])

export default router;