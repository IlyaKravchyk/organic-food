import style from "./BlockInform.module.scss"
import { AboutItems } from "./AboutItems"

export const BlockInform = ({ imageUrl, imageAlt }) => {
   return (
      <div className={style.inform}>
         <div className={style.image}>
            <img src={imageUrl} alt={imageAlt} />
         </div>

         <AboutItems />
      </div>
   )
}