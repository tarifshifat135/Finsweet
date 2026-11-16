import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RouteLayout from './components/layouts/RouteLayout.jsx'
import ErrorPage from './components/common/ErrorPage.jsx'
import HomeIndex from './pages/home/HomeIndex.jsx'
import Relevants from './components/pages/home/Relevants.jsx'
import UpcomingSermons from './components/pages/home/UpcomingSermons.jsx'
import ReadBlog from './components/pages/home/ReadBlog.jsx'
import { menuData } from './dummyData/menuData.js'

const pageComponents = {
  home: <HomeIndex />,
  about: <Relevants />,
  service: <UpcomingSermons />,
  blog: <ReadBlog />,
}

const routes = createRoutesFromElements(
  <>
    <Route element={<RouteLayout />}>
      {menuData.map((item) => (
        <Route key={item.id} path={item.url} element={pageComponents[item.page]} />
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
