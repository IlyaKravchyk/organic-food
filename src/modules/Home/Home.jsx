import { MainTitle } from '../../components/shared/MainTitle';
import { ButtonGoShop } from '../../components/shared/Buttons/ButtonGoShop';
import { HomeCarousel } from './HomeCarousel/HomeCarousel';
import "./Home.css";
import "./HomeMedia.css";

export const Home = () => {

   return (
      <div className='home__wrapper'>
         <MainTitle
            className="home__title title"
            titleText="Welcome to the organic food store"
         />
         <HomeCarousel />
         <ButtonGoShop
            text="go shop"
         />
      </div>
   )
}