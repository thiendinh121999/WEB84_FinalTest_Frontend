import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TeacherListPage from './pages/teacherlist/teacherlist';
import PositionPage from './pages/position/position';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/teacherlist",
    element: <TeacherListPage />,
  },
  {
    path: "/position",
    element: <PositionPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
