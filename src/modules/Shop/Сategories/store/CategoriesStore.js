import { makeAutoObservable, runInAction } from "mobx";

class CategoriesStore {

   categoriesData = undefined;

   constructor() {
      makeAutoObservable(this)
   }
   loadCategoriesData = () => {
      fetch('http://localhost:3010/categories')
         .then(response => response.json())
         .then(data => runInAction(() => this.categoriesData = [...data]))
   }
}

const categoriesStore = new CategoriesStore();

export default categoriesStore