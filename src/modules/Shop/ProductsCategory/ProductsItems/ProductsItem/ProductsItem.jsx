import { Button } from "../../../../../components/shared/Buttons/Button";
import { Link } from "react-router-dom";
import style from "./ProductItem.module.scss"

export const ProductsItem = ({ categoriesProducts, addToCart }) => {
   return (
      <div className={style.item} >
         <div className={style.image}>
            <Link to={`./${categoriesProducts.id}`}>
               <img src={categoriesProducts.image} alt={categoriesProducts.name} />
            </Link>
         </div>
         <div className={style.name}>{categoriesProducts.name}</div>
         <div className={style.price}>
            {categoriesProducts.promotionalPrice && <span className={style.promotionalPrice}>$ {categoriesProducts.promotionalPrice} usd</span>}
            <span className={style.newPrice}>$ {categoriesProducts.price} usd</span>
         </div>
         <Button
            className="products__button-add button"
            textButton="add to cart"
            action={addToCart}
            dataProduct={categoriesProducts}
         />
      </div>
   )
}