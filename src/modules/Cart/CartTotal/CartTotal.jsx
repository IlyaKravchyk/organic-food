import { CartButtons } from "./CartButtons/CartButtons";
import { ModalDelivery } from "./ModalDelivery/ModalDelivery";
import { ModalPay } from "./ModalPay/ModalPay";

export const CartTotal = ({ cart, getSumAllProduct, setIsModalDeliveryOpen, isModalDeliveryOpen, setIsModalPayOpen, isModalPayOpen }) => {
   return (
      <>
         {(cart.length !== 0) && <div className="cart__total">
            <div className="cart__full-price">
               Full price: $ {getSumAllProduct} <span>usd</span>
            </div>
            <CartButtons
               setIsModalDeliveryOpen={setIsModalDeliveryOpen}
               setIsModalPayOpen={setIsModalPayOpen}
            />
            <ModalDelivery
               isModalDeliveryOpen={isModalDeliveryOpen}
               setIsModalDeliveryOpen={setIsModalDeliveryOpen}
            />
            <ModalPay
               isModalPayOpen={isModalPayOpen}
               setIsModalPayOpen={setIsModalPayOpen}
            />
         </div>
         }
      </>
   )
}