import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Logo } from "../shared/Logo";
import { HeaderCart } from "./HeaderCart";
import "./header.css"

export const Header = () => {

   return (
      <>
         <header className="header container">
            <div className="header__wrapper">
               <div className="header__items">
                  <Logo className="header__item logo" />
                  <HeaderNav />
                  <HeaderCart />
               </div>
            </div>
         </header>
      </>
   )

}