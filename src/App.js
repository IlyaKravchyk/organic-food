import { Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home/Home";
import { AboutUs } from "./modules/AboutUs/AboutUs";
import { ContactUs } from "./modules/ContactUs/ContactUs";
import { Сategories } from "./modules/Сategories/Сategories";
import { Layout } from "./modules/Layout/Layout";
import { ProductsCategory } from "./modules/ProductsCategory/ProductsCategory";
import { Product } from "./modules/Product/Product";
import { Cart } from "./modules/Cart/Cart";

function App() {

   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<AboutUs />}></Route>
            <Route path='contact' element={<ContactUs />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='categories' element={<Сategories />}></Route>
            <Route path="categories/:products" element={<ProductsCategory />}></Route>
            <Route path="categories/:products/:productId" element={<Product />}></Route>
         </Route>
      </Routes >
   )

}
export default App;