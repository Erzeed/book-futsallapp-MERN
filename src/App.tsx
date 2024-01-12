import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"


function App() {

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      <div className="content px-7 py-2">
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
