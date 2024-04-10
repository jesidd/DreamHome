import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    let islogged = true
    
    if (!islogged){
       return <Navigate to="/"/>
    }
    return(
     <Navigate to="/home"/>
    )
}

export default ProtectedRoutes