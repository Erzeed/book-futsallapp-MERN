import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import Search from "./pages/search"
import Login from "./pages/login"
import Register from "./pages/register"
import Toast from "./components/toast"


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
        </Routes>
      </div>
      <Toast />
      <Footer />
    </div>
  )
}

export default App
