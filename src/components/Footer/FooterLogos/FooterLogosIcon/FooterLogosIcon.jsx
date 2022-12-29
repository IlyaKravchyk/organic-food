import style from "./FooterLogosIcon.module.scss"

export const FooterLogosIcon = ({ linkPage, linkImage, altImage }) => {
   return (
      <div className={style.icon}>
         <a href={linkPage} target="_blanc">
            <img src={linkImage} alt={altImage} />
         </a>
      </div>
   )
}