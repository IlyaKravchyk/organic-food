import cartStore from "../../../stores/CartStore";
import { observer } from "mobx-react-lite";

export const HeaderCart = observer(({ handleClick }) => {

   const { getCartCount } = cartStore

   return (
      <div className="header__cart">
         <div className="header__cart-wrapper" onClick={handleClick}>
            <div className="header__cart-image">
               <img src="https://i.ibb.co/J2B5wCN/header-cart.png" alt="cart" />
            </div>
            <div className="header__cart-description">
               cart <span className="header__cart-count">{getCartCount}</span>
            </div>
         </div >
      </div >
   )
})