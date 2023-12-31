import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/forgot/password",
        element: <ForgotPassword/>
    },
    {
        path: "/change/password",
        element: <ChangePassword/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
])

export default router