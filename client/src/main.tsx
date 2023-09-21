import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Layout, Error, Dashboard, Kanban, Scheduler} from '@/pages'
import '@/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard /> 
      },
      {
        path: 'kanban',
        element: <Kanban />
      },
      {
        path: 'scheduler',
        element: <Scheduler />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
