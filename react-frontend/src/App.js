import './index.css';
import LogInForm from './components/Forms/LogInForm'
import SignUpForm from './components/Forms/SignUpForm'
import ProductForm from './components/Forms/ProductForm';
import Followed from './components/Pages/Followed'
import HomePage from './components/Pages/HomePage';
import Favorites from './components/Pages/Favorites';
import { BrowserRouter as Router, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Page from './components/Page';
import UserPage from './components/Pages/UserPage';
import SingleProductPage from './components/Pages/SingleProductPage';
import ProductsPage from './components/Pages/ProductsPage';
import { currentUserid } from './Consts';
import ProductAuctionPage from './components/Pages/ProductAuctionPage';
import AuctionsPage from './components/Pages/AuctionsPage';

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
    path: "/auctions",
    element: <Page><AuctionsPage/></Page>
  },
  {
    path: "/auctions/product/:id",
    element: <Page><ProductAuctionPage/></Page>
  },
  {
    path: "/products/new",
    element: <Page><ProductForm/></Page>
  },
  {
    path: "/products",
    element: <Page><ProductsPage/></Page>
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
    element: <Page><ProductsPage user={currentUserid}/></Page>
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

