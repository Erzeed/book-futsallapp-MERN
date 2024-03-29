import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import SearchPage from "./pages/search"
import Login from "./pages/login"
import Register from "./pages/register"
import MyCourt from "./pages/myCourt"
import Toast from "./components/toast"
import EditProfile from "./pages/editProfile"
import Booking from "./pages/booking"


function App() {

  return (
    <div className="flex flex-col min-h-screen antialiased w-full">
      <Header />
      <div className="content w-full">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/search" element={<SearchPage />}  />
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />}  />
          <Route path="/mycourt" element={<MyCourt />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="mycourt/editprofile" element={<EditProfile />}  />
        </Routes>
      </div>
      <Toast />
      <Footer />
    </div>
  )
}

export default App
