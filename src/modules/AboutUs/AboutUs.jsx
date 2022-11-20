import { Link } from "react-router-dom";
import { Button } from "../../components/shared/Buttons/Button";
import { MainTitle } from "../../components/shared/MainTitle";
import "./AboutUs.css";

export const AboutUs = () => {
   return (
      <div className="container">
         <div className="about__wrapper">
            <MainTitle
               className="about__title title"
               titleText="about us"
            />
            <div className="about__items">
               <div className="about__item">
                  <div className="about__image">
                     <img src="https://i.ibb.co/1T9hXNb/about-Us-image.png" alt="image" />
                  </div>
               </div>
               <div className="about__item ">
                  <div className="about__item-title">
                     We Believe in Organic Foods For Strong Health
                  </div>
                  <div className="about__subtitle">
                     Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.
                  </div>
                  <div className="about__description description">
                     <div className="description__item">
                        <div className="description__image">
                           <img src="https://i.ibb.co/N34Pb16/about-Us-image3.png" alt="image" />
                        </div>
                        <div className="description__text">
                           <div className="description__title">
                              Organic Foods Only
                           </div>
                           <div className="description__subtitle">
                              The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.
                           </div>
                        </div>
                     </div>
                     <div className="description__item">
                        <div className="description__image">
                           <img src="https://i.ibb.co/Dr0jd2Q/about-Us-image2.png" alt="image" />
                        </div>
                        <div className="description__text">
                           <div className="description__title">
                              Quality Standards
                           </div>
                           <div className="description__subtitle">
                              Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Link to="/categories">
               <Button
                  className="about__btn button"
                  textButton="shop now"
               />
            </Link>
         </div>
      </div>
   )
}