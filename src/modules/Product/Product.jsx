import { ProductStore } from "./ProductStore/ProductStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import cartStore from "../../stores/CartStore";
import "./Product.css";
import { ProductItems } from "./ProductItems/ProductItems";

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
         <div className="product__wrapper">
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