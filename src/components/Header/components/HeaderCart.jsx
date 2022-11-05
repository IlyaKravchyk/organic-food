export const HeaderCart = () => {
   return (
      <div className="header__item">
         <div className="cart__wrapper">
            <div className="cart__image">
               <img src="https://i.ibb.co/J2B5wCN/header-cart.png" alt="cart" />
            </div>
            <div className="cart__description">
               cart <span className="cart__count">10</span>
            </div>
         </div>
      </div>
   )
}