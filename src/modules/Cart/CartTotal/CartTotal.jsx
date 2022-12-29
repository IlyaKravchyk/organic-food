import { CartButtons } from "./CartButtons";
import { ModalDelivery } from "./ModalDelivery/ModalDelivery";
import { ModalPay } from "./ModalPay/ModalPay";
import style from "./CartTotal.module.scss"

export const CartTotal = ({ cart, getSumAllProduct, setIsModalDeliveryOpen, isModalDeliveryOpen, setIsModalPayOpen, isModalPayOpen }) => {
   return (
      <>
         {(cart.length !== 0) && <div className={style.total}>
            <div className={style.fullPrice}>
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