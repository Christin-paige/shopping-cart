import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Womens from './womens.jsx';
import Mens from './mens.jsx'
import ShoppingBag from './shopping-bag.jsx';
import Jewelery from './jewelery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "mens",
    element:<Mens />
  },
  { path: "jewelery",
    element: <Jewelery />
  },
  {
    path: "womens",
    element:<Womens />,
    children: [
      { path: "shopping-bag", element: <ShoppingBag />},
   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
