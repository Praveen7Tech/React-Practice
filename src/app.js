
import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header  from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";

// Lazy loading
const About = lazy(() => import("./components/About"))

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AppStore from "./ReduxStore/AppStore";
import Cart from "./components/Cart";



const AppLayout = () => {
    return (
    <Provider store={AppStore}>
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
