import './index.css';
import LogInForm from './components/Forms/LogInForm'
import SignUpForm from './components/Forms/SignUpForm'
import Followed from './components/Pages/Followed'
import HomePage from './components/Pages/HomePage';
import Favorites from './components/Pages/Favorites';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page from './components/Page';

const router = createBrowserRouter([
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
])

export default function App() {
  return (
    <div className='font-mono'>
      <RouterProvider router={router}/>
    </div>
  );
}

