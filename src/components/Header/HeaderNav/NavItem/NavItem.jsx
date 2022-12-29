import { NavLink } from "react-router-dom";
import style from "./NavItem.module.scss"

export const NavItem = ({ link, children, closeMenu }) => {

   const clickHandler = () => {
      closeMenu()
   }

   return (
      <li className={style.item} onClick={clickHandler}>
         <NavLink className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link} to={link}>
            {children}
         </NavLink >
      </li >
   )
}