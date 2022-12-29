import { ProductItems } from "./ProductItems";
import { ProductStore } from "./store/ProductStore";
import cartStore from "../../../stores/CartStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Product.module.scss"

export const Product = observer(() => {

   const [productStore] = useState(new ProductStore())
   const { loadProductData, productData, isLoading } = productStore;
   const { name, price, promotionalPrice, image, description } = productData;
   const { addToCart } = cartStore;
   const { productId } = useParams();

   useEffect(() => {
      loadProductData(productId)
   }, [])

   return (
      <div className="container">
         <div className={style.product}>
            <ProductItems
               isLoading={isLoading}
               imageUrl={image}
               categoryName={name}
               promotionalPrice={promotionalPrice}
               price={price}
               description={description}
               productData={productData}
               addToCart={addToCart}
            />
         </div>
      </div>
   )
})