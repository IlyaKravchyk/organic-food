import cartStore from "../../../stores/CartStore";
import { observer } from "mobx-react-lite";
import style from "./HeaderCart.module.scss"

export const HeaderCart = observer(({ burgerActive, goCart, closeMenu }) => {

   const { getCartCount } = cartStore

   const handleClick = () => {
      goCart()
      closeMenu()
   }

   return (
      <div className={burgerActive ? `${style.cart} ${style.active}` : style.cart}>
         <div className={style.wrapper} onClick={handleClick}>
            <div className={style.image}>
               <img src="https://i.ibb.co/J2B5wCN/header-cart.png" alt="cart" />
            </div>
            <div className={style.description}>
               cart <span className={style.count}>{getCartCount}</span>
            </div>
         </div >
      </div >
   )
})