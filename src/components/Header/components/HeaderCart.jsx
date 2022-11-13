import { useNavigate } from "react-router-dom";
import {CartStore} from "../../../stores/CartStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export const HeaderCart = observer(() => {

   const [cartStore] = useState(new CartStore())

   const { getCartCount } = cartStore
   const navigate = useNavigate()

   const handleClick = () => {
      navigate('/cart')
   }

   return (
      <div className="header__item">
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