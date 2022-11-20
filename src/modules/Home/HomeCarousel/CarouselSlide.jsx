export const CarouselSlide = ({ imageLink, imageAlt, children }) => {
    return (
        <div className='home__slider'>
            <div className='home__slider-image'>
                <img src={imageLink} alt={imageAlt} />
            </div>
            <span className='home__slide-description'>{children}</span>
        </div>
    )
}