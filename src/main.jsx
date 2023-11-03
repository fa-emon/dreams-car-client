import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <ThemeProvider>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
