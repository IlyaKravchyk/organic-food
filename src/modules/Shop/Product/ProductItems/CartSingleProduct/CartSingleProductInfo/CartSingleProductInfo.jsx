import { Button } from "../../../../../../components/shared/Buttons/Button";
import { ButtonBack } from "../../../../../../components/shared/Buttons/ButtonBack";
import style from "./CartSingleProductInfo.module.scss"

export const CartSingleProductInfo = ({ addToCart, productData }) => {
   return (
      <div className={style.item}>
         <div className={style.wrapper}>
            <div className={style.title}>
               {productData.name}
            </div>
            <div className={style.price}>
               {productData.promotionalPrice && <span className={style.promotionalPrice}>$ {productData.promotionalPrice} usd</span>}
               <span className={style.newPrice}>$ {productData.price} usd</span>
            </div>
         </div>
         <div className={style.description}>
            {productData.description}
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