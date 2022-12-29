import cartStore from "../../stores/CartStore";
import { observer } from "mobx-react-lite";
import { CartTotal } from "./CartTotal";
import { useState } from "react";
import { CartEmpty } from "./CartEmpty";
import { ProductInCart } from "./ProductInCart";
import "./cart.css";
import "./CartMedia.css";
import style from "./Cart.module.scss";

export const Cart = observer(() => {

   const { cart, getSumAllProduct, deteletedProduct, countUp, countDown } = cartStore;
   const [isModalDeliveryOpen, setIsModalDeliveryOpen] = useState(false);
   const [isModalPayOpen, setIsModalPayOpen] = useState(false);

   return (
      <div className="container">
         <div className={style.cart}>
            {!cart.length && <CartEmpty text="Cart is empty." />}
            {(cart.length !== 0) && cart.map(({ count, id, image, name, price, description }) => {
               return (
                  <ProductInCart
                     key={id}
                     count={count}
                     id={id}
                     image={image}
                     name={name}
                     price={price}
                     description={description}
                     countUp={countUp}
                     countDown={countDown}
                     deteletedProduct={deteletedProduct}
                     cart={cart}
                     getSumAllProduct={getSumAllProduct}
                     setIsModalDeliveryOpen={setIsModalDeliveryOpen}
                     setIsModalPayOpen={setIsModalPayOpen}
                     isModalDeliveryOpen={isModalDeliveryOpen}
                     isModalPayOpen={isModalPayOpen}
                  />
               )
            })}

            <CartTotal
               cart={cart}
               getSumAllProduct={getSumAllProduct}
               setIsModalDeliveryOpen={setIsModalDeliveryOpen}
               setIsModalPayOpen={setIsModalPayOpen}
               isModalDeliveryOpen={isModalDeliveryOpen}
               isModalPayOpen={isModalPayOpen}
            />
         </div>
      </div>
   )
})