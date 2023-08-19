import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import HeaderMenu from "./components/HeaderMenu";

const App = () => {
    return (
        <>
            <HeaderMenu/>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;