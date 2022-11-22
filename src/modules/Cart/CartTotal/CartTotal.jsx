import { Button } from "../../../components/shared/Buttons/Button";
import { ModalDelivery } from "./ModalDelivery/ModalDelivery";
import { ModalPay } from "./ModalPay/ModalPay";

export const CartTotal = ({ cart, getSumAllProduct, setIsModalDeliveryOpen, isModalDeliveryOpen, setIsModalPayOpen, isModalPayOpen }) => {
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