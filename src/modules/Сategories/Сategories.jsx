import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MainTitle } from "../../components/MainTitle/MainTitle"
import categoryStore from "./store/CategoryStore";
import "./categories.css";
import { Link } from "react-router-dom";

export const Сategories = observer(() => {

   const { categoriesData, loadCategoriesData } = categoryStore;

   useEffect(() => {
      loadCategoriesData()
   }, [])

   return (
      <div className="container">
         <div className="categories__wrapper">
         <MainTitle
            className="categories__title title"
            titleText="categories"
         />
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
      </div>
      </div>
   )
})