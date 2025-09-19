import { makeAutoObservable, runInAction } from "mobx";
import { notification } from 'antd';

class AllPoductsStore {
   constructor() {
      makeAutoObservable(this)
   }
   allProductsData = undefined
   visible = false;
   cardInPage = 3;
   cardCount = 36;

   loadAllProductsData = async (page = 1) => {
      try {
         let response = await fetch(`https://organic-food-api.onrender.com/products?_page=${page}&_limit=${this.cardInPage}`)
         if (response.status >= 400) {
            notification.error({
               message: response.status,
               description: response.statusText
            })
            throw new Error(response)
         }
         let data = await response.json()
         runInAction(() => {
            this.allProductsData = [...data]
         })
      } catch (e) {
         console.log(e.status)
      }
   }
   setVisible = (data) => {
      this.visible = data
   }
}

const allPoductsStore = new AllPoductsStore()

export default allPoductsStore