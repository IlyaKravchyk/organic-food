import style from "./AboutWelcome.module.scss"

export const AboutWelcome = ({ title, subtitle }) => {
   return (

      <div className={style.welcome}>
         <div className={style.title}>
            {title}
         </div>
         <div className={style.subtitle}>
            {subtitle}
         </div>
      </div>

   )
}