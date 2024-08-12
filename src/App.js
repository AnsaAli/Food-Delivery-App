import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider ,Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import About from  "./component/About";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
/* 
Food App
-----
Header
 -logo
 -nav item
Body
 -container
 -card container
   image,star,cuisine
Footer

*/

function App(){

return(
    <>
    <Header/>
    <Outlet/>
    </>
)
};

const appRouter =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>
      }
      ,
      {
        path: "/contact",
        element : <Contact/> 
      },
      {
        path : "/about",
        element : < About />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />
  }
  
])

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);