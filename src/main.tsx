import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Newsletter from './pages/Newsletter/Newsletter'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import BlogDetails from './pages/Blog/BlogDetails'
import Blog from './pages/Home/Blog'
import SplashCursor from './components/Cursor/SplashCursor'
import PageNotFound from './pages/PageNotFound/PageNotFound'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path: "blogdetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "projects",
        element: <PageNotFound />,
      },
      {
        path: "about",
        element: <PageNotFound />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ]
  }
],
  {
    basename: "/Task6-adv",  
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <SplashCursor  />
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
