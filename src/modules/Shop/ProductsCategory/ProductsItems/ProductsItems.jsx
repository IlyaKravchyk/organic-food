import { ProductsItem } from "./ProductsItem";
import style from "./ProductsItems.module.scss"

export const ProductsItems = ({ categoriesProducts, addToCart }) => {
   return (
      <div className={style.items}>
         {!categoriesProducts && <div className="loader"></div>}
         {categoriesProducts && categoriesProducts.map(categoriesProducts => {
            return (
               <ProductsItem
                  key={categoriesProducts.id}
                  categoriesProducts={categoriesProducts}
                  addToCart={addToCart}
               />
            )
         })}
      </div>
   )
}