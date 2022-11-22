import { NavLink } from "react-router-dom"

export const NavItem = ({ link, children }) => {
   return (
      <li className="nav__item">
         <NavLink className="nav__link" to={link}>
            {children}
         </NavLink >
      </li >
   )
}