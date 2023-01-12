import { NavItem } from "./NavItem";
import { ABOUT, CONTACT, CATEGORIES } from "../../../constants/constants"
import style from "./HeaderNav.module.scss";

export const HeaderNav = ({ burgerActive, closeMenu }) => {
   return (
      <nav className={burgerActive ? `${style.nav} ${style.active}` : style.nav}>
         <ul className={style.item}>
            <NavItem
               link="/" children="Home"
               closeMenu={closeMenu}
            />
            <NavItem
               link={`/${ABOUT}`}
               children="About us"
               closeMenu={closeMenu}
            />
            <NavItem
               link={`/${CATEGORIES}`}
               children="Shop"
               closeMenu={closeMenu}
            />
            <NavItem
               link={`/${CONTACT}`}
               children="Contact us"
               closeMenu={closeMenu}
            />
         </ul>
      </nav>
   )
}