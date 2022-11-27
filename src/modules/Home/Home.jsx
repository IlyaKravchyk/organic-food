import { MainTitle } from '../../components/shared/MainTitle';
import { Link } from 'react-router-dom';
import { Button } from '../../components/shared/Buttons/Button';
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
         <Link to="/categories">
            <Button
               className="home__btn-shop button"
               textButton="go shop"
            />
         </Link>
      </div>
   )
}