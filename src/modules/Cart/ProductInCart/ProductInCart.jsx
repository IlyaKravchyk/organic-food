import { Button } from "../../../components/shared/Buttons/Button";
import { CartCount } from "./CartCount";
import { ProductCart } from "./ProductCart";
import style from "./ProductInCart.module.scss"

export const ProductInCart = ({ count, id, image, name, price, description, countUp, countDown, deteletedProduct }) => {
   return (
      <div className={style.carts} key={id}>
         <div className={style.cart}>
            <div className={style.item}>
               <ProductCart
                  imageUtl={image}
                  title={name}
                  description={description}
                  price={price}
               />
            </div>
            <div className={style.item}>
               <CartCount
                  productId={id}
                  countUp={countUp}
                  countDown={countDown}
                  count={count}
               />
               <div className={style.price}>
                  $ {(count * price).toFixed(2)} usd
               </div>
               <Button
                  className={style.button}
                  textButton={<i className="fa fa-trash-o" aria-hidden="true"></i>}
                  action={deteletedProduct}
                  dataProduct={id}
               />
            </div>
         </div>
      </div >
   )
}