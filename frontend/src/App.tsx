import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"
import SingIn from "./pages/SignIn"
import AddHotel from "./pages/AddHotel"
import { useAppContext } from "./contexts/AppContext"

function App() {

  const { isLoggedIn } = useAppContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
          <Route path="/search" element={<Layout><p>Search Page</p></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/sign-in" element={<Layout><SingIn /></Layout>} />
          {isLoggedIn && <><Route path='/add-hotel' element={<Layout><AddHotel /></Layout>} /></>}
          
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
