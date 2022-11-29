import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { AboutUs } from "./modules/AboutUs/AboutUs";
import { ContactUs } from "./modules/ContactUs/ContactUs";
import { Layout } from "./modules/Layout/Layout";
import { Cart } from "./modules/Cart/Cart";
import { ShopApp } from "./modules/Shop/ShopApp";
import { ABOUT, CONTACT, CART, CATEGORIES } from "./constants/constants"


function App() {

   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path={ABOUT} element={<AboutUs />}></Route>
            <Route path={CONTACT} element={<ContactUs />}></Route>
            <Route path={CART} element={<Cart />}></Route>
            <Route path={`${CATEGORIES}/*`} element={<ShopApp />}></Route>
         </Route>
      </Routes >
   )
}
export default App;