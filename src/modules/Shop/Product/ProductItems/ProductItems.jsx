import { CartSingleProduct } from "./CartSingleProduct";
import style from "./ProductItems.module.scss"

export const ProductItems = ({ isLoading, productData, addToCart }) => {
   return (
      <div className={style.items}>
         {isLoading && <div className="loader"></div>}
         {!isLoading &&
            <CartSingleProduct
               productData={productData}
               addToCart={addToCart}
            />
         }
      </div>
   )
}