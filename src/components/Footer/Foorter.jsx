import { ContactComponent } from "../ContactUs/ContactComponent";
import { FooterLogos } from "./components/FooterLogos";
import { FooterUtility } from "./components/FooterUtility";
import "./footer.css"

export const Footer = () => {
   return (
      <footer className="footer container">
         <div className="footer__items">
            <ContactComponent
               classWrapper="footer__item contacts"
               classTitle="footer__title"
               classInfo="footer__info"
               classSubtitle="footer__subtitle"
            />
            <FooterLogos />
            <FooterUtility />
         </div>
      </footer>
   )
}