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
import { AllUserRolesRoutes } from './components/all_role_user_route.jsx';
import { LinhTinh } from './pages/LinhTinh.jsx';
import { Counter } from './pages/test-redux.js';

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
        element: <AllUserRolesRoutes>
          <UsersPage />
        </AllUserRolesRoutes>,
      },
      {
        path: "/books",
        element: (
          <AllUserRolesRoutes>
            <BookPage />
          </AllUserRolesRoutes>
        )
        ,
      },

      {
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

  {
    path: "/linhtinh",
    element: <Counter />,
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
