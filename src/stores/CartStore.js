import { makeAutoObservable } from "mobx";

class CartStore {

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

}

const cartStore = new CartStore();

export default cartStore