import Layout from '../view/layout/Layout.tsx';
import App from '../App.tsx';
import About from '../view/about/About.tsx';
import Basket from '../view/basket/Basket.tsx';
import Blog from '../view/blog/Blog.tsx';
import Contact from '../view/contact/Contact.tsx';
import Profile from '../view/profile/Profile.tsx';
import Shop from '../view/shop/Shop.tsx';
import Features from '../view/features/Features.tsx';
import NotFound from '../view/notFound/NotFound.tsx';

export const pages = {
  home: '/',
  about: '/about',
  basket: '/basket',
  blog: '/blog',
  contact: '/contact',
  profile: '/profile',
  features: '/features',
  shop: '/shop',
  notFound: '*',
};

export const routes = [
  {
    path: pages.home,
    element: <Layout />,
    children: [
      { path: pages.home, element: <App /> },
      { path: pages.about, element: <About /> },
      { path: pages.basket, element: <Basket /> },
      { path: pages.blog, element: <Blog /> },
      { path: pages.contact, element: <Contact /> },
      { path: pages.profile, element: <Profile /> },
      { path: pages.shop, element: <Shop /> },
      { path: pages.features, element: <Features /> },
    ],
  },

  { path: pages.notFound, element: <NotFound /> },
];
