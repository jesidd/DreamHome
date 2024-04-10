import { createBrowserRouter,createRoutesFromElements, RouterProvider,Route} from 'react-router-dom';
import Login from '../views/Login/Login';
import ErrorPage from '../views/Error/Error-Page';
import { Navigate } from 'react-router-dom';
import { Component } from 'react';
import Home from '../views/HomeInvit/Home';
function RouterProv(){
    const routes = createBrowserRouter([
        
        <Route idex element={Login}/>,
        {path:"/",
        Component:Login,
        errorElement: <ErrorPage/>
        },
        {path:"*", 
        element: <Navigate to="/"/>
        },
        <Route index element={Home}/>
    ]);


    return(
       <RouterProvider router={routes}></RouterProvider>
    )
}


export default RouterProv