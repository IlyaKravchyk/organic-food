import { makeAutoObservable } from "mobx";

export class CartStore {

   cart = JSON.parse(localStorage.getItem('localCart')) || [];

   constructor() {
      makeAutoObservable(this, undefined, {
         autoBind: true
      })
   }

   addToCart(product) {

      const indexProductInCart = this.cart.findIndex(({ id }) => id === product.id);

      if (indexProductInCart !== -1) {
         this.cart[indexProductInCart].count += 1;
      } else {
         product.count = 1;
         this.cart.push(product)
      }
      localStorage.setItem('localCart', JSON.stringify(this.cart))
   }

   get getCartCount() {
      let sumCount = 0;
      this.cart.forEach(({ count }) => sumCount += count)
      return sumCount
   }

   get getSumAllProduct() {
      let sum = 0;
      this.cart.forEach(({ count, price }) => {
         sum += count * price
      })
      return sum
   }

   deteletedProduct(productId) {
      this.cart = this.cart.filter(({ id }) => id !== productId)
      localStorage.setItem('localCart', JSON.stringify(this.cart))
   }

   countUp(productId) {
      this.cart.map(item => {
         if (item.id === productId) {
            item.count += 1;
         }
         localStorage.setItem('localCart', JSON.stringify(this.cart))
      })
   }

   countDown(productId) {
      this.cart.map(item => {
         if (item.id === productId && item.count > 1) {
            item.count -= 1;
         }
         localStorage.setItem('localCart', JSON.stringify(this.cart))
      })
   }
}

