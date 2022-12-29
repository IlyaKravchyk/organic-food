import { CartSingleProductImage } from "./CartSingleProductImage";
import { CartSingleProductInfo } from "./CartSingleProductInfo";

export const CartSingleProduct = ({ imageUrl, categoryName, promotionalPrice, price, description, productData, addToCart }) => {
   return (
      <>
         <CartSingleProductImage
            imageUrl={imageUrl}
            categoryName={categoryName}
         />
         <CartSingleProductInfo
            categoryName={categoryName}
            promotionalPrice={promotionalPrice}
            price={price}
            description={description}
            addToCart={addToCart}
            productData={productData}
         />
      </>
   )
}