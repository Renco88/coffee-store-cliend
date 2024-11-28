import { Children, StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import Root from './Components/Root.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updatecoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      }
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
