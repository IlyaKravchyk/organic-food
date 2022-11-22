export const AboutItems = ({ title, subtitle }) => {
   return (

      <div className="about__items">
         <div className="about__item-title">
            {title}
         </div>
         <div className="about__subtitle">
            {subtitle}
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
   )
}