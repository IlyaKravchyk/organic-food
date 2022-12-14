import { ProductsItem } from "./ProductsItem";
import style from "./ProductsItems.module.scss"

export const ProductsItems = ({ hashParams, categoriesProducts, addToCart }) => {
   return (
      <div className={style.items}>
         {!categoriesProducts && <div className="loader"></div>}
         {categoriesProducts && categoriesProducts.map((categoriesProducts) => {
            if (hashParams === categoriesProducts.category) {
               return (
                  <ProductsItem
                     key={categoriesProducts.id}
                     categoriesProducts={categoriesProducts}
                     addToCart={addToCart}
                  />
               )
            }
         })}
      </div>
   )
}