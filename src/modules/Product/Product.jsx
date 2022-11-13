import { ProductStore } from "./ProductStore/ProductStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button } from "../../components/Button/Button";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import {CartStore} from "../../stores/CartStore";
import { Image } from 'antd';
import "./Product.css";


export const Product = observer(() => {

   const [productStore] = useState(new ProductStore())
   const { loadProductData, productData, isLoading } = productStore;
   const { name, price, promotionalPrice, image, description } = productData;
   const [cartStore] = useState(new CartStore())
   const { addToCart } = cartStore;
   const { productId } = useParams();

   useEffect(() => {
      loadProductData(productId)
   }, [])

   return (
      <div className="container">
         <div className="product__wrapper">

{isLoading && <div className="loader"></div>}
{!isLoading &&
   <div className="product__items">
      <div className="product__item">
         <div className="product__image">
            <Image src={image} alt={name} />
         </div>
      </div>
      <div className="product__item">
         <MainTitle
            className="products__title"
            titleText={name}
         />
         <div className="product__price">
            {promotionalPrice && <span className="product__promotional-price">$ {promotionalPrice} usd</span>}
            <span className="product__new-price">$ {price} usd</span>
         </div>
         <div className="product__description">
            {description}
         </div>
         <div className="product__buttons">
            <Button
               className="product__button-add button"
               textButton=" add to cart"
               action={addToCart}
               dataProduct={productData}
            />
            <ButtonBack
               className="product__button-back button-back"
               text="go to back"
            />
         </div>
      </div>
   </div>
}

</div>
      </div>
   )
})