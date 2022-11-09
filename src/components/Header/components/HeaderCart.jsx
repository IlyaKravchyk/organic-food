import { useNavigate } from "react-router-dom";
import cartStore from "../../../stores/CartStore";
import { observer } from "mobx-react-lite";

export const HeaderCart = observer(() => {
   const { getCartCount } = cartStore
   const navigate = useNavigate()

   const handleClick = () => {
      navigate('/cart')
   }

   return (
      <div className="header__item">
         <div className="cart__wrapper" onClick={handleClick}>
            <div className="cart__image">
               <img src="https://i.ibb.co/J2B5wCN/header-cart.png" alt="cart" />
            </div>
            <div className="cart__description">
               cart <span className="cart__count">{getCartCount}</span>
            </div>
         </div >
      </div >
   )
})