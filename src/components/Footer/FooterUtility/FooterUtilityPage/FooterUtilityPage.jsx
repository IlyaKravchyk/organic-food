import { Link } from 'react-router-dom';

export const FooterUtilityPage = ({ text, linkPage }) => {
   return (
      <div className="footer__page">
         <Link className="footer__link" href={linkPage}>{text}</Link>
      </div>
   )
}