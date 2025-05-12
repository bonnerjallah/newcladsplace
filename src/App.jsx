import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import ContactUs from "./pages/ContactUs"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="ContactUs" element={<ContactUs />} />
    </Route>
  )
)


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
