import { Route, Routes } from "react-router-dom";
import { Сategories } from "./Сategories";
import { ProductsCategory } from "./ProductsCategory";
import { Product } from "./Product";
import { PRODUCTS, PRODUCTID } from "../../constants/constants"


export const ShopApp = () => {
   return (
      <Routes>
         <Route index element={<Сategories />} />
         <Route path={`/:${PRODUCTS}`} element={<ProductsCategory />} />
         <Route path={`/:${PRODUCTS}/:${PRODUCTID}`} element={<Product />} />
      </Routes>
   )
}