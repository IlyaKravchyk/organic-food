import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsCategoryStore } from "./store/ProductsCategoryStore";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Button } from "../../components/Button/Button";
import { observer } from "mobx-react-lite";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import "./ProductsCategory.css";
import cartStore from "../../stores/CartStore"

export const ProductsCategory = observer(() => {

   const { addToCart } = cartStore
   const [productsCategoryStore] = useState(new ProductsCategoryStore())
   const { categoriesProducts, loadCategoriesProducts } = productsCategoryStore
   const { products } = useParams()

   useEffect(() => {
      loadCategoriesProducts()
   }, [])


   return (
      <div className="products__wrapper">
         <MainTitle
            className="product__title"
            titleText={products}
         />
         <div className="products__items">
            {!categoriesProducts && <div className="loader"></div>}
            {categoriesProducts && categoriesProducts.map((categoriesProducts) => {
               if (products === categoriesProducts.category) {
                  return (
                     <div className="products__item" key={categoriesProducts.id}>
                        <div className="products__image">
                           <Link to={`./${categoriesProducts.id}`}>
                              <img src={categoriesProducts.image} alt="name" />
                           </Link>
                        </div>
                        <div className="products__name">{categoriesProducts.name}</div>
                        <div className="products__price">
                           {categoriesProducts.promotionalPrice && <span className="products__promotional-price">$ {categoriesProducts.promotionalPrice} usd</span>}
                           <span className="products__new-price">$ {categoriesProducts.price} usd</span>
                        </div>
                        <Button
                           className="products__button-add button"
                           textButton=" add to cart"
                           action={addToCart}
                           dataProduct={categoriesProducts}
                        />
                     </div>
                  )
               }
            })}
         </div>
         <ButtonBack
            className="products__button-back button-back"
            text="go to back"
         />
      </div >)
})