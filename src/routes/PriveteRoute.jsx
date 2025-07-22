import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PriveteRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user){
        return children;
    }

    return  <Navigate to={'/login'}></Navigate>
};

export default PriveteRoute;