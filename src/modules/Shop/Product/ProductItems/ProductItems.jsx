
import { CartSingleProduct } from "./CartSingleProduct/CartSingleProduct";

export const ProductItems = ({ isLoading, imageUrl, categoryName, promotionalPrice, price, description, productData, addToCart }) => {
   return (
      <div className="product__items">
         {isLoading && <div className="loader"></div>}
         {!isLoading &&
            <CartSingleProduct
               imageUrl={imageUrl}
               categoryName={categoryName}
               promotionalPrice={promotionalPrice}
               price={price}
               description={description}
               productData={productData}
               addToCart={addToCart}
            />
         }
      </div>
   )
}