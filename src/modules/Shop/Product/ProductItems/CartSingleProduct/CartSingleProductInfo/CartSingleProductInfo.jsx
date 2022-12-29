import { Button } from "../../../../../../components/shared/Buttons/Button";
import { ButtonBack } from "../../../../../../components/shared/Buttons/ButtonBack";
import style from "./CartSingleProductInfo.module.scss"

export const CartSingleProductInfo = ({ categoryName, promotionalPrice, price, description, addToCart, productData }) => {
   return (
      <div className={style.item}>
         <div className={style.wrapper}>
            <div className={style.title}>
               {categoryName}
            </div>
            <div className={style.price}>
               {promotionalPrice && <span className={style.promotionalPrice}>$ {promotionalPrice} usd</span>}
               <span className={style.newPrice}>$ {price} usd</span>
            </div>
         </div>
         <div className={style.description}>
            {description}
         </div>
         <div className={style.buttons}>
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