export const FooterLogosIcon = ({ linkPage, linkImage, altImage }) => {
   return (
      <div className="footer__icon">
         <a href={linkPage} target="_blanc">
            <img src={linkImage} alt={altImage} />
         </a>
      </div>
   )
}