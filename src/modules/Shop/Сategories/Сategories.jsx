import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MainTitle } from "../../../components/shared/MainTitle";
import categoriesStore from "./store/CategoriesStore";
import { CategoriesItems } from "./CategoriesItems/CategoriesItems";
import "./Categories.css";
import "./CategoriesMedia.css";


export const Сategories = observer(() => {

   const { categoriesData, loadCategoriesData } = categoriesStore;

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