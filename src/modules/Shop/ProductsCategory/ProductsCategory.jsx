import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsCategoryStore } from "./store/ProductsCategoryStore";
import { MainTitle } from "../../../components/shared/MainTitle";
import { observer } from "mobx-react-lite";
import { ButtonBack } from "../../../components/shared/Buttons/ButtonBack";
import cartStore from "../../../stores/CartStore";
import { ProductsItems } from "./ProductsItems";
import style from "./ProductsCategory.module.scss"
import { useState } from "react";

export const ProductsCategory = observer(() => {
   const { addToCart } = cartStore
   const [productsCategoryStore] = useState(new ProductsCategoryStore())
   const { categoriesProducts, loadCategoriesProducts } = productsCategoryStore
   const { products } = useParams()

   useEffect(() => {
      loadCategoriesProducts(products)
   }, [])

   return (
      <div className="container">
         <div className={style.products}>
            <MainTitle
               titleText={products}
            />
            <ProductsItems
               categoriesProducts={categoriesProducts}
               addToCart={addToCart}
            />
            <ButtonBack
               className="products__button-back button-back"
            />
         </div >
      </div>
   )
})