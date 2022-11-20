import { NavItem } from "./NavItem"

export const HeaderNav = () => {
   return (
      <nav className="header__item">
         <ul className="nav__items">
            <NavItem link="/" cheldren="Home" />
            <NavItem link="/about" cheldren="About us" />
            <NavItem link="/categories" cheldren="Shop" />
            <NavItem link="/contact" cheldren="Contact us" />
         </ul>
      </nav>
   )
}