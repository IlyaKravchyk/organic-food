import { CartSingleProductImage } from "./CartSingleProductImage/CartSingleProductImage";
import { CartSingleProductInfo } from "./CartSingleProductInfo/CartSingleProductInfo";


export const CartSingleProduct = ({ imageUrl, categoryName, promotionalPrice, price, description, productData, addToCart }) => {
   return (
      <>
         <CartSingleProductImage
            imageUrl={imageUrl}
            categoryName={categoryName}
         />
         <CartSingleProductInfo
            promotionalPrice={promotionalPrice}
            price={price}
            description={description}
            addToCart={addToCart}
            productData={productData}
         />
      </>
   )
}