import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Logo } from "../shared/Logo";
import { useNavigate } from "react-router-dom";
import { HeaderBurger } from "./HeaderBurger/HeaderBurger";
import { useState } from "react";
import { HeaderCart } from "./HeaderCart/HeaderCart";
import { CART } from "../../constants/constants";
import "./header.css"
import "./HeaderMedia.css"

export const Header = () => {
   const navigate = useNavigate()
   const [burgerActive, setBurgerActive] = useState(false)

   const openClose = () => {
      setBurgerActive(!burgerActive)
   }

   const closeMenu = () => {
      setBurgerActive(false)
   }

   const goCart = () => {
      navigate(`/${CART}`)
   }
   return (
      <header className="header">
         <div className="container">
            <div className="header__wrapper">
               <div className="header__items">
                  <Logo
                     className="header__item logo" />
                  <HeaderNav
                     burgerActive={burgerActive}
                     closeMenu={closeMenu}
                  />
                  <HeaderCart
                     goCart={goCart}
                     burgerActive={burgerActive}
                     closeMenu={closeMenu}
                  />
                  <HeaderBurger
                     burgerActive={burgerActive}
                     openClose={openClose}
                  />
               </div>
            </div>
         </div>
      </header>
   )

}