import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import Search from "./pages/search"
import Login from "./pages/login"
import Register from "./pages/register"
import MyCourt from "./pages/myCourt"
import Toast from "./components/toast"
import EditProfile from "./pages/editProfile"


function App() {

  return (
    <div className="flex flex-col min-h-screen antialiased w-full">
      <Header />
      <div className="content w-full">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/search" element={<Search />}  />
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />}  />
          <Route path="/mycourt" element={<MyCourt />} />
          <Route path="mycourt/editprofile" element={<EditProfile />}  />
        </Routes>
      </div>
      <Toast />
      <Footer />
    </div>
  )
}

export default App
