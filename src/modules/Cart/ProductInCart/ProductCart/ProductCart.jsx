import { Image } from 'antd';
import style from "./ProductCart.module.scss";

export const ProductCart = ({ imageUtl, title, description, price }) => {
   return (
      <>
         <div className={style.image}>
            <Image className={style.antImage} src={imageUtl} alt={title} />
         </div>
         <div className={style.wrapper}>
            <div className={style.title}>
               {title}
            </div>
            <div className={style.description}>
               {description}
            </div>
            <div className={style.price}>
               $ {price} usd
            </div>
         </div>
      </>
   )
}