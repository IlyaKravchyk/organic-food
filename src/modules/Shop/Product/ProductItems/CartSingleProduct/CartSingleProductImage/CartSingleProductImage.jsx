import { Image } from 'antd';

export const CartSingleProductImage = ({ imageUrl, categoryName }) => {
   return (
      <div className="product__item">
         <div className="product__image">
            <Image src={imageUrl} alt={categoryName} />
         </div>
      </div>
   )
}