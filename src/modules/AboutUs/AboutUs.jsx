import { Link } from "react-router-dom";
import { Button } from "../../components/shared/Buttons/Button";
import { MainTitle } from "../../components/shared/MainTitle";
import { BlockInform } from "./BlockInform/BlockInform";
import "./AboutUs.css";

export const AboutUs = () => {
   return (
      <div className="container">
         <div className="about__wrapper">
            <MainTitle
               className="about__title title"
               titleText="about us"
            />
            <BlockInform
               imageUrl="https://i.ibb.co/1T9hXNb/about-Us-image.png"
               imageAlt="fruits"
            />
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