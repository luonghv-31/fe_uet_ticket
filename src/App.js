import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainApp from './pages';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />
  }
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <MainApp />
      </RouterProvider>
    </React.StrictMode>
  );
}

export default App;
