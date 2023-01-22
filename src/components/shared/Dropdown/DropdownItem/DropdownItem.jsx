import { NavLink } from "react-router-dom";
import style from "./DropdownItem.module.scss"

export const DropdownItem = ({ link, textLink, setVisible, closeMenu }) => {

   const handlerClick = () => {
      setVisible(false)
      closeMenu()
   }

   return (
      <li className={style.item}>
         <NavLink className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link} to={link} onClick={handlerClick}>{textLink}</NavLink>
      </li>
   )
}