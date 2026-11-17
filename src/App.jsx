import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './components/layouts/RouteLayout.jsx'
import ErrorPage from './components/common/ErrorPage.jsx'
import HomeIndex from './pages/home/HomeIndex.jsx'
import BlogIndex from './pages/blog/BlogIndex.jsx'
import { menuData } from './dummyData/menuData.js'
import AboutIndex from './pages/about/AboutIndex.jsx'

const pageComponents = {
  home: <HomeIndex />,
  blog: <BlogIndex />,
  about: <AboutIndex/>,
}

const routes = createRoutesFromElements(
  <>
    <Route element={<RouteLayout />}>
      {menuData.map((item) => (
        <Route key={item.id} path={item.url} element={pageComponents[item.page] ?? null} />
      ))}
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </>
)

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />
}

export default App
