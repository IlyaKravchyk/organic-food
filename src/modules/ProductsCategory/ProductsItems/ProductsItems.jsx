import { ProductsItem } from "./ProductsItem/ProductItem"

export const ProductsItems = ({ hashParams, categoriesProducts, addToCart }) => {
   return (
      <div className="products__items">
         {!categoriesProducts && <div className="loader"></div>}
         {categoriesProducts && categoriesProducts.map((categoriesProducts) => {
            if (hashParams === categoriesProducts.category) {
               return (
                  <ProductsItem
                     categoriesProducts={categoriesProducts}
                     addToCart={addToCart}
                  />
               )
            }
         })}
      </div>
   )
}