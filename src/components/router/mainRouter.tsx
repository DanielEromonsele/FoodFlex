import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/auth/Register";
import SignInScreen from "../pages/auth/SignInScreen";
import Verify from "../pages/auth/Verify"


export const mainRouter = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [{
            index: true,
            element: <HomeScreen/>}],
    
},
{
    path: "/register",
    element: <Register/>
},
   { path: "/signIn",
    element: <SignInScreen/>
},
   { path: "/verify",
    element: <Verify/>
},
])