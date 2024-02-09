import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Categories } from "../components/Categories";
import { Product } from "../components/Product";
import { ErrorPage } from "../components/ErrorPage";
import { CartView } from "../components/CartView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/category/:categoryId",
                element: <Categories />,
            },
            {
                path: '/item/:itemId',
                element: <Product />
            },
            {
                path: "/cart",
                element: <CartView />
            }
        ],
    }
]);