import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
