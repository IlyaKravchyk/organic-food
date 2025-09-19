import { makeAutoObservable, runInAction } from "mobx";
import { notification } from 'antd';

export class ProductsCategoryStore {

   categoriesProducts = undefined;

   constructor() {
      makeAutoObservable(this)
   }

   loadCategoriesProducts = async (category) => {
      try {
         let response = await fetch(`https://organic-food-api.onrender.com/products?category=${category}`)
         if (response.status >= 400) {
            notification.error({
               message: response.status,
               description: response.statusText
            })
            throw new Error(response)
         }
         let data = await response.json()
         runInAction(() => this.categoriesProducts = [...data])
      } catch (e) {
         console.log(e);
      }
   }
}