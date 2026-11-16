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

// function ErrorPage() {
//     return (
//         <main aria-labelledby="error-title" className="flex min-h-screen flex-col items-center justify-center bg-[#F5F2F0] px-6 py-16 text-center">
//             <p className="text-8xl font-black leading-none tracking-tight text-brand-ink sm:text-9xl md:text-[14rem]">404</p>
//             <h1 id="error-title" className="mt-6 text-2xl font-bold uppercase text-brand-ink sm:text-3xl">Page not found</h1>
//             <p className="mt-3 max-w-md text-base leading-6 text-brand-ink/80">The page you are looking for may have moved or does not exist.</p>
//             <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-peach px-8 py-4 text-sm font-semibold uppercase text-brand-ink transition-colors hover:bg-brand-peach-hover">Back to Home</Link>
//         </main>
//     )
// }

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />
}

export default App
