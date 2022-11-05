import { Link } from 'react-router-dom';


export const FooterLogos = () => {
   return (
      <div className="footer__item icons">
         <div className="footer__logo logo">
            <Link to='/'>
               <img src="https://i.ibb.co/5vrYgTP/IMAGE.png" alt="logo" />
            </Link>
         </div>
         <p className="footer__description">
            We are a popular and farming company aspiring to be a leader in the Organic food industry.
         </p>
         <div className="footer__icons">
            <div className="footer__icon">
               <a href="https://ru-ru.facebook.com/" target="_blanc">
                  <img src="https://i.ibb.co/6gThLmG/IMAGE.png" alt="facebook" />
               </a>
            </div>
            <div className="footer__icon">
               <a href="https://twitter.com/i/flow/login" target="_blanc">
                  <img src="https://i.ibb.co/YXkDtFw/IMAGE-1.png" alt="twitter" />
               </a>
            </div>
            <div className="footer__icon" >
               <a href="https://www.instagram.com/" target="_blanc">
                  <img src="https://i.ibb.co/5TBtSMN/IMAGE-2.png" alt="instagram" />
               </a>
            </div>
            <div className="footer__icon" >
               <a href="https://www.pinterest.com/" target="_blanc">
                  <img src="https://i.ibb.co/hx0xH5L/IMAGE-3.png" alt="pinterest" />
               </a>
            </div>
         </div>
      </div>
   )
}