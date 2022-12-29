import { Link } from "react-router-dom";
import style from "./CategoriesItems.module.scss"

export const CategoriesItems = ({ categoriesData }) => {
   return (
      <div className={style.items}>
         {!categoriesData && <div className="loader"></div>}
         {categoriesData && categoriesData.map(({ id, category, image }) => {
            return (
               <div className={style.item} key={id}>
                  <div className={style.image}>
                     <Link to={category} >
                        <img src={image} alt={category} />
                        <span className={style.nameCategory}>{category}</span>
                     </Link>
                  </div>
               </div>
            )
         })}
      </div>
   )
}