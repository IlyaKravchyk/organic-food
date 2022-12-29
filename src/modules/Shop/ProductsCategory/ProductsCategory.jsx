import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsCategoryStore from "./store/ProductsCategoryStore";
import { MainTitle } from "../../../components/shared/MainTitle";
import { observer } from "mobx-react-lite";
import { ButtonBack } from "../../../components/shared/Buttons/ButtonBack";
import cartStore from "../../../stores/CartStore";
import { ProductsItems } from "./ProductsItems";
import style from "./ProductsCategory.module.scss"

export const ProductsCategory = observer(() => {
   const { addToCart } = cartStore
   const { categoriesProducts, loadCategoriesProducts } = productsCategoryStore
   const { products } = useParams()

   useEffect(() => {
      loadCategoriesProducts()
   }, [])

   return (
      <div className="container">
         <div className={style.products}>
            <MainTitle
               titleText={products}
            />
            <ProductsItems
               hashParams={products}
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