import { MainTitle } from '../../components/MainTitle/MainTitle';
import { useRef } from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import "./home.css";



export const Home = () => {

   const ref = useRef()

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
               ref={ref}
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

            <button className='home__btn-back' onClick={() => ref.current.prev()}>
               <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>


            <button className='home__btn-next' onClick={() => ref.current.next()}>
               <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
         </div>
         <Link to="/categories">
            <Button
               className="home__btn-shop button"
               textButton="go shop"
            />
         </Link>
      </div>
   )
}