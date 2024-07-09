import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

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
    <Body/>
    </>
)
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);