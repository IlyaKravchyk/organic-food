import { Card } from "../../../../components/shared/Card/Card"
import style from "./ProductsItems.module.scss"

export const ProductsItems = ({ categoriesProducts, addToCart }) => {
   return (
      <div className={style.items}>
         {!categoriesProducts && <div className="loader"></div>}
         {categoriesProducts && categoriesProducts.map(categoriesProducts => {
            return (
               <Card
                  key={categoriesProducts.id}
                  categoriesProducts={categoriesProducts}
                  addToCart={addToCart}
                  linkTo={`./${categoriesProducts.id}`}
               />
            )
         })}
      </div>
   )
}