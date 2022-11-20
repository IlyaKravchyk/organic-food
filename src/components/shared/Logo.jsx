import { Link } from 'react-router-dom';

export const Logo = ({ className }) => {
   return (
      <div className={className} >
         <Link to='/'>
            <img src="https://i.ibb.co/5vrYgTP/IMAGE.png" alt="logo" />
         </Link>
      </div>
   )
}