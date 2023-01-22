import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";
import style from "./Card.module.scss"

export const Card = ({ categoriesProducts, addToCart, linkTo }) => {

   return (
      <div className={style.item} >
         <div className={style.image}>
            <Link to={linkTo}>
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