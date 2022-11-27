export const HeaderBurger = ({ openClose, burgerActive }) => {
   const clickHandler = () => {
      openClose()
   }
   return (
      <div className={burgerActive ? "header__burger active" : "header__burger"} onClick={clickHandler}>
         <span className={burgerActive ? "burger__line active" : "burger__line"}></span>
         <span className={burgerActive ? "burger__line active" : "burger__line"}></span>
         <span className={burgerActive ? "burger__line active" : "burger__line"}></span>
      </div >
   )
}