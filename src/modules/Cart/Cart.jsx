import cartStore from "../../stores/CartStore";
import { Image } from 'antd';
import { observer } from "mobx-react-lite";
import "./cart.css"
import { CartCount } from "./components/CartCount";
import { CartTotal } from "./components/CartTotal";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const Cart = observer(() => {

   const { cart, getSumAllProduct, deteletedProduct, countUp, countDown } = cartStore;

   return (
      <div className="cart__container">
         {!cart.length &&
            <div className="cart__empty">
               Cart is empty.
               <Link to="/categories">
                  <Button
                     className="cart__empty-btn button"
                     textButton="go shop"
                  />
               </Link>
            </div>}
         {(cart.length !== 0) && cart.map(({ count, id, image, name, price, description }) => {
            return (
               <div className="cart__carts" key={id}>
                  <div className="cart__cart">
                     <div className="cart__item">
                        <div className="cart__image">
                           <Image className="cart__ant-image" src={image} alt={name} />
                        </div>
                        <div className="cart__wrap">
                           <div className="cart__title">
                              {name}
                           </div>
                           <div className="cart__description">
                              {description}
                           </div>
                           <div className="cart__price">
                              $ {price} usd
                           </div>
                        </div>
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
                        <div><i className="fa fa-trash-o" aria-hidden="true" onClick={() => deteletedProduct(id)}></i></div>
                     </div>
                  </div>
               </div>
            )
         })}

         <CartTotal
            cart={cart}
            getSumAllProduct={getSumAllProduct}
         />
      </div>
   )
})