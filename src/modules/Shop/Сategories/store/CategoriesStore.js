import { makeAutoObservable, runInAction } from "mobx";
import { notification } from 'antd';

class CategoriesStore {
   categoriesData = undefined;

   constructor() {
      makeAutoObservable(this)
   }

   loadCategoriesData = async () => {
      try {
         let response = await fetch('http://localhost:3010/categories')
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