import { Link } from "react-router-dom";

export const CategoriesItems = ({ categoriesData }) => {
   return (
      <div className="categories__items">
         {!categoriesData && <div className="loader"></div>}
         {categoriesData && categoriesData.map(({ id, category, image }) => {
            return (
               <div className="categories__item" key={id}>
                  <div className="categories__image">
                     <Link to={category} >
                        <img src={image} alt={category} />
                        <span className="categories__name">{category}</span>
                     </Link>
                  </div>
               </div>
            )
         })}
      </div>
   )
}