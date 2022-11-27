import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsCategoryStore from "./store/ProductsCategoryStore";
import { MainTitle } from "../../components/shared/MainTitle";
import { observer } from "mobx-react-lite";
import { ButtonBack } from "../../components/shared/Buttons/ButtonBack";
import cartStore from "../../stores/CartStore";
import { ProductsItems } from "./ProductsItems/ProductsItems";
import "./ProductsCategory.css";
import "./ProductsCategoryMedia.css";

export const ProductsCategory = observer(() => {
   const { addToCart } = cartStore
   const { categoriesProducts, loadCategoriesProducts } = productsCategoryStore
   const { products } = useParams()

   useEffect(() => {
      loadCategoriesProducts()
   }, [])

   return (
      <div className="container">
         <div className="products__wrapper">
            <MainTitle
               className="product__title"
               titleText={products}
            />
            <ProductsItems
               hashParams={products}
               categoriesProducts={categoriesProducts}
               addToCart={addToCart}
            />
            <ButtonBack
               className="products__button-back button-back"
               text="go to back"
            />
         </div >
      </div>
   )
})