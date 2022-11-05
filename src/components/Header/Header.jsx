import { HeaderNav } from "./components/HeaderNav";
import { HeaderLogo } from "./components/HeaderLogo";
import { HeaderCart } from "./components/HeaderCart";
import "./header.css"

export const Header = () => {

   return (
      <>
         <header className="header container">
            <div className="header__wrapper">
               <div className="header__items">
                  <HeaderLogo />
                  <HeaderNav />
                  <HeaderCart />
               </div>
            </div>
         </header>
      </>
   )

}