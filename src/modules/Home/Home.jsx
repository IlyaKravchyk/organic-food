import { MainTitle } from '../../components/shared/MainTitle';
import { Link } from 'react-router-dom';
import { Button } from '../../components/shared/Buttons/Button';
import { HomeCarousel } from './HomeCarousel/HomeCarousel';
import "./home.css";

export const Home = () => {

   return (
      <div className='home__wrapper'>
         <MainTitle
            className="home__title title"
            titleText="Welcome to the organic food store"
         />
         <HomeCarousel></HomeCarousel>
         <Link to="/categories">
            <Button
               className="home__btn-shop button"
               textButton="go shop"
            />
         </Link>
      </div>
   )
}