export const DescriptionItem = ({ imageUrl, imageAlt, title, subtitle }) => {
   return (
      <div className="description__item">
         <div className="description__image">
            <img src={imageUrl} alt={imageAlt} />
         </div>
         <div className="description__text">
            <div className="description__title">
               {title}
            </div>
            <div className="description__subtitle">
               {subtitle}
            </div>
         </div>
      </div>
   )
}