import { NavLink } from "react-router-dom";
import style from "./NavItem.module.scss"

export const NavItem = ({ link, textLink, children, closeMenu, setVisible, openCloseItem, visible, textButton = null }) => {

   const clickHandler = () => {
      closeMenu()
      setVisible(false)
   }
   const handlerButton = () => {
      openCloseItem()
   }

   return (
      <li className={style.item} onClick={(e) => e.stopPropagation()}>
         <NavLink onClick={clickHandler} className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link} to={link}>
            {textLink}
         </NavLink >
         {textButton &&
            <span className={visible ? `${style.button} ${style.mobile}` : style.button} onClick={handlerButton}>
               {textButton}
            </span>
         }
         {children}
      </li >
   )
}