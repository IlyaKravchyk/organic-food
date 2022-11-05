import { Link } from 'react-router-dom';

export const FooterUtility = () => {
   return (
      <div className="footer__item utility">
         <h2 className="footer__title ">utility pages</h2>
         <div className="footer__pages">
            <p className="footer__page">
               <Link className='footer__link' href="#" >style guide</Link>
            </p>
            <p className="footer__page">
               <Link className='footer__link' to="#" >protected</Link>
            </p>
            <p className="footer__page">
               <Link className='footer__link' to="#" >page not found</Link>
            </p>
            <p className="footer__page">
               <Link className='footer__link' to="#" >changelog</Link>
            </p>
            <p className="footer__page">
               <Link className='footer__link' to="#" >licenses</Link>
            </p>
         </div>
      </div>
   )
}