import { Button } from "../../../../../components/shared/Buttons/Button";
import { MainTitle } from "../../../../../components/shared/MainTitle";
import { ButtonBack } from "../../../../../components/shared/Buttons/ButtonBack";

export const CartSingleProductInfo = ({ categoryName, promotionalPrice, price, description, addToCart, productData }) => {
   return (
      <div className="product__item">
         <MainTitle
            className="products__title"
            titleText={categoryName}
         />
         <div className="product__price">
            {promotionalPrice && <span className="product__promotional-price">$ {promotionalPrice} usd</span>}
            <span className="product__new-price">$ {price} usd</span>
         </div>
         <div className="product__description">
            {description}
         </div>
         <div className="product__buttons">
            <Button
               className="product__button-add button"
               textButton=" add to cart"
               action={addToCart}
               dataProduct={productData}
            />
            <ButtonBack
               className="product__button-back button-back"
               text="go to back"
            />
         </div>
      </div>
   )
}