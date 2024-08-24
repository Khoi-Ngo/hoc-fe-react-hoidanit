import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/errorpage.jsx';
import UsersPage from './pages/User.jsx';
import RegisterPage from './pages/Register.jsx';
import BookPage from './pages/Book.jsx';
import LoginPage from './pages/Login.jsx';
import './styles/global.css';
import TodoApp from './components/todo/TodoApp.jsx';
import { AuthWrapper } from './components/auth_context.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        //! only this child inherit from App (same url ???)/ || homepage
        //! in that case the child belows will inherit nothing from parent (App component)
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        //TODO need to complete books page
        path: "/books",
        element: <BookPage />,
      },

      {
        //TODO: need to complete user profile page
        path: "/profile",
        element: <ProfilePage />
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  // {/* </React.StrictMode>, */}
  // strictmode call 2 times
)
