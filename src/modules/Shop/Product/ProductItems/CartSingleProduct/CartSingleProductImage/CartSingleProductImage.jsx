import { Image } from 'antd';
import style from "./CartSingleProductImage.module.scss"

export const CartSingleProductImage = ({ imageUrl, categoryName }) => {
   return (
      <div className={style.item}>
         <div className={style.image}>
            <Image src={imageUrl} alt={categoryName} />
         </div>
      </div>
   )
}