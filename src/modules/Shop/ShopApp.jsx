import { Route, Routes } from "react-router-dom";
import { Сategories } from "./Сategories/Сategories";
import { ProductsCategory } from "./ProductsCategory/ProductsCategory";
import { Product } from "./Product/Product";
import { PRODUCTS, PRODUCTSID } from "../../constants/constants"


export const ShopApp = () => {
   return (
      <Routes>
         <Route index element={<Сategories />} />
         <Route path={`/:${PRODUCTS}`} element={<ProductsCategory />} />
         <Route path={`/:${PRODUCTS}/:${PRODUCTSID}`} element={<Product />} />
      </Routes>
   )
}