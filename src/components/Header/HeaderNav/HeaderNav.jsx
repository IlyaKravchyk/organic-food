import { NavItem } from "./NavItem/NavItem";

export const HeaderNav = ({ burgerActive, closeMenu }) => {
   return (
      <nav className={burgerActive ? "header__nav active" : "header__nav"}>
         <ul className="nav__items">
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