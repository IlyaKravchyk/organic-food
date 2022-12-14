import { AboutItem } from "./AboutItem";
import style from "./AboutItems.module.scss"

export const AboutItems = () => {
   return (

      <div className={style.items}>
         <AboutItem
            imageUrl="https://i.ibb.co/N34Pb16/about-Us-image3.png"
            imageAlt="only organic foods"
            title="Organic Foods Only"
            subtitle="The Product that you ordered will be verified that we have or not if have we will start to move on with the next step."
         />
         <AboutItem
            imageUrl="https://i.ibb.co/Dr0jd2Q/about-Us-image2.png"
            imageAlt="Quality Standards"
            title="Quality Standards"
            subtitle="Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product."
         />
      </div>
   )
}