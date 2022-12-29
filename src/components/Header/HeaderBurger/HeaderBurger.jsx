import style from "./HeaderBurger.module.scss"

export const HeaderBurger = ({ openClose, burgerActive }) => {
   const clickHandler = () => {
      openClose()
   }
   return (
      <div className={burgerActive ? `${style.burger} ${style.active}` : style.burger} onClick={clickHandler} >
         <span className={burgerActive ? `${style.line} ${style.active}` : style.line}></span>
         <span className={burgerActive ? `${style.line} ${style.active}` : style.line}></span>
         <span className={burgerActive ? `${style.line} ${style.active}` : style.line}></span>
      </div >
   )
}