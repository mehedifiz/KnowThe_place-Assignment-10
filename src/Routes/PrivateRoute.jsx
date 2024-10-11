import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../firebase/AuthProvider";

const PrivateRoute = ({children}) => {

    const { userCurrent, loader } = useContext(AuthContext);
    const location = useLocation();

    // console.log(location.pathname);

    if(loader) {
        return <Loading></Loading>
    }

    if (userCurrent) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;