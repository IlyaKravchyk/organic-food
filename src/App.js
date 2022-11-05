import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { AboutUs } from "./modules/AboutUs/AboutUs";
import { ContactUs } from "./modules/ContactUs/ContactUs";
import { Сategories } from "./modules/Сategories/Сategories";
import { Layout } from "./modules/Layout/Layout";
import "./styles/style.css"

function App() {

   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<AboutUs />}></Route>
            <Route path='contact' element={<ContactUs />}></Route>
            <Route path='categories' element={<Сategories />}></Route>
         </Route>
      </Routes >
   )

}
export default App;