import style from "./ItemContact.module.scss"

export const ItemContact = ({ subtitleDescription, link, linkDescription }) => {
   return (
      <div className={style.info}>
         <p className={style.subtitle}>{subtitleDescription}</p>
         <a href={link} target="_blanc">
            {linkDescription}
         </a>
      </div>
   )
}