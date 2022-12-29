import { MainTitle } from '../../components/shared/MainTitle';
import { ButtonGoShop } from '../../components/shared/Buttons/ButtonGoShop';
import { HomeCarousel } from './HomeCarousel';
import style from "./Home.module.scss";

export const Home = () => {

   return (
      <div className={style.home}>
         <MainTitle
            titleText="Welcome to the organic food store"
         />
         <HomeCarousel />
         <ButtonGoShop
            text="go shop"
         />
      </div>
   )
}