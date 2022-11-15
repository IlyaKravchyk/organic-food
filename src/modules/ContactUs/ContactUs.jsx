import { ContactComponent } from "../../components/ContactUs/ContactComponent";
import { Button } from "../../components/Button/Button";
import { Image } from "antd";
import "./contact.css";


export const ContactUs = () => {
   return (
      <div className="container">
         <div className="contact__wrapper">
            <div className="contact__items">
               <div className="contact__item">
                  <div className="contact__image">
                     <Image src="https://i.ibb.co/cx7BKM1/contact-image.png" alt="image" />
                  </div>
               </div>
               <div className="contact__item">
                  <ContactComponent
                     classWrapper="contact__container"
                     classTitle="contact__title"
                     classInfo="contact__info"
                     classSubtitle="contact__subtitle"
                  />
               </div>
            </div>
            <div className="contact__form">
               <form action="#" className="form">
                  <div className="form__items">
                     <div className="form__item">
                        <div className="form__name">full name*</div>
                        <input className="form__input" type="text" required placeholder="your name" />
                     </div>
                     <div className="form__item">
                        <div className="form__name">email adrdress*</div>
                        <input className="form__input" type="email" required placeholder="your email" />
                     </div>
                     <div className="form__item">
                        <div className="form__name">company*</div>
                        <input className="form__input" type="text" required placeholder="our company name" />
                     </div>
                     <div className="form__item">
                        <div className="form__name">subject</div>
                        <input className="form__input" type="text" placeholder="how we can help" />
                     </div>
                  </div>
                  <div className="form__message">
                     <div className="form__name">message</div>
                     <textarea className="form__input form__textarea" placeholder="hello there..."></textarea>
                  </div>
                  <div className="form__button">
                     <Button
                        className="form__btn button"
                        textButton="send"
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}