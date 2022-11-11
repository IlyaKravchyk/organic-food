import { Button } from "../../../components/Button/Button"

export const CartTotal = ({ cart, getSumAllProduct }) => {
   return (
      <>
         {(cart.length !== 0) && <div className="cart__total">
            <div className="cart__full-price">
               Full price: $ {getSumAllProduct} <span>usd</span>
            </div>
            <Button
               className="cart__btn-delivery button"
               textButton="Delivery"
            />
            <Button
               className="cart__btn-pay button"
               textButton="Pay"
            />
         </div>
         }
      </>
   )
}