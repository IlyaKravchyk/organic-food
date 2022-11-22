import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MainTitle } from "../../components/shared/MainTitle";
import categoryStore from "./store/CategoryStore";
import { CategoriesItems } from "./CategoriesItems/CategoriesItems";
import "./categories.css";

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
            <CategoriesItems
               categoriesData={categoriesData}
            />
         </div>
      </div>
   )
})