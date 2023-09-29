import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Layout, Error, Dashboard, Kanban, Scheduler, Resources, Intro} from '@/pages'
import '@/index.css'
import { registerLicense } from '@syncfusion/ej2-base';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
    errorElement: <Error />
  },
  {
    path: "/dashboard",
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
      }
    ]
  }
])
//registerLicense(import.meta.env.VITE_SYNCFUSION_KEY);
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXZceXRXQmJfV0x0X0c=')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
