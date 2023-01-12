import { CartSingleProductImage } from "./CartSingleProductImage";
import { CartSingleProductInfo } from "./CartSingleProductInfo";

export const CartSingleProduct = ({ productData, addToCart }) => {
   const { name, image } = productData;

   return (
      <>
         <CartSingleProductImage
            imageUrl={image}
            categoryName={name}
         />
         <CartSingleProductInfo
            addToCart={addToCart}
            productData={productData}
         />
      </>
   )
}