import { Button } from "../../../components/shared/Buttons/Button";
import { CartCount } from "./CartCount/CartCount";
import { ProductCart } from "./ProductCart/ProductCart";

export const ProductInCart = ({ count, id, image, name, price, description, countUp, countDown, deteletedProduct }) => {
   return (
      <div className="cart__carts" key={id}>
         <div className="cart__cart">
            <div className="cart__item">
               <ProductCart
                  imageUtl={image}
                  title={name}
                  description={description}
                  price={price}
               />
            </div>
            <div className="cart__item">
               <CartCount
                  productId={id}
                  countUp={countUp}
                  countDown={countDown}
                  count={count}
               />
               <div className="cart__cart-price">
                  $ {(count * price).toFixed(2)} usd
               </div>
               <Button
                  className="cart__delete-btn"
                  textButton={<i className="fa fa-trash-o" aria-hidden="true"></i>}
                  action={deteletedProduct}
                  dataProduct={id}
               />
            </div>
         </div>
      </div >
   )
}