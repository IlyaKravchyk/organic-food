import style from "./CarouselSlide.module.scss"

export const CarouselSlide = ({ imageLink, imageAlt, children }) => {
   return (
      <div className={style.slider}>
         <div className={style.image}>
            <img src={imageLink} alt={imageAlt} />
         </div>
         <span className={style.description}>{children}</span>
      </div>
   )
}