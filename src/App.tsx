import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import NotFound from './pages/NotFound';
import Navbar from './pages/NavBar';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/products/:id",
        element:<ProductDetails />

      },

      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/login",
        element:<Login /> 
      },
      {
        path:"/dashboard/user/profile",
        element:<UserProfile /> 
      },
      {
        path:"/dashboard/admin/profile",
        element:<AdminProfile /> 
      },
      {
        path:"*",
        element:<NotFound />
       },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;