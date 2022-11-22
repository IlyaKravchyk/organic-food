import { Image } from 'antd';

export const ProductCart = ({ imageUtl, title, description, price }) => {
   return (
      <>
         <div className="cart__image">
            <Image className="cart__ant-image" src={imageUtl} alt={title} />
         </div>
         <div className="cart__wrap">
            <div className="cart__title">
               {title}
            </div>
            <div className="cart__description">
               {description}
            </div>
            <div className="cart__price">
               $ {price} usd
            </div>
         </div>
      </>
   )
}