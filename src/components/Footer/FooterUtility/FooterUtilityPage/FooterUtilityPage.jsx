import { Link } from "react-router-dom";
import style from "./FooterUtilityPage.module.scss";

export const FooterUtilityPage = ({ text, linkPage }) => {
   return (
      <div className={style.page}>
         <Link className={style.link} href={linkPage}>{text}</Link>
      </div>
   )
}