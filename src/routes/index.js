import Layout from "../components/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ]
    }
]