import style from "./Dropdown.module.scss"

export const Dropdown = ({ children }) => {
   return (
      <ul className={style.wrapper} >
         {children}
      </ul>
   )
}