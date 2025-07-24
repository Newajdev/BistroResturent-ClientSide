import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PriveteRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <span className="loading loading-ball loading-xl"></span>
    }
    if(user){
        return children;
    }

    return  <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PriveteRoute;