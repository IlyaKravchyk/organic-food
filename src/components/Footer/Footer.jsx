import { ContactsData } from "../ContactsData";
import { FooterLogos } from "./FooterLogos";
import { FooterUtility } from "./FooterUtility";
import style from "./Footer.module.scss";

export const Footer = () => {
   return (
      <footer className={style.footer}>
         <div className="container">
            <div className={style.items}>
               <ContactsData
                  wrapper={style.wrapper}
                  title={style.title}
                  item={style.item}
               />
               <FooterLogos />
               <FooterUtility />
            </div>
         </div>
      </footer>
   )
}