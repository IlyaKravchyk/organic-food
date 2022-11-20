import { Logo } from '../../shared/Logo';
import { FooterLogosIcon } from './FooterLogosIcon';


export const FooterLogos = () => {
   return (
      <div className="footer__item icons">
         <Logo className="footer__logo logo" />
         <p className="footer__description">
            We are a popular and farming company aspiring to be a leader in the Organic food industry.
         </p>
         <div className="footer__icons">
            <FooterLogosIcon
               linkPage="https://ru-ru.facebook.com/"
               linkImage="https://i.ibb.co/6gThLmG/IMAGE.png"
               altImage="facebook"
            />
            <FooterLogosIcon
               linkPage="https://twitter.com/i/flow/login"
               linkImage="https://i.ibb.co/YXkDtFw/IMAGE-1.png"
               altImage="twitter"
            />
            <FooterLogosIcon
               linkPage="https://www.instagram.com/"
               linkImage="https://i.ibb.co/5TBtSMN/IMAGE-2.png"
               altImage="instagram"
            />
            <FooterLogosIcon
               linkPage="https://www.pinterest.com/"
               linkImage="https://i.ibb.co/hx0xH5L/IMAGE-3.png"
               altImage="pinterest"
            />
         </div>
      </div>
   )
}