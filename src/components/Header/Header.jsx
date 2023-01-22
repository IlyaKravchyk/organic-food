import { HeaderNav } from "./HeaderNav";
import { Logo } from "../shared/Logo";
import { useNavigate } from "react-router-dom";
import { HeaderBurger } from "./HeaderBurger/HeaderBurger";
import { useState } from "react";
import { HeaderCart } from "./HeaderCart";
import { CART } from "../../constants/constants";
import style from "./Header.module.scss"

export const Header = ({ allPoductsStore }) => {
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
      <header className={style.header}>
         <div className="container">
            <div className={style.wrapper}>
               <div className={style.items}>
                  <div className={style.logo} >
                     <Logo />
                  </div>
                  <HeaderNav
                     allPoductsStore={allPoductsStore}
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