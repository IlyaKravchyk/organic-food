import { Button } from "../../../../components/shared/Buttons/Button";
import { Link } from "react-router-dom";

export const ProductsItem = ({ categoriesProducts, addToCart }) => {
   return (
      <div className="products__item" key={categoriesProducts.id}>
         <div className="products__image">
            <Link to={`./${categoriesProducts.id}`}>
               <img src={categoriesProducts.image} alt={categoriesProducts.name} />
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