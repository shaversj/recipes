import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import RecipeDetail from "./RecipeDetail.jsx";
import recipes from '/src/data.json'
import RecipeList from "./RecipeList.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/recipes",
                element: <RecipeList recipes={recipes} />,
                errorElement: <ErrorPage />,

            },
            {
                path: "recipe/:id",
                element: <RecipeDetail recipes={recipes} />,
                errorElement: <ErrorPage />,

            },
        ]
    },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
