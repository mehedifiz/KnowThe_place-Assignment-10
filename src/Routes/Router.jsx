import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main_layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";



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