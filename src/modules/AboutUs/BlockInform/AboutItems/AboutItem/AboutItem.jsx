import style from "./AboutItem.module.scss"

export const AboutItem = ({ imageUrl, imageAlt, title, subtitle }) => {
   return (
      <div className={style.item}>
         <div className={style.image}>
            <img src={imageUrl} alt={imageAlt} />
         </div>
         <div className={style.text}>
            <div className={style.title}>
               {title}
            </div>
            <div className={style.subtitle}>
               {subtitle}
            </div>
         </div>
      </div>
   )
}