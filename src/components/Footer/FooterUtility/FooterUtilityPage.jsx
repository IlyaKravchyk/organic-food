import { Link } from 'react-router-dom';

export const FooterUtilityPage = ({ children, linkPage }) => {
    return (
        <div className="footer__page">
            <Link className="footer__link" href={linkPage}>{children}</Link>
        </div>
    )
}