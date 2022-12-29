import { ButtonGoShop } from "../../components/shared/Buttons/ButtonGoShop"
import { MainTitle } from "../../components/shared/MainTitle";
import { BlockInform } from "./BlockInform";
import { AboutWelcome } from "./AboutWelcome";
import style from "./AboutUs.module.scss";

export const AboutUs = () => {
   return (
      <div className="container">
         <div className={style.wrapper}>
            <MainTitle
               titleText="about us"
            />
            <AboutWelcome
               title="We Believe in Organic Foods For Strong Health"
               subtitle="Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.
               Our rich experience helps us in ensuring that the products brought to you are 100% chemical-free. To live a better, healthier, and wholesome life by providing them with 100% certified, authentic organic food."
            />
            <BlockInform
               imageUrl="https://i.ibb.co/1T9hXNb/about-Us-image.png"
               imageAlt="fruits"
            />
            <ButtonGoShop
               text="shop now"
            />
         </div>
      </div>
   )
}