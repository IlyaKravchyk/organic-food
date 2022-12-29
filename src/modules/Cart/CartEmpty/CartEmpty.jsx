import { ButtonGoShop } from "../../../components/shared/Buttons/ButtonGoShop";
import style from "./CartEmpty.module.scss"

export const CartEmpty = ({ text }) => {
   return (
      <div className={style.empty}>
         <span className={style.text}>{text}</span>
         <ButtonGoShop
            text="go shop"
         />
      </div>
   )
}