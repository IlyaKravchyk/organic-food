import cartStore from "../../stores/CartStore";
import { Image } from 'antd';


export const Cart = () => {

   const { cart, getCartCount } = cartStore;

   return (
      <div className="cart__container">

         {!cart.length && <h2>Корзина пуста</h2>}
         {(cart.length !== 0) && cart.map(({ count, id, image, name, price }) => {
            return (
               <div className="cart__items" key={id}>
                  <div className="cart__item">
                     <div className="car__image">
                        <Image src={image} alt="name" />
                     </div>
                     <div className="cart__item">
                        <div className="cart__inform">
                           <div className="cart__inform-item">
                              <div className="cart__title">
                                 {name}
                              </div>
                              <div className="cart__price">
                                 $ {price} usd
                              </div>
                           </div>
                           <div className="cart__inform-item">
                              <div className="cart__amount">
                                 {count}
                              </div>
                              <div className="cart__btn-del">
                                 deleted
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}

      </div>
   )
}