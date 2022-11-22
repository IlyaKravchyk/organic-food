import { AboutItems } from "./AboutItems/AboutItems"

export const BlockInform = ({ imageUrl, imageAlt }) => {
   return (
      <div className="about__block-inform">
         <div className="about__image">
            <img src={imageUrl} alt={imageAlt} />
         </div>
         <AboutItems
            title="We Believe in Organic Foods For Strong Health"
            subtitle="Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition."
         />
      </div>
   )
}