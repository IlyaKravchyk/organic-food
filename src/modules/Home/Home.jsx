import { MainTitle } from '../../components/MainTitle/MainTitle';
import { Carousel } from 'antd';
import "./home.css";

export const Home = () => {
   return (
      <div className='home__wrapper'>
         <MainTitle
            className="home__title title"
            titleText="Welcome to the organic food store"
         />
         <div className='home__carousel'>
            <Carousel
               autoplay
               draggable
               fade
               pauseOnHover={true}
               pauseOnDotsHover={true}
            >
               <div className='home__slider'>
                  <div className='home__slider-image'>
                     <img src="https://i.ibb.co/bWqW7kk/slide2.png" alt="slide2" />
                  </div>
                  <span className='home__slide-description'>Only fresh products</span>
               </div>
               <div className='home__slider'>
                  <div className='home__slider-image'>
                     <img src="https://i.ibb.co/3CXK5y7/slide1.png" alt="slide1" />
                  </div>
                  <span className='home__slide-description'>Free shipping</span>
               </div>

               <div className='home__slider'>
                  <div className='home__slider-image'>
                     <img src="https://i.ibb.co/GvG8Npv/slide3.png" alt="slide3" />
                  </div>
                  <span className='home__slide-description'>Bonus system</span>
               </div>
            </Carousel>
         </div>
      </div>
   )
}