import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
   return (
      <div className="header__item">
         <div className="header__logo logo">
            <Link to='/'>
               <img src="https://i.ibb.co/5vrYgTP/IMAGE.png" alt="logo" />
            </Link>
         </div>
      </div>
   )
}