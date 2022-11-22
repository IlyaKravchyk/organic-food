import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Logo } from "../shared/Logo";
import { HeaderCart } from "./HeaderCart/HeaderCart";
import { useNavigate } from "react-router-dom";
import "./header.css"

export const Header = () => {
   const navigate = useNavigate()

   const handleClick = () => {
      navigate('/cart')
   }
   return (
      <>
         <header className="header container">
            <div className="header__wrapper">
               <div className="header__items">
                  <Logo
                     className="header__item logo" />
                  <HeaderNav />
                  <HeaderCart
                     handleClick={handleClick}
                  />
               </div>
            </div>
         </header>
      </>
   )

}