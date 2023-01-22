import { MainTitle } from "../../../components/shared/MainTitle";
import { AllProductsItems } from "./AllProductsItems/AllProductsItems";
import allPoductsStore from "./AllPoductsStore/AllPoductsStore";
import cartStore from "../../../stores/CartStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Pagination } from 'antd';
import style from "./AllPoducts.module.scss"


export const AllPoducts = observer(() => {

   const { allProductsData, loadAllProductsData, cardInPage, cardCount } = allPoductsStore
   const { addToCart } = cartStore;

   useEffect(() => {
      loadAllProductsData()
   }, [])
   return (
      <div className="container">
         <div className={style.wrapper}>
            <MainTitle
               titleText='shop'
            />
            {!allProductsData && <div className="loader"></div>}
            {allProductsData &&
               <>
                  <AllProductsItems
                     allProductsData={allProductsData}
                     addToCart={addToCart}
                  />
                  {(cardCount / cardInPage) > 1 &&
                     <div className={style.pagination}>
                        <Pagination
                           total={cardCount}
                           pageSize={cardInPage}
                           onChange={page => loadAllProductsData(page)}
                        />
                     </div>
                  }
               </>
            }
         </div >
      </div >
   )
})