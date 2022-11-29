import { makeAutoObservable, runInAction } from "mobx";

export class ProductStore {

   productData = [];
   isLoading = false;


   constructor() {
      makeAutoObservable(this)
   }

   loadProductData = async (productId) => {

      this.isLoading = true

      const response = await fetch(`http://localhost:3010/products/${productId}`)
      const data = await response.json()
      runInAction(() => {
         this.productData = { ...data }
         this.isLoading = false
      })
   }


}
