import { NavItem } from "./NavItem/NavItem"

export const HeaderNav = () => {
   return (
      <nav className="header__item">
         <ul className="nav__items">
            <NavItem link="/" children="Home" />
            <NavItem link="/about" children="About us" />
            <NavItem link="/categories" children="Shop" />
            <NavItem link="/contact" children="Contact us" />
         </ul>
      </nav>
   )
}