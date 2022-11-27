import { NavLink } from "react-router-dom"

export const NavItem = ({ link, children, closeMenu }) => {

   const clickHandler = () => {
      closeMenu()
   }

   return (
      <li className="nav__item" onClick={clickHandler}>
         <NavLink className="nav__link" to={link}>
            {children}
         </NavLink >
      </li >
   )
}