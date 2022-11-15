import { Button } from "../../../components/Button/Button"

export const CartTotal = ({ cart, getSumAllProduct, setIsModalDeliveryOpen, setIsModalPayOpen }) => {
   return (
      <>
         {(cart.length !== 0) && <div className="cart__total">
            <div className="cart__full-price">
               Full price: $ {getSumAllProduct} <span>usd</span>
            </div>
            <Button
               className="cart__btn-delivery button"
               textButton="delivery"
               action={setIsModalDeliveryOpen}
               dataProduct={true}
            />
            <Button
               className="cart__btn-pay button"
               textButton="Pay"
               action={setIsModalPayOpen}
               dataProduct={true}
            />
         </div>
         }
      </>
   )
}