import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utility/UserContext";
import { Provider } from "react-redux";
import cartStore from "./utility/cartStore";
import Cart from "./component/Cart";
// import Grocery from "./component/Grocery";
const Grocery = lazy(() => import("./component/Grocery"));


function App() {
  const [userName, setUserName] = useState();

  //after authentication
  useEffect(() => {
    //after making an API call will get the data
    const data = {
      name: "Ansa",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={cartStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h3>...loading</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        // path: "/restaurants/:resId",
        path: "/restaurants",
        element: <RestaurantMenu />,
      },
      {
        path : '/cart',
        element : <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
