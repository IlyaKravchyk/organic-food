import { Card } from "../../../../components/shared/Card/Card";
import style from "./AllProductsItems.module.scss"

export const AllProductsItems = ({ allProductsData, addToCart }) => {
   return (
      <div>
         <div className={style.items}>
            {allProductsData.map(allProductsData => {
               return (
                  <Card
                     key={allProductsData.id}
                     categoriesProducts={allProductsData}
                     linkTo={`/categories/${allProductsData.category}/${allProductsData.id}`}
                     addToCart={addToCart}
                  />
               )
            })}
         </div>
      </div>
   )
}