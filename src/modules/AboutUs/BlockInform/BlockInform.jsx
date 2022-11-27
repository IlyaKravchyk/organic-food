import { AboutItems } from "./AboutItems/AboutItems"

export const BlockInform = ({ imageUrl, imageAlt }) => {
   return (
      <div className="about__block-inform">
         <div className="about__image">
            <img src={imageUrl} alt={imageAlt} />
         </div>

         <AboutItems />
      </div>
   )
}