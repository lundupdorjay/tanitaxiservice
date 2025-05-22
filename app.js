
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import HeaderHome from "./src/components/HeaderHome";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


import { Provider } from "react-redux";
import AppStore from "./src/utils/AppStore";

import PackageDetail from "./src/components/PackageDetail";

const AppLayout=()=>{

const [userName,setUserName]=useState();
//authentiation
useEffect(()=>{
    const data ={
        name: "AKshay Saini"
    }
    setUserName(data.name)
},[]);

return(
    <Provider store={AppStore}>

    <div className="app">
{/* <HeaderHome/> */}
<Outlet />
    </div>
    
    </Provider>
)
}

const appRouter =createBrowserRouter([

{
    path:'/',
    element:<AppLayout/>,
    children:[
        {
            path:'/',
            element:<Body />
        },
        {
            path:'/contact',
            element:<Contact />
        },
        {
            path:'/about',
            element:<About/>
        },
      
        {
            path:"/packages/:packageId",
            element:<PackageDetail/>
        }
    ]
}



])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);