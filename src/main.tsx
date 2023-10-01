import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Layout, Error, Dashboard, Kanban, Scheduler, Resources, Quotes} from '@/pages'
import '@/index.css'
import { registerLicense } from '@syncfusion/ej2-base';


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
      },
      {
        path: 'resources',
        element: <Resources />
      },
      {
        path: 'quotes',
        element: <Quotes />
      }
    ]
  }
])
registerLicense(import.meta.env.VITE_SYNCFUSION_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
