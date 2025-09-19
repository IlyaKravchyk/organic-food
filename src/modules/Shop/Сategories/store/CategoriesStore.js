import { makeAutoObservable, runInAction } from "mobx";
import { notification } from 'antd';

class CategoriesStore {
   categoriesData = undefined;

   constructor() {
      makeAutoObservable(this)
   }

   loadCategoriesData = async () => {
      try {
         let response = await fetch('https://organic-food-api.onrender.com/categories')
         if (response.status >= 400) {
            notification.error({
               message: response.status,
               description: response.statusText
            })
            throw new Error(response)
         }
         let data = await response.json();
         runInAction(() => this.categoriesData = [...data])
      } catch (e) { console.log(e) }
   }
}

const categoriesStore = new CategoriesStore();

export default categoriesStore