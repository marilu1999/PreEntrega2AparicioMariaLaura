import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Category from "../Pages/Category"
import ItemDetailContainer from "../Pages/ItemDetailContainer"
import NavBar from "../components/NavBar/NavBar";

const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />


        </Routes>
    </BrowserRouter>
  )
}
export default MainRouter