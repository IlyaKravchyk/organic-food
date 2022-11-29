import { ButtonGoShop } from "../../../components/shared/Buttons/ButtonGoShop";
export const CartEmpty = ({ text }) => {
   return (
      <div className="cart__empty">
         {text}
         <ButtonGoShop
            text="go shop"
         />
      </div>
   )
}