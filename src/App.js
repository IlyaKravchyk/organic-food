import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home";
import { AboutUs } from "./modules/AboutUs";
import { ContactUs } from "./modules/ContactUs";
import { Layout } from "./modules/Layout/Layout";
import { Cart } from "./modules/Cart";
import { ShopApp } from "./modules/Shop/ShopApp";
import { ABOUT, CONTACT, CART, CATEGORIES } from "./constants/constants"
import { AllPoducts } from "./modules/Shop/AllPoducts/AllPoducts";


function App() {

   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path={ABOUT} element={<AboutUs />}></Route>
            <Route path={CONTACT} element={<ContactUs />}></Route>
            <Route path={CART} element={<Cart />}></Route>
            <Route path='allProducts' element={<AllPoducts />} />
            <Route path={`${CATEGORIES}/*`} element={<ShopApp />}></Route>
         </Route>
      </Routes >
   )
}
export default App;