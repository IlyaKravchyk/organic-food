import { ContactComponent } from "../ContactUs/ContactComponent";
import { FooterLogos } from "./FooterLogos/FooterLogos";
import { FooterUtility } from "./FooterUtility/FooterUtility";
import "./footer.css";
import "./FooterMedia.css";

export const Footer = () => {
   return (
      <footer className="footer container">
         <div className="footer__items">
            <ContactComponent
               classWrapperComponents="footer__contacts-information"
               classWrapperInfo="footer__item contacts"
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