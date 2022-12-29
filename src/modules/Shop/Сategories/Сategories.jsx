import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { MainTitle } from "../../../components/shared/MainTitle";
import categoriesStore from "./store/CategoriesStore";
import { CategoriesItems } from "./CategoriesItems/CategoriesItems";

export const Сategories = observer(() => {

   const { categoriesData, loadCategoriesData } = categoriesStore;

   useEffect(() => {
      loadCategoriesData()
   }, [])

   return (
      <div className="container">
         <div className={"categories"}>
            <MainTitle
               titleText="categories"
            />
            <CategoriesItems
               categoriesData={categoriesData}
            />
         </div>
      </div>
   )
})