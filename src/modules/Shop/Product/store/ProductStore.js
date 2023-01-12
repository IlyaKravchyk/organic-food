import { makeAutoObservable, runInAction } from "mobx";
import { notification } from 'antd';

export class ProductStore {

   productData = [];
   isLoading = false;


   constructor() {
      makeAutoObservable(this)
   }

   loadProductData = async (productId) => {

      this.isLoading = true

      try {
         let response = await fetch(`http://localhost:3010/products/${productId}`)
         if (response.status >= 400) {
            notification.error({
               message: response.text,
               description: response.statusText
            })
            throw new Error(response)
         }
         let data = await response.json()
         runInAction(() => this.productData = { ...data })
      } catch (e) {
         console.log(e)
      } finally {
         runInAction(() => this.isLoading = false)
      }
   }
}
