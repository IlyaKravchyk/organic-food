import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
   return (
      <nav className="header__item">
         <ul className="nav__items">
            <li className="nav__item">
               <NavLink className="nav__link" to="/">Home</NavLink >
            </li>
            <li className="nav__item">
               <NavLink className="nav__link" to="/about">About us</NavLink >
            </li>
            <li className="nav__item">
               <NavLink className="nav__link" to="/categories">Shop</NavLink >
            </li>
            <li className="nav__item">
               <NavLink className="nav__link" to="/contact">Contact us</NavLink >
            </li>
         </ul>
      </nav>
   )
}