import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Error from './Components/Error.jsx';
import CountryDetail from './Components/CountryDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/:Country",
        element: <CountryDetail/>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
