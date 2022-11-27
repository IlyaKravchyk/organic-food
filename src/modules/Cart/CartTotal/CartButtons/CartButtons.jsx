import { Button } from "../../../../components/shared/Buttons/Button"

export const CartButtons = ({ setIsModalDeliveryOpen, setIsModalPayOpen }) => {
   return (
      <div className="cart__buttons">
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
   )
}