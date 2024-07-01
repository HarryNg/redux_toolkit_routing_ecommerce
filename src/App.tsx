import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import NotFound from './pages/NotFound';
// import Navbar from './pages/NavBar';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/user/profile" element={<UserProfile />} />
      <Route path="/dashboard/admin/profile" element={<AdminProfile />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;