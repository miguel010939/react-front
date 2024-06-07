import './index.css';
import LogInForm from './components/Forms/LogInForm'
import SignUpForm from './components/Forms/SignUpForm'
import Followed from './components/Pages/Followed'
import HomePage from './components/Pages/HomePage';
import Favorites from './components/Pages/Favorites';
import { BrowserRouter as Router, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Page from './components/Page';
import UserPage from './components/Pages/UserPage';
import SingleProductPage from './components/Pages/SingleProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Page><HomePage/></Page>
  },
  {
    path: "/products",
    element: <Page><Favorites/></Page>
  },
  {
    path: "/favorites",
    element: <Page><Favorites/></Page>
  },
  {
    path: "/sellers",
    element: <Page><Followed/></Page>
  },
  {
    path: "/myproducts",
    element: <Page><Favorites/></Page>
  },
  {
    path: "/login",
    element: <Page><LogInForm/></Page>
  },
  {
    path: "/signup",
    element: <Page><SignUpForm/></Page>
  },
  {
    path: "/users/:id/username/:username",
    element: <Page><UserPage/></Page>
  },
  {
    path: "/products/:id",
    element: <Page><SingleProductPage/></Page>
  },
])

export default function App() {
  return (
    <div className='font-mono'>
      <RouterProvider router={router}/>
    </div>
  );
}

