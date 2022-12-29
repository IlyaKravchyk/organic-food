import { NavItem } from "./NavItem";
import style from "./HeaderNav.module.scss"

export const HeaderNav = ({ burgerActive, closeMenu }) => {
   return (
      <nav className={burgerActive ? `${style.nav} ${style.active}` : style.nav}>
         <ul className={style.item}>
            <NavItem
               link="/" children="Home"
               closeMenu={closeMenu}
            />
            <NavItem
               link="/about"
               children="About us"
               closeMenu={closeMenu}
            />
            <NavItem
               link="/categories"
               children="Shop"
               closeMenu={closeMenu}
            />
            <NavItem
               link="/contact"
               children="Contact us"
               closeMenu={closeMenu}
            />
         </ul>
      </nav>
   )
}