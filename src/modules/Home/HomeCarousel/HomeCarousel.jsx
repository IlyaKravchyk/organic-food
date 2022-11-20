import { Carousel } from 'antd';
import { useRef } from 'react';
import { CarouselButton } from './CarouselButton';
import { CarouselSlide } from './CarouselSlide';

export const HomeCarousel = () => {
    const ref = useRef()

    const lastSlide = () => {
        ref.current.prev()
    }
    const nextSlide = () => {
        ref.current.next()
    }

    return (
        <div className='home__carousel'>
            <Carousel
                autoplay
                draggable
                fade
                pauseOnHover={true}
                pauseOnDotsHover={true}
                ref={ref}

            >   <CarouselSlide imageLink="https://i.ibb.co/bWqW7kk/slide2.png" imageAlt="slide1" >
                    Only fresh products
                </CarouselSlide>

                <CarouselSlide imageLink="https://i.ibb.co/3CXK5y7/slide1.png" imageAlt="slide2" >
                    Free shipping
                </CarouselSlide>

                <CarouselSlide imageLink="https://i.ibb.co/GvG8Npv/slide3.png" imageAlt="slide3">
                    Only fresh products
                </CarouselSlide>

            </Carousel>

            <CarouselButton className="home__btn-back" action={lastSlide}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </CarouselButton>

            <CarouselButton className="home__btn-next" action={nextSlide}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </CarouselButton>
        </div >
    )
}